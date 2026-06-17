# CLAUDE.md - Summit Automation Project Instructions

Read this file at the start of every session. It contains everything you need to understand the business, how to help, and what to avoid.

---

## Business Overview

**Summit Automation** is an AI automation agency that serves roofing contractors. The primary offer is a missed call text-back system that captures leads the moment they call and do not reach the owner.

This is a one-person agency being built from scratch. The goal is to land the first paying client as fast as possible, then systematize onboarding and delivery.

---

## The Core Offer

**Missed Call Text-Back Automation**

When a homeowner calls a roofing company and nobody answers, Summit Automation's system:

1. Detects the missed call via GoHighLevel
2. Sends an instant SMS to the caller
3. An AI agent takes over the conversation via text
4. The agent qualifies the lead and collects job details
5. The system books or flags the lead for the roofing company
6. The roofing company's team is notified in real time

This solves a real, painful, and expensive problem for roofers. Most small roofing companies lose 30 to 50 percent of their inbound leads from missed calls.

---

## Target Customer

- Residential roofing contractors
- 1 to 10 employees
- Owner-operated or small admin team
- Spends money on Google Ads, Local Service Ads, or referrals
- Storm-prone markets: Texas, Florida, Colorado, Oklahoma, Georgia, Illinois
- Does NOT have a strong follow-up system
- Loses leads because nobody answers or calls back fast enough

---

## Pricing

| Item | Amount |
|---|---|
| One-time setup fee | $1,000 |
| Monthly retainer | $500 to $750/month |

Always lead with value, not price. The setup fee covers the build. The retainer covers ongoing support and optimization.

---

## Tools and Tech Stack

- **GoHighLevel (GHL)** - Core platform for CRM, SMS, workflows, and pipelines
- **Claude (Anthropic)** or **GHL AI** - SMS conversation agent
- **A2P 10DLC** - SMS compliance (required for all business texting in the US)
- **Google Business Profile** - Main lead source for roofing clients
- **Loom** - Used for personalized outreach video audits
- **Twilio or GHL native SMS** - SMS sending infrastructure

---

## GoHighLevel Setup Notes

- All workflows are built inside the client's GHL sub-account (or a snapshot applied to their sub-account)
- The missed call trigger uses the "Missed Call" trigger in GHL
- Conversations are tracked in the GHL Conversations tab
- The AI agent runs either via GHL's native AI or webhook to Claude
- Pipeline stages map to the roofing sales process (New Lead, Contacted, Qualified, Estimate Scheduled, Proposal Sent, Closed Won, Closed Lost)
- Tags are used to track lead source, urgency, and follow-up status
- Custom fields store roofing-specific data (issue type, address, insurance claim status, etc.)

---

## SMS Compliance (A2P 10DLC)

This is critical. All outbound SMS must comply with A2P 10DLC regulations.

Key rules:
- Every contact must have opted in before receiving marketing texts
- The first SMS to a new contact must include the business name, opt-out language, and message frequency disclosure
- Never send bulk SMS to cold lists
- The missed call text-back is compliant because the person called first (inbound-initiated contact)
- Register the phone number for A2P 10DLC through Twilio or GHL before going live
- Sample opt-in language is in `ghl/a2p-sms-examples.md`

---

## Tone and Voice

Use this voice across all content, emails, scripts, and agent prompts:

- Direct and confident, not salesy
- Professional but not corporate
- Plain English, no jargon unless the reader is a roofer (then use their language)
- Short sentences
- Action-oriented

**Do not use em dashes (-- or --).**
Use commas, periods, or line breaks instead.

---

## Business Goals (Current Phase)

1. Build out all systems and assets in this repo
2. Land the first roofing client using cold outreach (email, Instagram DM, cold call, Loom audit)
3. Deliver the automation flawlessly for the first client
4. Get a testimonial and a referral
5. Scale to 5 paying clients at $500 to $750/month each

---

## What to Always Remember

- The owner is new to running an agency. Keep explanations clear and beginner-friendly.
- Every decision should point toward landing a client faster and delivering reliably.
- Do not over-engineer. Build the simplest version that works first.
- The missed call text-back is the only offer right now. Do not add new offers until the first is proven.
- Outreach is the top priority before any client is signed.
- Delivery quality is the top priority after a client is signed.

---

## Files Reference

| File | Purpose |
|---|---|
| README.md | Public-facing repo overview |
| ghl/ | GoHighLevel build documentation |
| ai-agent/ | AI agent prompts and rules |
| sales/ | All outreach and sales content |
| operations/ | Client delivery and tracking |
| data/ | Tracker tables and lead lists |
| website/ | Landing page and legal pages |
