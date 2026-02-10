/**
 * Trading Dashboard — read-only Web UI for NanoClaw forex trading data.
 *
 * Surfaces sentiment briefs, event alerts, trade journal, portfolio,
 * watchlist, and scheduled tasks from the workspace files and SQLite DB.
 *
 * Uses Node's built-in `http` module — no external dependencies.
 */
import fs from 'fs';
import http from 'http';
import path from 'path';

import { DASHBOARD_PORT, GROUPS_DIR } from './config.js';
import { getAllTasks } from './db.js';
import { logger } from './logger.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readWorkspaceFile(groupFolder: string, ...parts: string[]): string {
  try {
    const filePath = path.join(GROUPS_DIR, groupFolder, ...parts);
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

function listWorkspaceFiles(groupFolder: string, ...parts: string[]): string[] {
  try {
    const dirPath = path.join(GROUPS_DIR, groupFolder, ...parts);
    if (!fs.existsSync(dirPath)) return [];
    return fs
      .readdirSync(dirPath)
      .filter((f) => f.endsWith('.md'))
      .sort()
      .reverse();
  } catch {
    return [];
  }
}

function readMarkdownFile(
  groupFolder: string,
  ...parts: string[]
): { name: string; content: string } {
  const filePath = path.join(GROUPS_DIR, groupFolder, ...parts);
  const name = path.basename(filePath, '.md');
  try {
    return { name, content: fs.readFileSync(filePath, 'utf-8') };
  } catch {
    return { name, content: '' };
  }
}

// ---------------------------------------------------------------------------
// API JSON responses
// ---------------------------------------------------------------------------

function apiSentimentDaily(group: string) {
  const files = listWorkspaceFiles(group, 'sentiment', 'daily');
  return files.map((f) => readMarkdownFile(group, 'sentiment', 'daily', f));
}

function apiSentimentAlerts(group: string) {
  const files = listWorkspaceFiles(group, 'sentiment', 'alerts');
  return files.map((f) => readMarkdownFile(group, 'sentiment', 'alerts', f));
}

function apiSentimentSummary(group: string) {
  return readWorkspaceFile(group, 'sentiment', 'summary.md');
}

function apiPortfolio(group: string) {
  return readWorkspaceFile(group, 'portfolio.md');
}

function apiWatchlist(group: string) {
  return readWorkspaceFile(group, 'watchlist.md');
}

function apiTrades(group: string) {
  const files = listWorkspaceFiles(group, 'trades');
  return files.map((f) => readMarkdownFile(group, 'trades', f));
}

function apiTasks() {
  return getAllTasks().map((t) => ({
    id: t.id,
    group: t.group_folder,
    prompt: t.prompt,
    scheduleType: t.schedule_type,
    scheduleValue: t.schedule_value,
    status: t.status,
    nextRun: t.next_run,
    lastRun: t.last_run,
    lastResult: t.last_result,
  }));
}

// ---------------------------------------------------------------------------
// HTML Dashboard (single-page, no build step)
// ---------------------------------------------------------------------------

function dashboardHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NanoClaw Trading Dashboard</title>
<style>
  :root {
    --bg: #0f1117;
    --surface: #1a1d27;
    --border: #2a2d3a;
    --text: #e1e4ed;
    --text-muted: #8b8fa3;
    --accent: #4f8ff7;
    --green: #34d399;
    --red: #f87171;
    --yellow: #fbbf24;
    --orange: #fb923c;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
  }
  header {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  header h1 {
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  header h1 span { font-size: 22px; }
  .refresh-btn {
    background: var(--border);
    color: var(--text-muted);
    border: none;
    padding: 6px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
  }
  .refresh-btn:hover { background: var(--accent); color: #fff; }
  .container { max-width: 1400px; margin: 0 auto; padding: 20px 24px; }
  .tabs {
    display: flex;
    gap: 4px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 20px;
    overflow-x: auto;
  }
  .tab {
    padding: 10px 18px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    font-size: 14px;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
  }
  .tab:hover { color: var(--text); }
  .tab.active { color: var(--accent); border-bottom-color: var(--accent); }
  .panel { display: none; }
  .panel.active { display: block; }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 16px;
  }
  .card h3 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--accent);
  }
  .card pre {
    white-space: pre-wrap;
    word-break: break-word;
    font-size: 13px;
    color: var(--text);
    line-height: 1.7;
  }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 16px; }
  .stat-row {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .stat {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 20px;
    flex: 1;
    min-width: 140px;
  }
  .stat .label { font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: .5px; }
  .stat .value { font-size: 24px; font-weight: 700; margin-top: 4px; }
  .stat .value.green { color: var(--green); }
  .stat .value.red { color: var(--red); }
  .stat .value.yellow { color: var(--yellow); }
  .stat .value.accent { color: var(--accent); }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; color: var(--text-muted); font-weight: 500; padding: 8px 12px; border-bottom: 1px solid var(--border); }
  td { padding: 8px 12px; border-bottom: 1px solid var(--border); }
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .badge-active { background: rgba(52,211,153,.15); color: var(--green); }
  .badge-paused { background: rgba(251,191,36,.15); color: var(--yellow); }
  .badge-completed { background: rgba(139,143,163,.15); color: var(--text-muted); }
  .badge-open { background: rgba(79,143,247,.15); color: var(--accent); }
  .badge-closed { background: rgba(139,143,163,.15); color: var(--text-muted); }
  .empty {
    text-align: center;
    padding: 48px 20px;
    color: var(--text-muted);
    font-size: 14px;
  }
  .empty p:first-child { font-size: 32px; margin-bottom: 8px; }
  @media (max-width: 640px) {
    .container { padding: 12px; }
    .grid { grid-template-columns: 1fr; }
    .stat-row { flex-direction: column; }
    header { padding: 12px 16px; }
  }
</style>
</head>
<body>
<header>
  <h1><span>📊</span> NanoClaw Trading Dashboard</h1>
  <button class="refresh-btn" onclick="loadAll()">↻ Refresh</button>
</header>
<div class="container">
  <div class="tabs" id="tabs">
    <button class="tab active" data-tab="overview">Overview</button>
    <button class="tab" data-tab="sentiment">Sentiment</button>
    <button class="tab" data-tab="alerts">Alerts</button>
    <button class="tab" data-tab="trades">Trades</button>
    <button class="tab" data-tab="watchlist">Watchlist</button>
    <button class="tab" data-tab="tasks">Scheduled Tasks</button>
  </div>

  <!-- Overview -->
  <div class="panel active" id="panel-overview">
    <div class="stat-row" id="stats"></div>
    <div class="grid">
      <div class="card">
        <h3>📋 Portfolio</h3>
        <pre id="portfolio-content">Loading…</pre>
      </div>
      <div class="card">
        <h3>📈 Sentiment Summary</h3>
        <pre id="sentiment-summary-content">Loading…</pre>
      </div>
    </div>
    <div class="card">
      <h3>🎯 Watchlist</h3>
      <pre id="watchlist-overview-content">Loading…</pre>
    </div>
  </div>

  <!-- Sentiment Briefs -->
  <div class="panel" id="panel-sentiment">
    <div id="sentiment-list"></div>
  </div>

  <!-- Alerts -->
  <div class="panel" id="panel-alerts">
    <div id="alerts-list"></div>
  </div>

  <!-- Trades -->
  <div class="panel" id="panel-trades">
    <div class="grid" id="trades-list"></div>
  </div>

  <!-- Watchlist -->
  <div class="panel" id="panel-watchlist">
    <div class="card">
      <h3>🎯 Watchlist</h3>
      <pre id="watchlist-content">Loading…</pre>
    </div>
  </div>

  <!-- Scheduled Tasks -->
  <div class="panel" id="panel-tasks">
    <div class="card">
      <h3>⏰ Scheduled Tasks</h3>
      <div id="tasks-table"></div>
    </div>
  </div>
</div>

<script>
const GROUP = 'main';

// --- Tab switching ---
document.getElementById('tabs').addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
});

// --- API helpers ---
async function api(endpoint) {
  const res = await fetch('/api/' + endpoint + '?group=' + GROUP);
  return res.json();
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function emptyState(msg) {
  return '<div class="empty"><p>📭</p><p>' + escapeHtml(msg) + '</p></div>';
}

function badgeClass(status) {
  if (status === 'active' || status === 'Open') return 'badge-active';
  if (status === 'paused') return 'badge-paused';
  return 'badge-completed';
}

// --- Render functions ---
function renderStats(data) {
  const el = document.getElementById('stats');
  const briefs = data.sentimentDaily || [];
  const alerts = data.alerts || [];
  const trades = data.trades || [];
  const tasks = data.tasks || [];
  const activeTasks = tasks.filter(t => t.status === 'active').length;
  el.innerHTML =
    '<div class="stat"><div class="label">Sentiment Briefs</div><div class="value accent">' + briefs.length + '</div></div>' +
    '<div class="stat"><div class="label">Event Alerts</div><div class="value yellow">' + alerts.length + '</div></div>' +
    '<div class="stat"><div class="label">Trade Entries</div><div class="value green">' + trades.length + '</div></div>' +
    '<div class="stat"><div class="label">Active Tasks</div><div class="value">' + activeTasks + ' / ' + tasks.length + '</div></div>';
}

function renderPortfolio(md) {
  document.getElementById('portfolio-content').textContent = md || 'No portfolio data yet. Ask Andy to track a position.';
}

function renderSentimentSummary(md) {
  document.getElementById('sentiment-summary-content').textContent = md || 'No sentiment summary yet. Ask Andy for a macro brief.';
}

function renderWatchlist(md) {
  document.getElementById('watchlist-content').textContent = md || 'No watchlist yet. Ask Andy to watch a pair.';
  document.getElementById('watchlist-overview-content').textContent = md || 'No watchlist yet.';
}

function renderSentimentBriefs(items) {
  const el = document.getElementById('sentiment-list');
  if (!items.length) { el.innerHTML = emptyState('No sentiment briefs yet. Set up a daily macro brief with Andy.'); return; }
  el.innerHTML = items.map(i =>
    '<div class="card"><h3>📊 ' + escapeHtml(i.name) + '</h3><pre>' + escapeHtml(i.content) + '</pre></div>'
  ).join('');
}

function renderAlerts(items) {
  const el = document.getElementById('alerts-list');
  if (!items.length) { el.innerHTML = emptyState('No event alerts yet. Ask Andy to set up release alerts.'); return; }
  el.innerHTML = items.map(i =>
    '<div class="card"><h3>🚨 ' + escapeHtml(i.name) + '</h3><pre>' + escapeHtml(i.content) + '</pre></div>'
  ).join('');
}

function renderTrades(items) {
  const el = document.getElementById('trades-list');
  if (!items.length) { el.innerHTML = emptyState('No trade entries yet. Tell Andy about a trade to start journaling.'); return; }
  el.innerHTML = items.map(i =>
    '<div class="card"><h3>💱 ' + escapeHtml(i.name) + '</h3><pre>' + escapeHtml(i.content) + '</pre></div>'
  ).join('');
}

function renderTasks(items) {
  const el = document.getElementById('tasks-table');
  if (!items.length) { el.innerHTML = emptyState('No scheduled tasks. Ask Andy to schedule macro briefs or alerts.'); return; }
  el.innerHTML = '<table><thead><tr><th>Prompt</th><th>Schedule</th><th>Status</th><th>Next Run</th><th>Last Run</th></tr></thead><tbody>' +
    items.map(t => {
      const prompt = t.prompt.length > 80 ? t.prompt.slice(0, 80) + '…' : t.prompt;
      const schedule = t.scheduleType + ': ' + t.scheduleValue;
      const nextRun = t.nextRun ? new Date(t.nextRun).toLocaleString() : '—';
      const lastRun = t.lastRun ? new Date(t.lastRun).toLocaleString() : '—';
      return '<tr><td>' + escapeHtml(prompt) + '</td><td>' + escapeHtml(schedule) + '</td><td><span class="badge ' + badgeClass(t.status) + '">' + escapeHtml(t.status) + '</span></td><td>' + escapeHtml(nextRun) + '</td><td>' + escapeHtml(lastRun) + '</td></tr>';
    }).join('') +
    '</tbody></table>';
}

// --- Load all data ---
async function loadAll() {
  try {
    const [sentimentDaily, alerts, sentimentSummary, portfolio, watchlist, trades, tasks] = await Promise.all([
      api('sentiment/daily'),
      api('sentiment/alerts'),
      api('sentiment/summary'),
      api('portfolio'),
      api('watchlist'),
      api('trades'),
      api('tasks'),
    ]);

    const data = { sentimentDaily, alerts, trades, tasks };
    renderStats(data);
    renderPortfolio(portfolio);
    renderSentimentSummary(sentimentSummary);
    renderWatchlist(watchlist);
    renderSentimentBriefs(sentimentDaily);
    renderAlerts(alerts);
    renderTrades(trades);
    renderTasks(tasks);
  } catch (err) {
    console.error('Failed to load dashboard data', err);
  }
}

loadAll();
</script>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// HTTP Server
// ---------------------------------------------------------------------------

function sendJson(res: http.ServerResponse, data: unknown): void {
  const body = JSON.stringify(data);
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

export function startDashboard(): void {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '/', `http://localhost:${DASHBOARD_PORT}`);
    const pathname = url.pathname;
    const group = url.searchParams.get('group') || 'main';

    // Sanitise group folder name to prevent path traversal
    const safeGroup = path.basename(group);

    try {
      if (pathname === '/' || pathname === '/index.html') {
        const html = dashboardHtml();
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Content-Length': Buffer.byteLength(html),
        });
        res.end(html);
        return;
      }

      if (pathname === '/api/sentiment/daily') {
        sendJson(res, apiSentimentDaily(safeGroup));
        return;
      }
      if (pathname === '/api/sentiment/alerts') {
        sendJson(res, apiSentimentAlerts(safeGroup));
        return;
      }
      if (pathname === '/api/sentiment/summary') {
        sendJson(res, apiSentimentSummary(safeGroup));
        return;
      }
      if (pathname === '/api/portfolio') {
        sendJson(res, apiPortfolio(safeGroup));
        return;
      }
      if (pathname === '/api/watchlist') {
        sendJson(res, apiWatchlist(safeGroup));
        return;
      }
      if (pathname === '/api/trades') {
        sendJson(res, apiTrades(safeGroup));
        return;
      }
      if (pathname === '/api/tasks') {
        sendJson(res, apiTasks());
        return;
      }

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    } catch (err) {
      logger.error({ err, pathname }, 'Dashboard request error');
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal server error');
    }
  });

  server.listen(DASHBOARD_PORT, '127.0.0.1', () => {
    logger.info(
      { port: DASHBOARD_PORT },
      `Trading dashboard available at http://127.0.0.1:${DASHBOARD_PORT}`,
    );
  });
}
