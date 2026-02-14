# Forex Trader's Guide to NanoClaw as Macroeconomic Intelligence

## Table of Contents
- [Overview](#overview)
- [Why Use NanoClaw for Forex Trading](#why-use-nanoclaw-for-forex-trading)
- [Quick Start](#quick-start)
- [Core Intelligence Features](#core-intelligence-features)
  - [1. Automated Daily Briefings](#1-automated-daily-briefings)
  - [2. Weekly Market Outlooks](#2-weekly-market-outlooks)
  - [3. Real-Time Event Updates](#3-real-time-event-updates)
  - [4. AI Chatbox with Full Context](#4-ai-chatbox-with-full-context)
  - [5. Central Bank Intelligence](#5-central-bank-intelligence)
  - [6. Economic Calendar Monitoring](#6-economic-calendar-monitoring)
- [Setting Up Your Intelligence System](#setting-up-your-intelligence-system)
- [Real-World Trading Workflows](#real-world-trading-workflows)
- [Advanced Customization](#advanced-customization)
- [Data Sources](#data-sources)
- [Best Practices](#best-practices)
- [FAQ](#faq)

---

## Overview

NanoClaw transforms your smartphone (via WhatsApp) into a sophisticated macroeconomic intelligence platform for forex trading. Think of it as having a macro research analyst working 24/7, monitoring central banks, economic releases, and market-moving events—delivering structured briefings and instant alerts directly to your WhatsApp.

**What makes NanoClaw different:**
- **Zero technical analysis** — Pure fundamentals-driven intelligence
- **Context-aware AI** — Claude remembers your positions, watchlist, and trading style
- **Automated intelligence** — Daily briefs, weekly outlooks, event alerts run on schedule
- **Real-time responsiveness** — Ask questions anytime about any macro topic
- **Persistent memory** — All briefings, alerts, and conversations are saved and searchable

---

## Why Use NanoClaw for Forex Trading

### Traditional Approach vs. NanoClaw

| Traditional Approach | With NanoClaw |
|---------------------|---------------|
| Open 5+ tabs every morning: ForexFactory, Bloomberg, FXStreet, Investing.com | **Single WhatsApp message**: "What's driving markets today?" |
| Manually check each central bank website for speeches and minutes | **Automated tracking**: Daily brief includes all relevant CB commentary |
| Set phone alarms for NFP, CPI, FOMC releases | **Scheduled alerts**: Sentiment alert auto-generated at release time |
| Google "ECB rate expectations" to research macro context | **AI with full context**: "Compare Fed vs ECB rate path — who cuts first?" |
| Keep separate spreadsheets for trades, watchlist, sentiment log | **Integrated memory**: All data persists in your NanoClaw workspace |

### Who Is This For?

- **Macro-fundamental traders** who trade rate differentials, central bank policy, and economic data
- **News traders** who want instant analysis of NFP, CPI, FOMC releases
- **Position traders** who hold multi-day trades based on macro themes
- **Part-time traders** who need efficient macro intelligence without hours of research

---

## Quick Start

### Installation (5 minutes)

1. **Clone and set up:**
   ```bash
   git clone https://github.com/InsightsLog/nanoclaw.git
   cd nanoclaw
   claude
   ```

2. **Run setup in Claude Code:**
   ```
   /setup
   ```
   This installs dependencies, authenticates WhatsApp, and starts the service.

3. **Test your connection:**
   Open WhatsApp and send yourself:
   ```
   @Andy hello
   ```
   
4. **Schedule your first daily brief:**
   ```
   @Andy every weekday at 7am, generate and send me a Macro Sentiment Brief
   ```

You're now receiving daily macro intelligence. Let's explore what else you can do.

---

## Core Intelligence Features

### 1. Automated Daily Briefings

**What:** Structured macro sentiment snapshot every trading day

**When:** Scheduled for your preferred time (e.g., 7am before market open, or 9am after Asian session)

**What You Get:**
- **Impact Score (1-10):** How market-moving is today's environment?
- **Risk Regime:** Risk-On, Risk-Off, or Mixed/Transitional
- **Sentiment Score (-5 to +5):** USD bullish/bearish bias
- **Primary Driver:** The single most important macro factor today
- **Key Pairs to Watch:** Top 3 pairs most affected with directional bias
- **Risk Events Ahead:** Upcoming high-impact releases today/tomorrow

**Example Output:**

```
📊 Macro Sentiment Brief — 10 Feb 2026

• Headline: Fed holds rates; Powell signals patience on cuts
• Impact Score: 7/10
• Regime: Mixed/Transitional
• Sentiment Score: +2 (mildly USD bullish)
• Primary Driver: FOMC statement — hawkish hold

Macro Summary:
The Fed left rates unchanged at 4.50% as expected but removed 
forward guidance on imminent cuts, surprising markets that had 
priced a March move. US 10Y yields rose 8bp to 4.22%. Eurozone 
PMI came in below consensus at 48.1, reinforcing ECB easing 
expectations. Risk appetite is cautious ahead of tomorrow's CPI.

• Key Pairs: EUR/USD ↓ bearish, USD/JPY ↑ bullish, GBP/USD → neutral
• Risk Events Ahead: US CPI (tomorrow 13:30 UTC), ECB Lagarde speech (15:00 UTC)

Keywords: Fed, FOMC, hold, CPI, ECB, PMI, USD strength
Source: ForexFactory, Investing.com, ExchangeRate-API
Generated: 2026-02-10T07:00:00Z
```

**How to Schedule:**

```
@Andy every weekday at 7am, generate and send me a Macro Sentiment Brief
```

**Pro Tip:** Schedule briefs for multiple timezones if you trade global sessions:
```
@Andy every weekday at 7am London time, send me a Macro Sentiment Brief for the European session
@Andy every weekday at 1pm London time, send me a brief for the NY session open
```

---

### 2. Weekly Market Outlooks

**What:** Forward-looking macro analysis covering the week ahead

**When:** Sunday evening or Monday morning before the trading week

**What You Get:**
- **Week's Major Events:** All tier-1 releases (NFP, CPI, FOMC, ECB, BoE, etc.)
- **Central Bank Activity:** Rate decisions, speeches, minutes releases
- **Macro Themes:** Dominant narratives (e.g., "Fed hawkish hold vs. ECB dovish pivot")
- **Pair-Specific Outlooks:** Directional bias for major pairs based on scheduled events
- **Key Risk Factors:** Geopolitical events, surprise data potential

**Example Output:**

```
📅 Weekly Macro Outlook — Week of 10 Feb 2026

Theme of the Week: US inflation data in focus; ECB dovish tilt

Major Events This Week:
• Mon 10 Feb, 13:30 UTC: US PPI (Forecast: +0.3% MoM)
• Tue 11 Feb, 13:30 UTC: US CPI (Forecast: +0.4% MoM, +3.1% YoY) ⚠️ HIGH IMPACT
• Wed 12 Feb, 14:00 UTC: FOMC Minutes release
• Thu 13 Feb, 12:45 UTC: ECB Rate Decision (Forecast: Hold at 3.75%)
• Fri 14 Feb, 13:30 UTC: US Retail Sales (Forecast: +0.2% MoM)

Central Bank Watch:
• Fed: No speakers scheduled; market watching CPI for rate path clues
• ECB: Lagarde press conference Thu 13:30 UTC — dovish guidance expected
• BoE: Bailey speech Tue — may signal June cut timeline

Pair Outlooks:
• EUR/USD: Bearish bias — Fed holding, ECB cutting narrative intact
  Watch CPI (Tue) and ECB decision (Thu) for confirmation
• USD/JPY: Neutral to bullish — BoJ still ultra-dovish, but watch for intervention rhetoric
• GBP/USD: Neutral — BoE less dovish than ECB, but UK data soft

Risk Factors:
• Hot US CPI could cement Fed hawkish hold → USD strength
• ECB surprise hawkish guidance → EUR short squeeze risk

Trading Bias: USD strength on rate divergence theme, fade EUR rallies

Generated: 2026-02-09T20:00:00Z
```

**How to Schedule:**

```
@Andy every Sunday at 8pm, send me a Weekly Macro Outlook for the week ahead
```

**Custom Outlook Requests:**

You can also request on-demand outlooks:
```
@Andy give me this week's macro outlook — what are the key events?
@Andy what high-impact events are scheduled for GBP pairs this week?
@Andy what's the macro setup for EUR/USD this week — rate differentials and event risk?
```

---

### 3. Real-Time Event Updates

**What:** Instant sentiment alerts when major economic data is released

**When:** Scheduled to trigger at exact release times (e.g., US NFP at 13:30 UTC on first Friday)

**What You Get:**
- **Release Data:** Actual vs. Forecast vs. Previous
- **Surprise Analysis:** Beat, Miss, or Inline
- **Market Reaction:** Price moves in first 5-15 minutes
- **Macro Interpretation:** What this means for monetary policy and rate expectations
- **Actionable Bias:** Pair + direction + fundamental rationale
- **Next Catalyst:** What event could confirm or reverse this move

**Example Output:**

```
🚨 Sentiment Alert — US Non-Farm Payrolls

• Headline: NFP blows past expectations at 312K; USD surges
• Impact Score: 9/10
• Regime Shift: Reinforced Risk-Off (USD strength)
• Sentiment Score: +4 (strongly USD bullish)
• Primary Driver: NFP massive beat, wage growth accelerating

Release Data:
• Event: US Non-Farm Payrolls (Feb)
• Actual: 312K
• Forecast: 185K
• Previous: 256K (revised from 250K)
• Surprise: Beat ↑ (+127K above consensus)

Market Reaction (5 min):
• EUR/USD: 1.0785 (-65 pips, ↓ sharp)
• USD/JPY: 155.80 (+90 pips, ↑ strong)
• GBP/USD: 1.2580 (-55 pips, ↓ moderate)

Macro Interpretation:
The blowout payroll number cements expectations that the Fed 
will hold rates through Q2. Wage growth at 4.1% YoY keeps 
inflation concerns alive. This reading significantly reduces 
the probability of a March rate cut — Fed funds futures now 
show June as the earliest likely move.

• Actionable Bias: EUR/USD short — strong US labor market widens rate divergence with ECB
• Next Catalyst: US CPI (12 Feb, 13:30 UTC) — will confirm or soften the hawkish narrative

Keywords: NFP, payrolls, Fed, rate hold, USD rally, employment
Source: ForexFactory, BLS
Generated: 2026-02-07T13:35:00Z
```

**How to Schedule Event Alerts:**

For recurring events (like NFP on first Friday):
```
@Andy every first Friday at 13:30 UTC, generate a Sentiment Alert for US NFP
```

For ad-hoc alerts:
```
@Andy alert me when US CPI is released at 13:30 UTC with a Sentiment Alert
```

For monitoring all high-impact events:
```
@Andy monitor ForexFactory for high-impact USD events today and send me a Sentiment Alert for each one
```

**Common Event Alert Schedules:**

```
# US Data
@Andy every first Friday at 13:30 UTC, send a Sentiment Alert for US NFP
@Andy on the 13th of each month at 13:30 UTC, send a Sentiment Alert for US CPI
@Andy every Tuesday at 15:00 UTC, alert me on US Retail Sales if it's released

# Central Bank Decisions
@Andy on FOMC decision days, send me a Sentiment Alert 5 minutes after the statement

# Eurozone
@Andy every last day of the month at 10:00 UTC, send a Sentiment Alert for Eurozone CPI flash
```

---

### 4. AI Chatbox with Full Context

**What:** Conversational AI that knows your positions, watchlist, preferences, and trading history

**Why It's Powerful:**
- **Persistent memory** — NanoClaw remembers your open trades, risk tolerance, preferred pairs
- **Contextual answers** — "Should I add to my EUR/USD short?" considers your existing position
- **Searchable history** — All past conversations stored and retrievable
- **Multi-session continuity** — Reference last week's discussion seamlessly

**Example Conversations:**

**Scenario 1: Position-Aware Advice**
```
You: @Andy I'm short EUR/USD at 1.0850 with a 50 pip stop — what's the risk if CPI comes in hot tomorrow?

Andy: You're short EUR/USD at 1.0850, SL at 1.0900 (50 pips).

Hot CPI tomorrow would be USD bullish → supports your short bias.

Risk assessment:
• If CPI beats consensus (+3.2% vs 3.1% forecast), expect EUR/USD to drop 30-50 pips on initial reaction → trade moves in your favor
• If CPI misses badly (e.g., +2.9%), EUR/USD could spike 40-60 pips → potential stop-out

Recommendation: Consider moving your stop to 1.0920 (70 pips) to avoid getting stopped out on headline volatility if you want to hold through the release. Or, take partial profits at 1.0820 and let the rest run with a breakeven stop.

Your position is fundamentally sound — Fed hawkish hold + ECB dovish tilt favor EUR/USD downside. Just manage the event risk.
```

**Scenario 2: Research Assistant**
```
You: @Andy what's driving USD/JPY to 155? Is BoJ about to intervene?

Andy: USD/JPY at 155.80, up from 150.20 last week (+560 pips in 5 days).

Primary drivers:
• Fed hawkish hold at 4.50% → US 10Y yield at 4.22% (up 15bp this week)
• BoJ ultra-dovish → still at -0.1%, no guidance on YCC exit
• Rate differential: 460bp in favor of USD → carry trade bid

BoJ Intervention Risk:
• Historical verbal intervention levels: 150-152
• Physical intervention precedent: Last at 145.90 (Oct 2022)
• Recent rhetoric: Finance Minister warned against "excessive moves" yesterday

Assessment: Intervention risk is elevated above 155. BoJ typically acts when:
1. JPY weakens >10% in 3 months (✓ current: -7.2%)
2. Moves are "rapid and one-sided" (✓ 560 pips in 5 days)
3. Approaching psychological levels like 160 (close)

Recommendation: If long USD/JPY, tighten stops. If considering entry, wait for a pullback or intervention threat to pass. If short, this is a solid fundamental setup for a reversal trade — but time it carefully around BoJ jawboning.
```

**Scenario 3: Macro Deep Dive**
```
You: @Andy explain the current macro environment — why is USD strong despite Fed cut expectations?

Andy: Great question — this is the classic "bad news is good news" inversion.

Current Setup (10 Feb 2026):
• Fed Funds Rate: 4.50% (held since Sep 2025)
• Market pricing: 70% chance of first cut in June, 25bp
• USD Index (DXY): 104.80 (up 2.1% since Jan)

Why USD is strong despite cut expectations:

1. Rate Differential Advantage (Most Important)
   • ECB at 3.75% with June cut 90% priced in → EUR weakness
   • BoE at 5.25% but dovish guidance → GBP softening
   • BoJ at -0.1% with no exit timeline → JPY ultra-weak
   • Even if Fed cuts in June, they're cutting FROM a higher base → USD still yields more than EUR/GBP/JPY

2. Growth Divergence
   • US GDP: +2.8% (Q4 2025), resilient
   • Eurozone GDP: +0.2%, stagnating
   • UK GDP: +0.1%, weak
   • US outperformance = capital flows to USD

3. Safe Haven Demand
   • Geopolitical tensions elevated (Middle East, Ukraine)
   • Risk-off environment → USD bid as reserve currency

4. Data Dependency
   • Recent NFP beat (312K) pushed back Fed cut timeline
   • CPI still sticky at 3.1% → Fed has patience to hold longer
   • Other CBs facing weaker data → forced to cut sooner

Bottom Line: It's not about absolute rate levels, it's about RELATIVE rates and rate paths. Fed cutting later + from higher base = USD strength vs. peers cutting sooner.

Trade Implication: Short EUR/USD, GBP/USD on any rallies. Long USD/JPY on dips (watch intervention risk above 155).
```

**How to Use the Chatbox Effectively:**

1. **Be specific with timeframes:**
   ```
   @Andy what's the macro setup for EUR/USD this week?
   @Andy what happened to GBP/USD overnight?
   ```

2. **Reference your positions:**
   ```
   @Andy should I add to my EUR/USD short? (NanoClaw knows your position from prior conversations)
   @Andy show my open trades — what's my total exposure?
   ```

3. **Ask follow-up questions:**
   ```
   @Andy explain that in simpler terms
   @Andy what if CPI comes in higher than expected?
   ```

4. **Request structured output:**
   ```
   @Andy give me a fundamental breakdown of GBP/JPY — rate differentials, central bank policy, upcoming events
   ```

---

### 5. Central Bank Intelligence

**What:** Automated monitoring of Fed, ECB, BoE, BoJ, RBA, BoC, RBNZ, SNB

**Why It Matters:** Central bank policy is the #1 driver of currency pairs. Rate differentials determine carry trades and long-term trends.

**What You Track:**
- **Rate decisions and statements** (language changes are key)
- **Forward guidance** (hawkish/dovish tilt)
- **Speeches by CB governors** (Powell, Lagarde, Bailey, Ueda, etc.)
- **Meeting minutes** (FOMC, MPC, ECB)
- **Market-implied rate expectations** (Fed funds futures, OIS curves)

**Example Queries:**

```
@Andy compare the Fed vs ECB rate path — who cuts first?

Andy: Fed vs. ECB Rate Path Analysis (10 Feb 2026)

Current Rates:
• Fed: 4.50% (held since Sep 2025)
• ECB: 3.75% (held since Jan 2026)
• Rate Differential: 75bp in favor of USD

Fed Rate Path:
• Last Statement: "Inflation remains elevated; committee will remain patient"
• Market Pricing: June cut 70% priced, 25bp expected
• Dot Plot (Dec 2025): Median 2026 endpoint at 4.00% (2 cuts)
• Key Variable: CPI trajectory — if sticky, June cut pushed to Sep

ECB Rate Path:
• Last Statement: "Disinflation is progressing; policy can be adjusted"
• Market Pricing: June cut 90% priced, 25bp expected; Sep cut 60% priced
• Lagarde (last speech): "Data-dependent, but direction is clear"
• Key Variable: Eurozone growth — PMI at 48.1 increases pressure to cut

Who Cuts First?
→ ECB cuts first (June), Fed follows (June or Sep)

Why ECB First?
1. Eurozone inflation already at 2.4% (closer to target than US 3.1%)
2. Growth is stagnating (PMI in contraction)
3. Lagarde more dovish than Powell in recent rhetoric

Trade Implication:
• EUR/USD bearish bias intact — widening rate differential favors USD
• Watch for ECB to cut 50bp if data deteriorates further → EUR crash risk
• Fed may not cut at all if US data stays strong → USD even more bullish

Next Catalysts:
• US CPI (12 Feb) — hot print = Fed holds longer
• ECB Decision (13 Feb) — any dovish surprise = EUR breakdown
```

**Automated Central Bank Alerts:**

```
@Andy alert me whenever the Fed releases a statement or Powell speaks
@Andy track ECB rate differential vs Fed and alert me if it widens beyond 100bp
@Andy every week, summarize central bank commentary across Fed, ECB, BoE, BoJ
```

---

### 6. Economic Calendar Monitoring

**What:** Automated tracking of tier-1 economic releases from ForexFactory and other sources

**Coverage:**
- **US:** NFP, CPI, Core PCE, FOMC, GDP, ISM PMI, Retail Sales, Jobless Claims
- **Eurozone:** ECB decision, CPI, GDP, PMI, ZEW Sentiment
- **UK:** BoE decision, CPI, GDP, Employment, PMI
- **Japan:** BoJ policy, CPI, GDP, Tankan, Trade Balance
- **Australia:** RBA decision, Employment, CPI, GDP, Trade Balance
- **Canada:** BoC decision, Employment, CPI, GDP
- **Switzerland:** SNB decision, CPI, GDP
- **New Zealand:** RBNZ decision, GDP, CPI, Employment

**Example Queries:**

```
@Andy what high-impact events are on the calendar this week?

Andy: High-Impact Economic Events — Week of 10 Feb 2026

Monday, 10 Feb:
• 13:30 UTC: US PPI (Forecast: +0.3% MoM) — Tier 2

Tuesday, 11 Feb:
• 13:30 UTC: 🚨 US CPI (Forecast: +3.1% YoY, +0.4% MoM) — TIER 1, HIGH IMPACT
  Previous: +3.4% YoY | Watch for core CPI (forecast: +3.3% YoY)

Wednesday, 12 Feb:
• 14:00 UTC: FOMC Minutes Release — Tier 1 (watch for rate path clues)

Thursday, 13 Feb:
• 12:45 UTC: 🚨 ECB Rate Decision (Forecast: Hold at 3.75%) — TIER 1, HIGH IMPACT
• 13:30 UTC: ECB Lagarde Press Conference — Tier 1

Friday, 14 Feb:
• 13:30 UTC: US Retail Sales (Forecast: +0.2% MoM) — Tier 2
• 15:00 UTC: University of Michigan Consumer Sentiment — Tier 2

Top 3 Market Movers:
1. US CPI (Tue) — most important for Fed rate path
2. ECB Decision (Thu) — could trigger EUR/USD breakdown if dovish
3. FOMC Minutes (Wed) — any hawkish shift could support USD

Recommendation: 
• Reduce position sizes ahead of US CPI (Tuesday)
• Watch for EUR/USD volatility around ECB decision (Thursday)
• Avoid holding weekend risk if positioning heavy into NFP (not this week)
```

**Scheduled Calendar Briefs:**

```
@Andy every Sunday at 8pm, send me this week's high-impact economic calendar events
@Andy every morning at 7am, tell me what high-impact events are scheduled for today
@Andy alert me 30 minutes before any tier-1 USD events this week
```

---

## Setting Up Your Intelligence System

### Step 1: Configure Daily Briefings

Start with the most valuable automation — daily sentiment briefs:

```
@Andy every weekday at 7am, generate and send me a Macro Sentiment Brief
```

**Customization options:**
- **Multiple briefs per day:**
  ```
  @Andy every weekday at 7am, send me a pre-market brief
  @Andy every weekday at 9pm, send me an end-of-day summary
  ```

- **Session-specific briefs:**
  ```
  @Andy every weekday at 12:30 UTC, send me an Asian session recap
  @Andy every weekday at 16:00 UTC, send me a European session recap
  ```

### Step 2: Schedule Event Alerts

Set up alerts for the data releases you trade:

```
@Andy every first Friday at 13:30 UTC, send a Sentiment Alert for US NFP
@Andy every month on the 13th at 13:30 UTC, send a Sentiment Alert for US CPI
@Andy on FOMC decision days, alert me 5 minutes after the statement
```

**Pro tip:** Use flexible scheduling:
```
@Andy monitor ForexFactory for high-impact USD events today and send me a Sentiment Alert for each one
```

### Step 3: Configure Weekly Outlooks

```
@Andy every Sunday at 8pm, send me a Weekly Macro Outlook for the week ahead
@Andy every Friday at 6pm, send me a weekly sentiment summary with my trade performance
```

### Step 4: Personalize Your Setup

Tell NanoClaw about your trading style so it can tailor responses:

```
@Andy remember these preferences:
- I only trade EUR/USD, GBP/USD, USD/JPY, and USD/CHF
- My account is $25,000 with 1:100 leverage at IC Markets
- I risk 1.5% per trade maximum
- I trade macro fundamentals only — no technical analysis
- I'm in New York timezone (EST)
- I focus on rate differentials and central bank policy divergence
```

NanoClaw stores this in `groups/main/preferences.md` and uses it to contextualize all future responses.

### Step 5: Set Up Your Watchlist

```
@Andy add EUR/USD to my watchlist — watching for US CPI on Tuesday and ECB decision on Thursday
@Andy add GBP/JPY to watchlist — BoJ intervention risk above 192.50
```

View your watchlist anytime:
```
@Andy show my watchlist
```

---

## Real-World Trading Workflows

### Workflow 1: Pre-Market Preparation (Daily Routine)

**Goal:** Start each trading day with full macro context

**Setup:**
```
@Andy every weekday at 7am, send me a Macro Sentiment Brief
```

**What You Receive (7:00 AM):**
- Daily sentiment brief with impact score, regime, key drivers
- High-impact events scheduled for today
- Key pairs to watch with directional bias

**Your Actions:**
1. Review the brief over coffee
2. Adjust your watchlist based on the day's events
3. Reduce position sizes if high-impact releases are scheduled
4. Ask follow-up questions:
   ```
   @Andy what's the consensus for today's US CPI?
   @Andy should I close my EUR/USD short before the ECB decision?
   ```

---

### Workflow 2: News Trading (Event-Driven)

**Goal:** Trade major economic releases with instant macro context

**Setup:**
```
@Andy every first Friday at 13:30 UTC, send a Sentiment Alert for US NFP
@Andy every month on the 13th at 13:30 UTC, send a Sentiment Alert for US CPI
```

**What You Receive (13:30 UTC):**
- Sentiment Alert with actual vs. forecast vs. previous
- Market reaction (price moves in first 5-15 min)
- Macro interpretation (what this means for Fed policy)
- Actionable bias (pair + direction + rationale)

**Your Actions:**
1. Review the alert within 2-3 minutes of release
2. Assess if market reaction aligns with fundamental surprise
3. Enter trade based on actionable bias if conviction is high
4. Set alerts for next catalyst to manage the trade
5. Log your trade:
   ```
   @Andy I went long USD/JPY at 155.20 based on the hot NFP print — SL 154.70, TP 156.50
   ```

---

### Workflow 3: Position Monitoring (Active Trade Management)

**Goal:** Stay informed on macro developments that affect your open positions

**Setup:**
```
@Andy alert me if any high-impact USD events are released while I have open positions
@Andy send me an end-of-day summary every weekday at 9pm
```

**Your Actions:**

**Morning Check:**
```
@Andy show my open positions — what's my P&L today?
```

**Intraday Monitoring:**
```
@Andy EUR/USD dropped 40 pips — what happened?
@Andy should I move my stop to breakeven on my GBP/USD trade?
```

**Evening Review:**
```
@Andy summarize today's macro developments and how they affected my positions
```

---

### Workflow 4: Weekly Planning (Sunday Prep)

**Goal:** Plan the trading week ahead with full macro visibility

**Setup:**
```
@Andy every Sunday at 8pm, send me a Weekly Macro Outlook for the week ahead
```

**What You Receive (Sunday 8 PM):**
- Major events for the week (NFP, CPI, FOMC, ECB, BoE, etc.)
- Central bank activity (rate decisions, speeches, minutes)
- Macro themes (dominant narratives)
- Pair-specific outlooks with directional bias

**Your Actions:**
1. Review the outlook and identify high-conviction setups
2. Update your watchlist:
   ```
   @Andy clear my watchlist and add EUR/USD (CPI risk), USD/JPY (BoJ rhetoric), GBP/USD (BoE decision)
   ```
3. Set pre-event alerts:
   ```
   @Andy alert me 30 minutes before US CPI on Tuesday
   @Andy alert me when ECB decision is released on Thursday
   ```
4. Plan position sizing around event risk:
   ```
   @Andy if I hold EUR/USD short into Tuesday's CPI, what's my risk if it spikes 60 pips?
   ```

---

### Workflow 5: Research & Analysis (On-Demand Intelligence)

**Goal:** Deep-dive macro research whenever you need clarity

**Example Research Queries:**

**Macro Context:**
```
@Andy explain the current macro environment — what's driving markets this month?
@Andy what's the market narrative around the Fed right now?
@Andy why is EUR/USD stuck in a range — what needs to break it out?
```

**Central Bank Analysis:**
```
@Andy compare Fed vs ECB rate paths — what's the divergence trade?
@Andy what's BoJ policy stance — are they finally exiting negative rates?
@Andy summarize Powell's last speech — was it hawkish or dovish?
```

**Pair-Specific Fundamentals:**
```
@Andy give me a fundamental breakdown of GBP/JPY — rate differentials, central bank policy, growth, upcoming events
@Andy what's driving USD/CHF — SNB intervention risk?
@Andy explain AUD/USD fundamentals — RBA vs Fed, commodity prices, China exposure
```

**Historical Context:**
```
@Andy what happened last time US CPI beat expectations by this much?
@Andy how did EUR/USD react to the last 3 ECB rate cuts?
```

---

## Advanced Customization

### Custom Intelligence Channels

NanoClaw supports multiple WhatsApp groups, each with isolated memory. Use this to create specialized channels:

**Example 1: Macro Research Channel**
```
@Andy add a new group called "Macro Research" with trigger word @Research
@Andy in the Macro Research group, configure it to:
- Send daily Fed vs ECB rate differential analysis
- Track central bank speeches and summarize key quotes
- Monitor US Treasury yields and dollar index moves
```

**Example 2: Trade Execution Channel**
```
@Andy add a new group called "Trade Alerts" with trigger word @Trade
@Andy in Trade Alerts, configure it to:
- Only send Sentiment Alerts for tier-1 releases
- Suppress daily briefs (execution-only channel)
- Alert on any central bank surprise moves
```

### Agent Swarms (Multiple Specialists)

For advanced users, NanoClaw supports "agent swarms" — teams of specialized sub-agents working together:

**Example: Central Bank Team**
```
@Andy set up an agent swarm with 4 specialists:
- Agent 1: Fed tracker (monitors all Fed activity)
- Agent 2: ECB tracker (monitors all ECB activity)
- Agent 3: BoE tracker (monitors all BoE activity)
- Agent 4: BoJ tracker (monitors all BoJ activity)

When I ask "what are central banks doing this week?", coordinate the team to each report on their CB and synthesize a unified brief.
```

**Example: Macro Intelligence Team**
```
@Andy create a swarm:
- Macro Analyst: Interprets economic data and regime shifts
- Event Monitor: Tracks calendar and flags high-impact releases
- Trade Advisor: Provides position sizing and risk management
- Sentiment Tracker: Maintains daily sentiment log and trends

Activate the team every morning to produce a coordinated daily briefing.
```

### Custom Data Sources

Add proprietary data sources or paid APIs:

```
@Andy I have a Trading Economics API key — integrate it for GDP forecasts
@Andy I subscribe to Forex Factory Premium — use the API for economic calendar data
@Andy I have access to Bloomberg Terminal data exports — ingest daily central bank rate expectations
```

### Integration with Trading Platforms

While NanoClaw doesn't execute trades directly (by design), you can integrate it with your broker:

**Example: MT4/MT5 Integration**
```
@Andy when I send you "execute EUR/USD short 0.5 lots SL 1.0900 TP 1.0750", 
generate the MT4 script command and send it back so I can copy-paste into my terminal
```

**Example: Trade Journal Sync**
```
@Andy import my MT4 trade history CSV and sync it with your trade journal
@Andy every evening, compare my actual trades in MT4 vs your recommendations and report discrepancies
```

---

## Data Sources

NanoClaw uses **free, no-API-key-required data sources** by default:

### Exchange Rates (Real-Time)
- [ExchangeRate-API](https://open.er-api.com/) — Open API, no key required
- [Frankfurter](https://api.frankfurter.app/) — ECB rates, no key required
- [FloatRates](https://www.floatrates.com/) — Daily rates, no key required

### Economic Calendar
- [ForexFactory](https://www.forexfactory.com/) — Free calendar via web scraping (agent-browser)
- ForexFactory JSON feed — Public endpoint for high-impact events

### Central Banks (Official Sources)
- Fed: [federalreserve.gov](https://www.federalreserve.gov/)
- ECB: [ecb.europa.eu](https://www.ecb.europa.eu/)
- BoE: [bankofengland.co.uk](https://www.bankofengland.co.uk/)
- BoJ: [boj.or.jp/en](https://www.boj.or.jp/en/)
- RBA: [rba.gov.au](https://www.rba.gov.au/)
- BoC: [bankofcanada.ca](https://www.bankofcanada.ca/)
- RBNZ: [rbnz.govt.nz](https://www.rbnz.govt.nz/)
- SNB: [snb.ch](https://www.snb.ch/en/)

### Macro News & Analysis
- Web search via built-in WebSearch tool
- [Investing.com](https://www.investing.com/) — Macro news and analysis
- [Bloomberg](https://www.bloomberg.com/) (public articles)
- [Reuters](https://www.reuters.com/) (public articles)

**Upgrade Options:**
If you have API keys for paid services, you can configure NanoClaw to use them for richer data:
- Trading Economics API
- Alpha Vantage
- FRED (Federal Reserve Economic Data)
- Quandl
- Your broker's proprietary API

---

## Best Practices

### 1. Start Simple, Scale Gradually

**Week 1:** Just daily briefs
```
@Andy every weekday at 7am, send me a Macro Sentiment Brief
```

**Week 2:** Add event alerts
```
@Andy alert me on US CPI and NFP releases
```

**Week 3:** Add weekly outlooks
```
@Andy every Sunday at 8pm, send me a Weekly Macro Outlook
```

**Month 2:** Customize based on your trading style

### 2. Use the Chatbox Actively

Don't just consume automated briefs — **engage in conversation**. The more you use it, the better NanoClaw understands your preferences.

**Good:**
```
@Andy EUR/USD dropped 50 pips — what happened?
@Andy should I hold my GBP/USD short through tomorrow's BoE decision?
@Andy explain the macro setup for AUD/USD right now
```

**Better:**
```
@Andy I'm short EUR/USD at 1.0850 with SL 1.0900 — should I hold through tomorrow's CPI or take profits?
(This leverages NanoClaw's position awareness.)
```

### 3. Keep Your Preferences Updated

As your trading evolves, update your preferences:
```
@Andy update my preferences: I now trade AUD/USD and NZD/USD in addition to EUR/USD
@Andy my account is now $50,000 — update my risk calculations
@Andy I'm switching to 2% risk per trade from 1.5%
```

### 4. Use the Workspace for Historical Analysis

All sentiment briefs and alerts are saved. Use them for backtesting your macro intuition:

```
@Andy show me all daily briefs from last month where the impact score was 8 or higher
@Andy what was the sentiment trend in January — was I consistently bullish or bearish USD?
@Andy compare my trade outcomes when I followed your actionable bias vs when I didn't
```

### 5. Combine Automation with On-Demand Queries

Don't rely solely on scheduled briefs. Ask questions proactively:

**Before major events:**
```
@Andy US CPI releases in 2 hours — what's the consensus, what's the risk to my EUR/USD short?
```

**After unexpected moves:**
```
@Andy USD/JPY just spiked 80 pips — did BoJ intervene?
```

**During decision-making:**
```
@Andy I'm considering a GBP/USD short at 1.2700 — what's the fundamental case?
```

### 6. Review Your Intelligence Quality Weekly

Every Friday or Sunday, review the past week:
```
@Andy show me this week's sentiment briefs and alerts — were they accurate?
@Andy how did my trades perform relative to your actionable biases?
@Andy what macro theme defined this week?
```

Use this to refine your scheduled tasks and improve signal quality.

---

## FAQ

### Q: Can NanoClaw execute trades automatically?
**A:** No. NanoClaw is strictly an **intelligence and analysis platform**. It provides macro insights, sentiment analysis, and trade ideas, but you execute trades manually via your broker. This is by design — you remain in full control.

### Q: Does NanoClaw provide technical analysis (charts, indicators)?
**A:** No. NanoClaw focuses exclusively on **macro-fundamental analysis**. It does not use technical indicators, chart patterns, RSI, MACD, or moving averages. The philosophy is that fundamentals drive long-term trends; price action is just a reflection.

### Q: How accurate are the sentiment alerts?
**A:** Sentiment alerts reflect **real-time macro interpretation** based on economic data releases, central bank statements, and market reactions. They are not predictions — they're contextual analysis to help you make informed decisions. Always do your own research and consider your risk tolerance.

### Q: Can I use NanoClaw for stocks, crypto, or commodities?
**A:** The current version is optimized for **forex macro-fundamental trading**. However, you can customize it (via `/customize` skill) to track macro factors relevant to other markets (e.g., Fed policy affects equities, oil prices affect CAD, etc.). The core engine is flexible.

### Q: What if I trade technical setups, not fundamentals?
**A:** NanoClaw won't be the right fit. It's designed for traders who make decisions based on **central bank policy, economic data, and rate differentials** — not chart patterns or indicators. If you use fundamentals to confirm technical setups, you could use NanoClaw as a macro overlay.

### Q: Can I share NanoClaw with my trading team?
**A:** Yes! NanoClaw supports **multiple WhatsApp groups** with isolated memory. Add your team's group and configure it:
```
@Andy add my "Trading Team" group with trigger @Andy
```
Each group member can interact with NanoClaw, and all conversations/data are shared within that group's workspace.

### Q: How do I backup my sentiment briefs and trade journal?
**A:** All data is stored in your local `groups/main/` folder. Simply backup that directory:
```bash
cp -r ~/nanoclaw/groups/main ~/Dropbox/nanoclaw-backup
```
Or set up automated backups:
```
@Andy every Sunday at midnight, compress my sentiment data and trade journal into a ZIP file
```

### Q: Can I run NanoClaw on a VPS or cloud server?
**A:** Yes, but currently only on **macOS or Linux**. Apple Container (macOS) or Docker (macOS/Linux) is required. AWS EC2 Linux instances work well. See README for setup instructions.

### Q: What if a data source goes down (e.g., ForexFactory)?
**A:** NanoClaw uses **multiple fallback data sources**. If ForexFactory is unavailable, it can switch to Investing.com or use web search to find economic calendar data. You can also configure custom data sources.

### Q: How much does NanoClaw cost?
**A:** NanoClaw is **free and open-source** (MIT License). However, it uses Claude AI via the Claude Code desktop app, which may have usage costs depending on your plan. Check Anthropic's pricing for Claude API usage.

### Q: Can I customize the sentiment brief format?
**A:** Yes! The sentiment brief template is defined in `container/skills/forex-trading/SKILL.md`. You can edit it directly or ask Claude Code to customize it:
```
@Andy change the daily sentiment brief format to include:
- US Treasury 10Y yield
- Dollar Index (DXY) level
- VIX level (for risk appetite)
```

### Q: What's the difference between Daily Briefings and Weekly Outlooks?
- **Daily Briefings:** Backward-looking + today's context (what happened overnight, today's events)
- **Weekly Outlooks:** Forward-looking (what's scheduled this week, what to watch for)

Use both for comprehensive intelligence.

### Q: Can I test NanoClaw without WhatsApp?
**A:** Not easily — WhatsApp is the primary interface. However, you can interact with NanoClaw via Claude Code's chat (main channel) during development/testing. For production use, WhatsApp is required.

### Q: How do I stop receiving automated briefs?
**A:** Delete or pause the scheduled task:
```
@Andy show my scheduled tasks
@Andy cancel the daily sentiment brief task
```

Or temporarily disable:
```
@Andy pause all scheduled tasks until Monday
```

---

## Conclusion

NanoClaw transforms your smartphone into a **24/7 macroeconomic intelligence platform** for forex trading. With automated daily briefings, real-time event alerts, weekly outlooks, and an AI chatbox that knows your positions and preferences, you have the equivalent of a macro research analyst working for you around the clock.

**Key Takeaways:**

1. **Start with daily briefings** — The single most valuable automation
2. **Schedule event alerts for the data you trade** — NFP, CPI, FOMC, ECB
3. **Use the chatbox actively** — It's not just for automation; ask questions anytime
4. **Keep your preferences and watchlist updated** — The more context NanoClaw has, the better
5. **Combine automation with on-demand research** — Scheduled briefs + real-time queries = full intelligence coverage

**Next Steps:**

1. Run `/setup` in Claude Code to install and authenticate
2. Schedule your first daily brief:
   ```
   @Andy every weekday at 7am, send me a Macro Sentiment Brief
   ```
3. Set up event alerts for the data releases you trade
4. Explore the chatbox with real macro questions
5. Customize as you learn what works for your trading style

Welcome to macro-fundamental forex trading powered by AI. 🚀

---

## Additional Resources

- **GitHub Repository:** [InsightsLog/nanoclaw](https://github.com/InsightsLog/nanoclaw)
- **Discord Community:** [Join the Discord](https://discord.gg/VGWXrf8x)
- **Documentation:** See `/docs` folder for architecture, security, and advanced topics
- **Forex Trading Skill:** `container/skills/forex-trading/SKILL.md` (technical reference)
- **Main Agent Config:** `groups/main/CLAUDE.md` (agent memory and capabilities)

---

**Disclaimer:** This tool provides trading analysis assistance only. It does not constitute financial advice. Forex trading involves substantial risk of loss and is not suitable for all investors. Past performance does not guarantee future results. Always do your own research and consider your financial situation before trading.
