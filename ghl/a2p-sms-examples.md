# A2P 10DLC SMS Compliance Guide

A2P (Application-to-Person) 10DLC is the US carrier system that requires all businesses sending SMS from software platforms to register their phone numbers and message content. This is required to avoid spam filtering and carrier blocking.

---

## Why This Matters

If you skip A2P registration:
- Messages may be blocked or filtered by carriers
- Delivery rates drop significantly
- The client's number can get flagged or blacklisted
- This can happen without any warning

Always register before going live with any client.

---

## What You Need to Register

**1. Business Information**
- Legal business name
- EIN (Employer Identification Number)
- Business address
- Business website
- Business type (LLC, Sole Proprietorship, etc.)

**2. Use Case**
- Select: Mixed (Customer Care + Marketing) or Customer Care only
- For missed call text-back: **Customer Care** is the primary use case

**3. Sample Messages**
- Submit 2 to 5 sample messages that represent exactly what you will send
- Samples must include opt-out language

---

## A2P Sample Messages for Local Business Missed Call Text-Back

Submit these as your sample messages during registration:

**Sample 1 - First Response:**
```
Hey {{contact.first_name}}, sorry we missed your call. This is {{location.name}}. What can we help you with today? Reply STOP to opt out. Msg & Data rates may apply.
```

**Sample 2 - Follow-Up Question:**
```
Thanks for reaching out to {{location.name}}. Can you share a few details about what service you need? Reply STOP to opt out.
```

**Sample 3 - Scheduling:**
```
Got it. What is the best day and time for someone to follow up with you or get you scheduled? Reply STOP to opt out.
```

**Sample 4 - Day 3 Follow-Up:**
```
Hi {{contact.first_name}}, {{location.name}} here. Still happy to help! Would you like to get something scheduled this week? Reply STOP to opt out.
```

**Sample 5 - Final Follow-Up:**
```
Last follow-up from {{location.name}}. If you ever need us, just call or text anytime. Take care! Reply STOP to opt out.
```

---

## A2P Campaign Description

Use this when submitting your campaign registration:

> We send text messages to people who contact our business by calling our business line, using our website chat widget, or requesting information about our services. Messages include missed call follow-up, appointment scheduling assistance, estimate requests, and general customer support. All recipients can reply STOP at any time to opt out of future messages.

---

## Opt-In Description

Use this when submitting your opt-in method:

> Contacts opt in by calling the business directly (inbound-initiated contact), by using the website chat widget, or by requesting information about our services. The website chat widget includes clear SMS consent language explaining that they may receive calls and text messages from the business. Recipients can reply STOP at any time to opt out.

---

## Opt-Out Confirmation

When a contact replies STOP, send this message:

```
You have been unsubscribed and will not receive further messages from {{location.name}}. Reply START to resubscribe anytime.
```

---

## Required Language in Every First Contact SMS

Every first SMS to a new contact must include:
1. Business name
2. What the message is about
3. Opt-out instruction: `Reply STOP to opt out`
4. Message frequency or rate disclosure: `Msg & Data rates may apply`

---

## Opt-Out Handling in GHL

When a contact replies STOP, GHL automatically marks them as unsubscribed and stops all SMS. You should also:

1. Add tag: `dnc`
2. Remove them from all active workflows
3. Never manually send them another SMS

---

## How to Register in GHL

1. Go to **Settings > Phone Numbers**
2. Click on the number you want to register
3. Select **A2P Registration**
4. Follow the prompts to submit business info and sample messages
5. Wait for approval (typically 3 to 7 business days)

---

## How to Register via Twilio

If using a Twilio number connected to GHL:
1. Log into Twilio console
2. Go to **Messaging > Regulatory Compliance > A2P 10DLC**
3. Create a Brand (business registration)
4. Create a Campaign (use case + sample messages)
5. Assign the campaign to your phone number

---

## Common Rejection Reasons

| Reason | Fix |
|---|---|
| Missing opt-out language | Add "Reply STOP to opt out" to every sample |
| Vague use case description | Be specific: "Text-back for missed calls from local service business customers" |
| Business name not in messages | Add the business name to every sample |
| Website does not include SMS consent | Add consent language to the website (already done on the Summit Automation site) |
| Opt-in method unclear | Describe exactly how customers opt in (called the business, used the chat widget) |
