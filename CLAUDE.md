# CLAUDE.md - Summit Automation Project Instructions

Read this file at the start of every session. It contains everything you need to understand the business, how to help, and what to avoid.

---

## Business Overview

**Summit Automation** is an AI automation agency for local service businesses. The primary offer is a missed call text-back system that captures leads the moment they call and does not reach the owner or team.

This is a one-person agency being built from scratch. The goal is to land the first paying client as fast as possible, then systematize onboarding and delivery.

---

## The Core Offer

**Missed Call Text-Back Automation**

When a customer calls a local business and nobody answers, Summit Automation's system:

1. Detects the missed call via GoHighLevel
2. Sends an instant SMS to the caller within seconds
3. An AI agent takes over the conversation via text
4. The agent qualifies the lead and collects service details
5. The system books or flags the lead for the business team
6. The team is notified in real time with full lead details

This solves a real, painful, and expensive problem for local service businesses. Most small businesses lose 20 to 40 percent of their inbound leads from missed calls.

---

## Target Customer

Summit Automation serves any local service business that relies on inbound calls to generate revenue, including:

- Home services: HVAC, plumbing, electrical, landscaping, cleaning, pest control
- Health and wellness: med spas, chiropractic, dental, physical therapy
- Auto services: detailing, repair, tinting, tire shops
- Professional services: real estate, insurance, financial advisors, accountants

Key characteristics:
- 1 to 15 employees
- Owner-operated or small admin team
- Relies on inbound calls for new business
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
- **Google Business Profile** - Primary lead source for most clients
- **Loom** - Used for personalized outreach video audits
- **Twilio or GHL native SMS** - SMS sending infrastructure

---

## GoHighLevel Setup Notes

- All workflows are built inside the client's GHL sub-account
- The missed call trigger uses the "Missed Call" trigger in GHL
- Conversations are tracked in the GHL Conversations tab
- The AI agent runs via GHL's native AI or webhook to Claude
- Pipeline name: **Missed Call Leads**
- Pipeline stages: New Lead, Texted Back, Qualified, Appointment Requested, Appointment Booked, No Response, Won, Lost
- Tags use lowercase kebab-case: `missed-call`, `qualified-lead`, `urgent`, `dnc`, etc.
- Custom fields store lead details: service_needed, request_details, service_address, urgency, preferred_appointment_time

---

## SMS Compliance (A2P 10DLC)

This is critical. All outbound SMS must comply with A2P 10DLC regulations.

Key rules:
- Every contact must have opted in before receiving marketing texts
- The first SMS to a new contact must include the business name, opt-out language, and message frequency disclosure
- Never send bulk SMS to cold lists
- The missed call text-back is compliant because the person called first (inbound-initiated contact)
- The website chat widget includes opt-in consent language
- Register the phone number for A2P 10DLC through Twilio or GHL before going live
- Sample opt-in language and sample messages are in `ghl/a2p-sms-examples.md`

---

## Website Notes

- The live website is in the `docs/` folder and is published via GitHub Pages
- The chat widget (GoHighLevel) is the ONLY contact and opt-in method on the website
- There is NO contact form with a phone number field on the website
- SMS consent language is displayed near the chat widget CTA
- Do not add any contact forms with phone number fields to the website

---

## Tone and Voice

Use this voice across all content, emails, scripts, and agent prompts:

- Direct and confident, not salesy
- Professional but not corporate
- Plain English, no jargon unless the reader is in the same industry
- Short sentences
- Action-oriented

**Do not use em dashes (-- or --).**
Use commas, periods, or line breaks instead.

---

## Business Goals (Current Phase)

1. Build out all systems and assets in this repo
2. Land the first local service business client using cold outreach (email, Instagram DM, cold call, Loom audit)
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
- Do not hard-code API keys, tokens, passwords, or private credentials anywhere in the repo.
- Do not create fake testimonials or make guarantees about specific results.

---

## Files Reference

| File | Purpose |
|---|---|
| README.md | Public-facing repo overview |
| docs/ | Live website (GitHub Pages) |
| ghl/ | GoHighLevel build documentation |
| ai-agent/ | AI agent prompts and rules |
| sales/ | All outreach and sales content |
| operations/ | Client delivery and tracking |
| data/ | Tracker tables and lead lists |
