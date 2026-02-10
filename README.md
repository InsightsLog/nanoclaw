<p align="center">
  <img src="assets/nanoclaw-logo.png" alt="NanoClaw" width="400">
</p>

<p align="center">
  A lightweight AI-powered forex trading assistant that runs securely in containers with WhatsApp connectivity. Built on Anthropic's Claude Agent SDK.
</p>

<p align="center">
  <a href="https://discord.gg/VGWXrf8x"><img src="https://img.shields.io/discord/1470188214710046894?label=Discord&logo=discord&v=2" alt="Discord"></a>
</p>

## What This Is

A personal forex trading assistant built on [NanoClaw](https://github.com/gavrielc/nanoclaw) — a lightweight AI agent that runs Claude in isolated containers with WhatsApp as the I/O channel. This fork transforms it into a specialized tool for forex traders, adding market analysis capabilities, trade journaling, position tracking, and automated market monitoring.

## Features

- **Live Forex Prices** — Fetch real-time exchange rates using free public APIs (no API key required)
- **Technical Analysis** — Analyze charts and indicators via TradingView using the built-in browser automation
- **Macro Sentiment Briefs** — Daily structured briefings with impact score, risk-on/off regime, sentiment score, key drivers, and actionable pair bias
- **Event-Release Signals** — Instant sentiment alerts at release-time with actual vs. forecast, market reaction, regime shift detection, and actionable trade levels
- **Trade Journaling** — Persistent trade logs with entry/exit, rationale, and P&L tracking
- **Position Management** — Track open positions, watchlists, and portfolio exposure
- **Risk Calculations** — Position sizing, risk/reward ratios, pip value calculations
- **Economic Calendar** — Monitor high-impact events from ForexFactory and other sources
- **Automated Alerts** — Schedule price monitoring, daily briefings, and event alerts via WhatsApp
- **Market Briefings** — Automated daily/weekly market summaries delivered to your phone
- **Web Research** — Search for forex news, sentiment analysis, and market commentary
- **AI-Powered Analysis** — Claude provides intelligent market interpretation and trading insights
- **Container Isolation** — All processing runs in sandboxed Linux containers for security
- **Agent Swarms** — Spin up teams of specialized agents (e.g., one per currency pair)

## Quick Start

```bash
git clone https://github.com/InsightsLog/nanoclaw.git
cd nanoclaw
claude
```

Then run `/setup`. Claude Code handles everything: dependencies, authentication, container setup, service configuration.

## Usage

Talk to your trading assistant with the trigger word (default: `@Andy`):

### Market Analysis
```
@Andy what's the EUR/USD doing right now?
@Andy give me a technical analysis of GBP/JPY on the daily timeframe
@Andy what high-impact events are on the economic calendar this week?
@Andy analyze the USD/CHF chart and identify key support/resistance levels
```

### Trade Management
```
@Andy I went long EUR/USD at 1.0850 with SL at 1.0800 and TP at 1.0950, 0.5 lots
@Andy update my EUR/USD trade — I moved my stop to breakeven
@Andy close my GBP/JPY trade at 192.50 for +120 pips profit
@Andy show my open positions
@Andy what's my P&L for this week?
```

### Risk & Position Sizing
```
@Andy my account is $10,000 — how many lots can I trade EUR/USD with 2% risk and a 50 pip stop?
@Andy what's my total exposure right now?
@Andy calculate risk/reward for a GBP/USD short at 1.2700 with SL 1.2750 and TP 1.2600
```

### Watchlists & Alerts
```
@Andy add AUD/USD to my watchlist — watching for a break below 0.6500
@Andy show my watchlist
@Andy check EUR/USD every 4 hours and alert me if it breaks 1.0800
@Andy send me a daily market briefing at 7am
```

### Macro Sentiment & Event Signals
```
@Andy give me today's macro sentiment brief
@Andy what's the current risk regime — risk-on or risk-off?
@Andy US CPI just dropped — give me a sentiment alert with the numbers
@Andy generate a sentiment alert for the latest NFP release
@Andy show me this week's sentiment trend
```

### Scheduled Tasks
```
@Andy every weekday at 7am, send me a morning market briefing with major pair analysis
@Andy every weekday at 7am, generate and send me a Macro Sentiment Brief
@Andy every Sunday at 8pm, summarize my weekly trading performance
@Andy alert me 30 minutes before any high-impact USD events this week
@Andy every 4 hours, check if EUR/USD has broken the 1.0800 level
@Andy at 13:30 UTC on the first Friday of each month, send a Sentiment Alert for US NFP
@Andy every Friday at 6pm, send me a weekly sentiment summary
```

## Architecture

```
WhatsApp (baileys) --> SQLite --> Polling loop --> Container (Claude Agent SDK + Forex Skills) --> Response
```

Single Node.js process. Claude agents execute in isolated Linux containers with forex trading skills loaded automatically. The agent uses free public APIs and web browsing to fetch live market data. Trade data persists in the group workspace between sessions.

### Key Files
- `src/index.ts` — Main app: WhatsApp connection, message loop, IPC
- `src/container-runner.ts` — Spawns streaming agent containers
- `src/task-scheduler.ts` — Runs scheduled market monitoring tasks
- `src/db.ts` — SQLite operations (messages, groups, sessions, state)
- `container/skills/forex-trading/SKILL.md` — Forex trading capabilities (market data, analysis, journaling)
- `container/skills/agent-browser/SKILL.md` — Browser automation for charting sites
- `groups/main/CLAUDE.md` — Main channel agent memory and configuration
- `groups/global/CLAUDE.md` — Shared agent context across all groups

### Data Sources (No API Keys Required)
- **Exchange Rates**: [ExchangeRate-API](https://open.er-api.com/), [Frankfurter](https://api.frankfurter.app/), [FloatRates](https://www.floatrates.com/)
- **Charts & Analysis**: [TradingView](https://www.tradingview.com/) (via agent-browser)
- **Economic Calendar**: [ForexFactory](https://www.forexfactory.com/) (via agent-browser), Forex Factory JSON feed
- **News & Sentiment**: Web search via built-in WebSearch tool

### Persistent Data
| Data | Location | Purpose |
|------|----------|---------|
| Trade Journal | `groups/main/trades/` | Individual trade entries with rationale |
| Portfolio | `groups/main/portfolio.md` | Active positions and P&L |
| Watchlist | `groups/main/watchlist.md` | Monitored pairs with alerts |
| Preferences | `groups/main/preferences.md` | Trading style, risk tolerance, timezone |
| Analysis | `groups/main/analysis/` | Saved technical analysis reports |
| Sentiment Briefs | `groups/main/sentiment/daily/` | Daily macro sentiment briefings |
| Sentiment Alerts | `groups/main/sentiment/alerts/` | Event-release signal snapshots |
| Sentiment Summary | `groups/main/sentiment/summary.md` | Rolling regime and score tracker |
| Conversations | `groups/main/conversations/` | Searchable chat history |

## Customizing

There are no configuration files to learn. Just tell Claude Code what you want:

- "Change the trigger word to @Trader"
- "I prefer scalping on the 5-minute chart — remember that"
- "My account is $25,000 with 1:100 leverage at IC Markets"
- "I only trade EUR/USD, GBP/USD, and USD/JPY — update my watchlist"
- "Add a pre-market routine that checks overnight moves on my pairs"

Or run `/customize` for guided changes.

## Philosophy

This project inherits NanoClaw's core philosophy:

**Small enough to understand.** One process, a few source files. No microservices, no abstraction layers.

**Secure by isolation.** Agents run in Linux containers. They can only see what's explicitly mounted.

**Built for one user.** This is working software for a forex trader's specific needs. Fork it and customize.

**AI-native.** No dashboards or configuration GUIs. Talk to Claude to configure, debug, and customize.

## Requirements

- macOS or Linux
- Node.js 20+
- [Claude Code](https://claude.ai/download)
- [Apple Container](https://github.com/apple/container) (macOS) or [Docker](https://docker.com/products/docker-desktop) (macOS/Linux)

## Risk Disclaimer

This tool provides trading analysis assistance only. It does not constitute financial advice. Forex trading involves substantial risk of loss and is not suitable for all investors. Past performance does not guarantee future results. Always do your own research and consider your financial situation before trading.

## Community

Questions? Ideas? [Join the Discord](https://discord.gg/VGWXrf8x).

## License

MIT
