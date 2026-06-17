# Client Onboarding Checklist - Summit Automation

Complete every step in order after a client signs and pays the setup fee.

---

## Phase 1: Day 1 - Kickoff

- [ ] Send welcome email (see `sales/follow-up-sequence.md` for template)
- [ ] Send onboarding questionnaire to collect:
  - Legal business name
  - Business address
  - Business EIN (for A2P)
  - Business phone number to use for SMS
  - Business website URL
  - Owner's personal cell (for internal notifications)
  - Owner's preferred notification email
  - Average job value (for reporting)
  - Main service area (city or state)
  - Business hours
  - Current GHL account info (or confirm they need a new sub-account)
  - Logo file if available

- [ ] Schedule onboarding call (45 min on Calendly or via email)
- [ ] Create a client folder in your system with their name and start date
- [ ] Log the client in your records with:
  - Name and company
  - Phone and email
  - Setup fee amount paid
  - Monthly retainer amount
  - Billing start date
  - Go-live date (target)

---

## Phase 2: Onboarding Call

- [ ] Confirm all questionnaire answers
- [ ] Walk through how the system works (set expectations)
- [ ] Confirm what their business phone experience looks like (who currently answers, what happens on missed calls)
- [ ] Confirm A2P 10DLC status: do they have an account already? Is the number registered?
- [ ] Set the go-live date (target: 7 to 10 business days from call)
- [ ] Confirm who should receive internal lead notifications
- [ ] Ask: what does a hot lead look like to them? What should the AI prioritize?
- [ ] Confirm business hours for follow-up timing

---

## Phase 3: Build (Days 2 to 6)

- [ ] Set up GHL sub-account (or access their existing account)
- [ ] Create custom fields (see `ghl/custom-fields.md`)
- [ ] Build the Roofing Leads pipeline (see `ghl/pipeline-setup.md`)
- [ ] Set up tag library (see `ghl/tags.md`)
- [ ] Build the missed call text-back workflow (see `ghl/missed-call-workflow.md`)
- [ ] Configure the AI agent with client-specific details (see `ai-agent/missed-call-agent-prompt.md`)
- [ ] Set up internal notification email and/or SMS to owner
- [ ] Submit A2P 10DLC registration (or confirm registration if already done)
- [ ] Configure follow-up sequence (Day 1, Day 3, Day 7 texts)

---

## Phase 4: Testing (Days 7 to 8)

- [ ] Complete full testing checklist (see `ghl/testing-checklist.md`)
- [ ] Confirm first SMS fires within 30 seconds of missed call
- [ ] Confirm AI agent handles full qualification conversation
- [ ] Confirm custom fields populate correctly after AI conversation
- [ ] Confirm pipeline stages update correctly
- [ ] Confirm internal notifications arrive with correct data
- [ ] Confirm opt-out handling works (reply STOP)
- [ ] Confirm follow-up sequence sends on correct days
- [ ] Review all SMS messages for typos or broken merge tags

---

## Phase 5: Launch (Day 9 to 10)

- [ ] Set workflow to Active
- [ ] Confirm A2P registration is approved (or note if pending and plan to go live once approved)
- [ ] Brief the client:
  - Where to see leads in GHL (Conversations tab and Pipeline)
  - What a notification looks like
  - What to do when they receive one
  - How to move leads through the pipeline
  - How to mark a job as Closed Won
- [ ] Send go-live confirmation email to client

---

## Phase 6: Post-Launch Check-In (Day 14)

- [ ] Review workflow history to confirm the automation is firing correctly
- [ ] Check pipeline for any stuck or miscategorized leads
- [ ] Ask client: are they seeing notifications? Any issues?
- [ ] Check for any opt-out errors or failed messages
- [ ] Note any optimization opportunities

---

## Phase 7: Monthly Review (30 Days)

- [ ] Pull GHL data: total missed calls captured, SMS sent, leads qualified, inspections booked
- [ ] Compare to prior month (or baseline if first month)
- [ ] Review any failed workflow triggers
- [ ] Review message open and reply rates
- [ ] Ask client: feedback on the system? Anything feeling off?
- [ ] Make any adjustments needed
- [ ] Send a brief monthly report to the client
- [ ] Invoice the next month's retainer
