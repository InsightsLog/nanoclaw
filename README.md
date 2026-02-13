<p align="center">
  <img src="assets/nanoclaw-logo.png" alt="NanoClaw" width="400">
</p>

<p align="center">
  A lightweight AI-powered forex macro-fundamental trading assistant that runs securely in containers with WhatsApp connectivity. Built on Anthropic's Claude Agent SDK.
</p>

<p align="center">
  <a href="https://discord.gg/VGWXrf8x"><img src="https://img.shields.io/discord/1470188214710046894?label=Discord&logo=discord&v=2" alt="Discord"></a>
</p>

## What This Is

A personal forex macro-fundamental trading assistant built on [NanoClaw](https://github.com/gavrielc/nanoclaw) — a lightweight AI agent that runs Claude in isolated containers with WhatsApp as the I/O channel. This fork transforms it into a specialized tool for fundamentals-driven forex traders, adding macroeconomic analysis, sentiment briefings, event-release signals, central bank tracking, and automated macro monitoring. No technical analysis — strictly fundamentals.

## Features

- **Macro Sentiment Briefs** — Daily structured briefings with impact score, risk-on/off regime, sentiment score, key drivers, and actionable pair bias
- **Event-Release Signals** — Instant sentiment alerts at release-time with actual vs. forecast, market reaction, regime shift detection, and fundamental trade rationale
- **Central Bank Tracking** — Monitor monetary policy across Fed, ECB, BoE, BoJ, RBA, BoC, RBNZ, SNB with rate differential analysis
- **Economic Calendar** — Monitor high-impact events from ForexFactory and other sources
- **Macro-Fundamental Analysis** — Rate differentials, GDP, CPI, employment, PMI, trade balance — no technicals
- **Live Forex Prices** — Fetch real-time exchange rates using free public APIs (no API key required)
- **Trade Journaling** — Persistent trade logs with entry/exit, fundamental rationale, and P&L tracking
- **Position Management** — Track open positions, watchlists, and portfolio exposure
- **Risk Calculations** — Position sizing, risk/reward ratios, pip value calculations
- **Automated Alerts** — Schedule macro monitoring, sentiment briefs, and event alerts via WhatsApp
- **Web Research** — Search for macro news, central bank commentary, and economic data
- **AI-Powered Analysis** — Claude provides intelligent macroeconomic interpretation and trading insights
- **Container Isolation** — All processing runs in sandboxed Linux containers for security
- **Agent Swarms** — Spin up teams of specialized agents (e.g., one per central bank)

## Quick Start

```bash
git clone https://github.com/InsightsLog/nanoclaw.git
cd nanoclaw
claude
```

Then run `/setup`. Claude Code handles everything: dependencies, authentication, container setup, service configuration.

**📚 New to using NanoClaw for forex trading?** Read the [Forex Trader's Guide](docs/FOREX_TRADER_GUIDE.md) for a comprehensive walkthrough of using NanoClaw as macroeconomic intelligence — daily briefings, event alerts, weekly outlooks, and AI-powered macro analysis.

## Usage

Talk to your trading assistant with the trigger word (default: `@Andy`):

### Macro-Fundamental Analysis
```
@Andy what's driving EUR/USD right now — what are the macro fundamentals?
@Andy compare the Fed vs ECB rate path — who cuts first?
@Andy what high-impact events are on the economic calendar this week?
@Andy give me a fundamental breakdown of USD/JPY — rate differentials, BoJ policy, inflation
@Andy what's the current risk regime — risk-on or risk-off?
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
@Andy add AUD/USD to my watchlist — watching for RBA rate decision on the 18th
@Andy show my watchlist
@Andy alert me 30 minutes before any high-impact USD events this week
@Andy send me a daily macro sentiment brief at 7am
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
@Andy every weekday at 7am, generate and send me a Macro Sentiment Brief
@Andy at 13:30 UTC on the first Friday of each month, send a Sentiment Alert for US NFP
@Andy every Sunday at 8pm, summarize my weekly trading performance and sentiment trend
@Andy alert me 30 minutes before any high-impact USD events this week
@Andy every Friday at 6pm, send me a weekly sentiment summary
@Andy monitor for high-impact USD events today and send me a Sentiment Alert for each one
```

## Architecture

```
WhatsApp (baileys) --> SQLite --> Polling loop --> Container (Claude Agent SDK + Forex Skills) --> Response
```

Single Node.js process. Claude agents execute in isolated Linux containers with forex macro-fundamental skills loaded automatically. The agent uses free public APIs and web browsing to fetch economic data, central bank statements, and market rates. Sentiment briefs and trade data persist in the group workspace between sessions.

### Key Files
- `src/index.ts` — Main app: WhatsApp connection, message loop, IPC
- `src/container-runner.ts` — Spawns streaming agent containers
- `src/task-scheduler.ts` — Runs scheduled market monitoring tasks
- `src/db.ts` — SQLite operations (messages, groups, sessions, state)
- `container/skills/forex-trading/SKILL.md` — Forex macro-fundamental capabilities (sentiment briefs, event signals, central bank tracking, economic calendar)
- `container/skills/agent-browser/SKILL.md` — Browser automation for economic data sites
- `groups/main/CLAUDE.md` — Main channel agent memory and configuration
- `groups/global/CLAUDE.md` — Shared agent context across all groups

### Data Sources (No API Keys Required)
- **Exchange Rates**: [ExchangeRate-API](https://open.er-api.com/), [Frankfurter](https://api.frankfurter.app/), [FloatRates](https://www.floatrates.com/)
- **Economic Calendar**: [ForexFactory](https://www.forexfactory.com/) (via agent-browser), Forex Factory JSON feed
- **Central Banks**: Fed, ECB, BoE, BoJ websites (via agent-browser and web search)
- **Macro News & Data**: Web search via built-in WebSearch tool, Investing.com

### Persistent Data
| Data | Location | Purpose |
|------|----------|---------|
| Sentiment Briefs | `groups/main/sentiment/daily/` | Daily macro sentiment briefings |
| Sentiment Alerts | `groups/main/sentiment/alerts/` | Event-release signal snapshots |
| Sentiment Summary | `groups/main/sentiment/summary.md` | Rolling regime and score tracker |
| Trade Journal | `groups/main/trades/` | Individual trade entries with fundamental rationale |
| Portfolio | `groups/main/portfolio.md` | Active positions and P&L |
| Watchlist | `groups/main/watchlist.md` | Monitored pairs with macro catalysts |
| Preferences | `groups/main/preferences.md` | Trading style, risk tolerance, timezone |
| Conversations | `groups/main/conversations/` | Searchable chat history |

## Customizing

There are no configuration files to learn. Just tell Claude Code what you want:

- "Change the trigger word to @Trader"
- "I trade macro fundamentals only — focus on rate differentials and central bank policy"
- "My account is $25,000 with 1:100 leverage at IC Markets"
- "I only trade EUR/USD, GBP/USD, and USD/JPY — update my watchlist"
- "Add a pre-market routine that checks overnight macro releases and central bank headlines"

Or run `/customize` for guided changes.

## Philosophy

This project inherits NanoClaw's core philosophy:

**Small enough to understand.** One process, a few source files. No microservices, no abstraction layers.

**Secure by isolation.** Agents run in Linux containers. They can only see what's explicitly mounted.

**Built for one user.** This is working software for a forex trader's specific needs. Fork it and customize.

**AI-native.** No dashboards or configuration GUIs. Talk to Claude to configure, debug, and customize.

## Documentation

**📘 [Forex Trader's Guide](docs/FOREX_TRADER_GUIDE.md)** — Comprehensive guide on using NanoClaw as macroeconomic intelligence: automated daily briefings, weekly outlooks, event updates, AI chatbox with full context, central bank tracking, and real-world trading workflows.

Other docs:
- [Security](docs/SECURITY.md) — Container isolation and security model
- [Requirements](docs/REQUIREMENTS.md) — Architecture decisions and design principles
- [SDK Deep Dive](docs/SDK_DEEP_DIVE.md) — How NanoClaw uses Claude Agent SDK

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
