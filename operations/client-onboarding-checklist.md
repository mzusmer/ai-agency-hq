# Client Onboarding Checklist - Summit Automation

Complete every step in order after a client signs and pays the setup fee. This checklist works for any local service business.

---

## Phase 1: Day 1 - Kickoff

- [ ] Send welcome email (see `sales/follow-up-sequence.md` for template)
- [ ] Send onboarding questionnaire to collect:
  - Legal business name
  - Industry and services offered
  - Business address
  - Business EIN (for A2P registration)
  - Business phone number to use for SMS
  - Business website URL
  - Owner's personal cell (for internal notifications)
  - Owner's preferred notification email
  - Average customer value (for reporting context)
  - Main service area (city or state)
  - Business hours
  - Current GHL account info (or confirm they need a new sub-account)
  - Logo file if available

- [ ] Schedule onboarding call (45 min)
- [ ] Create a client folder with their name, industry, and start date
- [ ] Log the client in your records with:
  - Name and company
  - Industry
  - Phone and email
  - Setup fee amount paid
  - Monthly retainer amount
  - Billing start date
  - Target go-live date

---

## Phase 2: Onboarding Call

- [ ] Confirm all questionnaire answers
- [ ] Walk through how the system works and set expectations
- [ ] Confirm what their current phone setup looks like (who answers, what happens on missed calls)
- [ ] Confirm A2P 10DLC status (do they have an account? Is the number already registered?)
- [ ] Set the go-live date target (7 to 10 business days from call)
- [ ] Confirm who should receive internal lead notifications
- [ ] Ask: what does a good lead look like for them? What details does the AI need to prioritize?
- [ ] Confirm business hours and after-hours expectations

---

## Phase 3: Build (Days 2 to 6)

- [ ] Set up GHL sub-account (or access existing account)
- [ ] Create custom fields (see `ghl/custom-fields.md`)
- [ ] Build the Missed Call Leads pipeline (see `ghl/pipeline-setup.md`)
- [ ] Set up tag library (see `ghl/tags.md`)
- [ ] Build the missed call text-back workflow (see `ghl/missed-call-workflow.md`)
- [ ] Configure the AI agent with client-specific details and industry context (see `ai-agent/missed-call-agent-prompt.md`)
- [ ] Set up internal notification email and/or SMS to owner
- [ ] Submit A2P 10DLC registration (or confirm existing registration is valid)
- [ ] Configure follow-up sequence (Day 1, Day 3, Day 7 messages)

---

## Phase 4: Testing (Days 7 to 8)

- [ ] Complete the full testing checklist (see `ghl/testing-checklist.md`)
- [ ] Confirm first SMS fires within 30 seconds of missed call
- [ ] Confirm AI agent handles the full conversation
- [ ] Confirm custom fields populate correctly
- [ ] Confirm pipeline stages update correctly
- [ ] Confirm internal notifications arrive with correct data
- [ ] Confirm opt-out handling works (reply STOP)
- [ ] Confirm follow-up sequence sends on correct days
- [ ] Review all SMS messages for typos or broken merge tags

---

## Phase 5: Launch (Day 9 to 10)

- [ ] Set workflow to Active
- [ ] Confirm A2P registration is approved (or flag that go-live is pending approval)
- [ ] Brief the client:
  - Where to see leads in GHL (Conversations tab and Pipeline)
  - What a notification looks like and what to do when one arrives
  - How to move leads through the pipeline
  - How to mark an appointment as Won
- [ ] Send go-live confirmation email

---

## Phase 6: Post-Launch Check-In (Day 14)

- [ ] Review workflow history to confirm the automation is firing correctly
- [ ] Check pipeline for any stuck or miscategorized leads
- [ ] Ask the client: are they seeing notifications? Any issues?
- [ ] Check for any opt-out errors or failed messages
- [ ] Note any optimization opportunities

---

## Phase 7: Monthly Review (Day 30+)

- [ ] Pull GHL data: total missed calls captured, SMS sent, leads qualified, appointments booked
- [ ] Compare to prior period
- [ ] Review any failed workflow triggers
- [ ] Review message reply rates
- [ ] Ask the client for feedback
- [ ] Make any adjustments
- [ ] Send a brief monthly performance summary to the client
- [ ] Invoice the next month's retainer
