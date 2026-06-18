# AI Agent Qualification Questions

These are the questions the agent asks customers during the SMS conversation after a missed call. Questions are asked one at a time in a conversational way.

---

## Question Flow

The agent follows this order. It adapts based on the customer's replies and skips questions that have already been answered naturally in the conversation.

---

### Question 1: Get Their Name

**Goal:** Personalize the conversation and capture the contact name.

**Example:**
> "Hi! I'm reaching out from {{location.name}} since you called us earlier. I want to make sure we help you out. Could I get your name?"

**What to capture:** `contact.full_name`

---

### Question 2: What Do They Need Help With

**Goal:** Understand the service or reason for the call.

**Example:**
> "Thanks, {{contact.first_name}}! What can we help you with today?"

**What to capture:** `service_needed`

---

### Question 3: More Details About the Request

**Goal:** Get enough context for the business team to prepare.

**Example:**
> "Got it. Can you tell me a little more about what you need? Any details that would help us come prepared."

**What to capture:** `request_details`

---

### Question 4: Service Address or Location (if applicable)

**Goal:** Know where the work is or confirm the service area.

**Example:**
> "What is the best address or location for the service?"

Skip this question if the business does not do on-site work (e.g., a remote or in-office-only service).

**What to capture:** `service_address`

---

### Question 5: Urgency

**Goal:** Prioritize the lead and help the team respond at the right speed.

**Example:**
> "Is this something urgent, or are you looking to schedule at your convenience?"

**What to capture:** `urgency`

Values:
- Urgent: Needs immediate or same-day attention
- Soon: Within the next few days or this week
- Flexible: No rush, planning ahead

---

### Question 6: Preferred Appointment or Callback Time

**Goal:** Move toward the next step.

**Example:**
> "What day and time works best for someone to follow up with you or get you scheduled?"

**What to capture:** `preferred_appointment_time`

---

### Question 7: Photos (Optional, If Relevant)

**Goal:** Give the team useful context before the appointment.

**Example:**
> "If you have any photos that might help, feel free to send them over. Totally optional, but it helps our team come prepared."

Only ask this if photos are relevant to the type of service (repair, damage assessment, physical work, etc.). Skip for appointment-based services where photos are not useful.

**What to capture:** `photos_sent` (Yes / No / Pending)

---

## How the Agent Adapts

If the customer volunteers information early, the agent skips those questions:

- If they say "I need someone to fix my AC, it stopped working last night" in their first reply, skip questions 2 and 3 entirely and go directly to address and urgency.
- If they say "I want to book a cleaning" skip the details question and go straight to timing.
- If they mention they need something done today, treat it as urgent and prioritize getting a callback scheduled.

The agent should always confirm the key data before ending the conversation to make sure nothing is missing.

---

## Industry Examples

The same question framework applies across industries. Here is how the questions translate:

| Industry | Service Needed | Request Details | Address Needed |
|---|---|---|---|
| HVAC | "Fix AC / Heat" | "Not cooling, model number, age of unit" | Yes |
| Plumbing | "Fix a leak / clog" | "Where the issue is, how long it's been happening" | Yes |
| Med Spa | "Book a treatment" | "Which treatment they are interested in" | No (in-office) |
| Dentist | "New patient / cleaning" | "Type of appointment needed" | No (in-office) |
| Auto Detailing | "Full detail / specific service" | "Vehicle make, model, condition" | Pickup or drop-off |
| Landscaping | "Lawn care / project" | "Size of yard, specific work needed" | Yes |
| Cleaning | "House cleaning" | "Home size, frequency, specific needs" | Yes |

---

## Closing the Conversation

After all questions are answered:

> "That is everything I need, {{contact.first_name}}! I have passed this along to the team. Someone will be in touch at {{preferred_appointment_time}} to confirm. Is there anything else you would like us to know?"

If they have nothing to add:

> "You are all set. We will be in touch soon. Thanks for contacting {{location.name}}!"
