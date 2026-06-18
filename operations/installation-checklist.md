# Technical Installation Checklist - Summit Automation

This is the step-by-step technical build checklist. Use it alongside the client onboarding checklist to make sure nothing is missed. Works for any local service business.

---

## GoHighLevel Sub-Account Setup

- [ ] Log into your GHL Agency account
- [ ] Create a new sub-account for the client
  - Business name
  - Industry
  - Address
  - Phone number
  - Email
  - Time zone (set to the client's local time zone)
- [ ] Assign a phone number to the sub-account (GHL number or connect their existing Twilio number)
- [ ] Set up the GHL Conversations inbox
- [ ] Configure business hours in GHL settings

---

## A2P 10DLC Registration

- [ ] Confirm the phone number is not already registered
- [ ] Submit Brand registration:
  - Legal business name
  - EIN
  - Business website
  - Business address
  - Business type
- [ ] Submit Campaign registration:
  - Use case: Customer Care (or Mixed)
  - Sample messages (see `ghl/a2p-sms-examples.md`)
  - Campaign description (see `ghl/a2p-sms-examples.md`)
  - Opt-in method description (see `ghl/a2p-sms-examples.md`)
- [ ] Confirm registration is submitted and note approval status
- [ ] Flag go-live date as contingent on A2P approval if not yet approved

---

## Custom Fields

Create all custom fields in GHL Settings > Custom Fields (see `ghl/custom-fields.md` for full list):

- [ ] `service_needed` (Text)
- [ ] `request_details` (Text Area)
- [ ] `service_address` (Text)
- [ ] `urgency` (Dropdown)
- [ ] `preferred_appointment_time` (Text)
- [ ] `photos_sent` (Dropdown)
- [ ] `lead_source` (Dropdown)
- [ ] `best_next_step` (Dropdown)
- [ ] `ai_qualification_status` (Dropdown)

---

## Pipeline Setup

Create the Missed Call Leads pipeline in GHL CRM > Pipelines:

- [ ] Create pipeline named: Missed Call Leads
- [ ] Add stages in order:
  - New Lead
  - Texted Back
  - Qualified
  - Appointment Requested
  - Appointment Booked
  - No Response
  - Won
  - Lost

---

## Workflow Build

Build the missed call workflow (see `ghl/missed-call-workflow.md` for full instructions):

- [ ] Create workflow: Missed Call Text-Back
- [ ] Set trigger: Missed Call
- [ ] Add filters: exclude `dnc` and `existing-client` tags
- [ ] Add Step 1: Create/Update Opportunity (pipeline: Missed Call Leads, stage: New Lead)
- [ ] Add Step 2: Send SMS - First text-back message
- [ ] Add Step 3: Wait for reply (30 min timeout)
- [ ] Add Step 4: If/Else branch (replied vs. no reply)
- [ ] Add Step 4B: No reply follow-up SMS
- [ ] Add Step 4C: Apply tag `no-response`, update pipeline to No Response
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
  - Business name placeholder with client's actual business name
  - Callback window with a realistic timeframe for this client
  - Business hours with actual hours
  - Add any industry-specific notes (see customization notes in the prompt file)
- [ ] Configure in GHL AI Employee or set up webhook to Claude endpoint
- [ ] Test agent with a practice phone number

---

## Internal Notification Setup

- [ ] Confirm owner's notification email
- [ ] Confirm whether SMS alerts to owner's cell are wanted
- [ ] Build the notification email template with all custom field merge tags
- [ ] Test notification delivery

---

## Follow-Up Sequence

- [ ] Build Day 1 follow-up (4 hours after first text, if no reply)
- [ ] Build Day 3 message
- [ ] Build Day 7 (final) message
- [ ] Add `follow-up-complete` tag after final message fires
- [ ] Test that follow-up sequence does NOT fire if contact has already replied

---

## Final QA

- [ ] Complete the full testing checklist (`ghl/testing-checklist.md`)
- [ ] Document any issues and how they were resolved
- [ ] Get client approval before switching workflow to Active
- [ ] Switch workflow to Active
