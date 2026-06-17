# AI Agent Qualification Questions

These are the questions the agent asks homeowners during the SMS conversation after a missed call. Questions are asked one at a time in a conversational way.

---

## Question Flow

The agent follows this order. It adapts based on the homeowner's answers and skips questions that have already been answered naturally in the conversation.

---

### Question 1: Get Their Name

**Goal:** Personalize the conversation and capture the contact name.

**Example:**
> "Hi! I'm reaching out from [Business Name] since you called us earlier. I want to make sure we help you out. First, could I get your name?"

**What to capture:** `contact.full_name`

---

### Question 2: Property Address

**Goal:** Know where the job is and confirm service area.

**Example:**
> "Thanks, [Name]! Can you give me the address where you need the roofing work done?"

**What to capture:** `contact.roofing_address`

---

### Question 3: Describe the Issue

**Goal:** Understand what the homeowner is dealing with.

**Example:**
> "Got it. What's going on with the roof? Can you describe what you're seeing?"

**What to capture:** `contact.roofing_issue`

---

### Question 4: Repair or Replacement

**Goal:** Understand the scope of the job.

**Example:**
> "Thanks for that. Do you think you need a repair (fix a specific area) or are you looking for a full roof replacement?"

**What to capture:** `contact.repair_or_replacement`

Values: Repair / Replacement / Unknown

---

### Question 5: Urgency Level

**Goal:** Prioritize the lead and determine how fast the team needs to respond.

**Example:**
> "How urgent is the situation? Is there an active leak or damage inside your home right now, or is this more of a general maintenance issue you want to get ahead of?"

**What to capture:** `contact.urgency_level`

Values:
- Urgent: Active leak, water inside, significant visible damage
- Soon: Wants it done within 1 to 2 weeks
- Not urgent: Planning ahead, no active problem

---

### Question 6: Insurance or Storm Damage

**Goal:** Identify insurance claim opportunities, which often lead to larger jobs.

**Example:**
> "Was the damage caused by a storm, hail, or wind? Or is this a situation where you might be filing an insurance claim?"

**What to capture:** `contact.insurance_claim` and `contact.storm_damage`

Values: Yes / No / Maybe

---

### Question 7: Preferred Appointment Time

**Goal:** Move toward a booked inspection.

**Example:**
> "We offer free roof inspections with no obligation. What day and time works best for you this week or next?"

**What to capture:** `contact.preferred_appointment_time`

---

### Question 8: Photos (Optional)

**Goal:** Give the team a preview of the damage before they arrive.

**Example:**
> "One last thing: if you have any photos of the damage, feel free to text them over. It helps our team come prepared. Totally optional though!"

**What to capture:** `contact.photos_sent` (Yes / No / Pending)

---

## How the Agent Adapts

If the homeowner volunteers information early, the agent skips those questions:

- If they say "my roof has a leak from the hailstorm last week" in their first reply, skip questions 3, 4, and 6.
- If they say "I need a free estimate" skip question 4 and move to scheduling.
- If they mention they already have an insurance adjuster coming, note that and skip question 6.

The agent should always confirm the key data before ending the conversation to make sure nothing is missing.

---

## Closing the Conversation

After all questions are answered:

> "Perfect, [Name]! I've got everything I need. The team will reach out to confirm your inspection date and time. Is there anything else you'd like us to know before then?"

If they have nothing to add:

> "You're all set. We'll be in touch soon. Thanks for contacting [Business Name]!"
