# Technical Installation Checklist - Summit Automation

This is the step-by-step technical build checklist. Use it alongside the client onboarding checklist to make sure nothing is missed.

---

## GoHighLevel Sub-Account Setup

- [ ] Log into your GHL Agency account
- [ ] Create a new sub-account for the client
  - Business name
  - Address
  - Phone number
  - Email
  - Time zone (set correctly for their location)
- [ ] Assign a phone number to the sub-account (GHL number or connect their existing Twilio number)
- [ ] Set up the GHL Conversations inbox
- [ ] Configure business hours in GHL settings

---

## A2P 10DLC Registration

- [ ] Confirm the phone number is not already registered (check in GHL or Twilio)
- [ ] Submit Brand registration:
  - Legal business name
  - EIN
  - Business website
  - Business address
  - Business type
- [ ] Submit Campaign registration:
  - Use case: Customer Care (or Mixed)
  - Sample messages (see `ghl/a2p-sms-examples.md`)
- [ ] Confirm registration is submitted and note the pending approval
- [ ] Flag go-live date as contingent on A2P approval

---

## Custom Fields

Create all custom fields in GHL Settings > Custom Fields (see `ghl/custom-fields.md` for full list):

- [ ] `roofing_address` (Text)
- [ ] `roofing_issue` (Text Area)
- [ ] `repair_or_replacement` (Dropdown)
- [ ] `urgency_level` (Dropdown)
- [ ] `insurance_claim` (Dropdown)
- [ ] `storm_damage` (Dropdown)
- [ ] `preferred_appointment_time` (Text)
- [ ] `photos_sent` (Dropdown)
- [ ] `lead_source` (Dropdown)
- [ ] `ai_qualification_status` (Dropdown)

---

## Pipeline Setup

Create the Roofing Leads pipeline in GHL CRM > Pipelines:

- [ ] Create pipeline named: Roofing Leads
- [ ] Add stages in order:
  - New Lead
  - No Response
  - Contacted
  - Qualified
  - Estimate Scheduled
  - Proposal Sent
  - Closed Won
  - Closed Lost

---

## Workflow Build

Build the missed call workflow (see `ghl/missed-call-workflow.md` for full instructions):

- [ ] Create workflow: Missed Call Text-Back - Roofing
- [ ] Set trigger: Missed Call
- [ ] Add filters: exclude DNC and Existing Client tags
- [ ] Add Step 1: Create/Update Opportunity (pipeline: Roofing Leads, stage: New Lead)
- [ ] Add Step 2: Send SMS - First text-back message
- [ ] Add Step 3: Wait for reply (30 min timeout)
- [ ] Add Step 4: If/Else branch (replied vs. no reply)
- [ ] Add Step 4B: No reply follow-up SMS
- [ ] Add Step 4C: Tag (No Reply - Missed Call), update pipeline (No Response)
- [ ] Add Step 5: AI agent (GHL native or webhook)
- [ ] Add Step 6: Apply tags based on qualification outcome
- [ ] Add Step 7: Update pipeline stage based on outcome
- [ ] Add Step 8: Internal notification (email + optional SMS to owner)
- [ ] Add Step 9: Follow-up sequence (Day 1, Day 3, Day 7 for warm leads)
- [ ] Save workflow in Draft mode until testing is complete

---

## AI Agent Configuration

- [ ] Open agent prompt from `ai-agent/missed-call-agent-prompt.md`
- [ ] Replace all placeholder text:
  - [Business Name] with client's company name
  - [X hours] with realistic callback window
  - Business hours with actual hours
- [ ] Configure in GHL AI Employee or set up webhook to Claude endpoint
- [ ] Test agent with a practice phone number

---

## Internal Notification Setup

- [ ] Confirm owner's notification email
- [ ] Confirm whether SMS alerts to owner's cell are desired
- [ ] Build the notification email template with all custom field merge tags
- [ ] Test notification delivery

---

## Follow-Up Sequence

- [ ] Build Day 1 follow-up message (4 hours after first text, if no reply)
- [ ] Build Day 3 message
- [ ] Build Day 7 (final) message
- [ ] Add `Follow-Up Sequence Complete` tag after final message fires
- [ ] Test that follow-up sequence does NOT fire if contact has already replied

---

## Final QA

- [ ] Complete full testing checklist (`ghl/testing-checklist.md`)
- [ ] Document any issues and resolutions
- [ ] Get client sign-off before switching workflow to Active
- [ ] Switch workflow to Active
