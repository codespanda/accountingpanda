import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
  compare,
  example,
  exercises,
  mistakes,
  note,
  overview,
  p,
  q,
  screen,
  steps,
  summary,
  table,
  terms,
  tip,
} from "@/lib/lessonKit"

// GST Compliance in India — lesson screens by module index (0 = Module 1).
// The course follows Saffron Threads Pvt Ltd, a Jaipur textile wholesaler with
// aggregate turnover of ₹12 crore, through FY 2026-27. A smaller QRMP client,
// Nila Prints, is used for quarterly filing examples. GST rates are assumed
// at 18% for illustration.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — The GST Compliance Calendar",
      ["GST compliance is a monthly rhythm of invoices, returns and payments. This module builds the compliance calendar for Saffron Threads."],
      ["Describe what GST compliance covers", "Compare monthly filers with QRMP filers", "Know the key due dates for GSTR-1, IFF and GSTR-3B", "Know the annual return deadlines", "Build a compliance calendar and checklist", "Explain the consequences of missing a deadline"],
    ),
    screen(
      "Meet Saffron Threads",
      p("Saffron Threads Pvt Ltd sells fabrics and garments wholesale from Jaipur, Rajasthan, to retailers across India. Its aggregate turnover was ₹12 crore in FY 2025-26."),
      table(
        ["Fact", "What it means for compliance"],
        [
          ["Turnover above ₹5 crore", "Monthly returns; e-invoicing applies"],
          ["Turnover ₹10 crore or more", "Invoices must be reported to the IRP within 30 days"],
          ["Turnover above ₹2 crore and ₹5 crore", "GSTR-9 and GSTR-9C are required"],
          ["Inter-state sales", "IGST and e-way bills on most consignments"],
        ],
      ),
      p("Meera, the accounts manager, also looks after Nila Prints, a small Jaipur printing business with turnover of ₹1.2 crore that files quarterly."),
    ),
    screen(
      "What GST compliance covers",
      bullets(
        "Keeping registration details correct.",
        "Issuing compliant invoices, e-invoices, credit and debit notes, and e-way bills.",
        "Reconciling input tax credit (ITC) every month.",
        "Filing GSTR-1 (outward supplies) and GSTR-3B (summary and payment).",
        "Paying tax, interest and late fees on time.",
        "Filing the annual return and reconciliation statement.",
        "Keeping records and replying to notices.",
      ),
    ),
    screen(
      "Monthly vs. quarterly (QRMP) filers",
      compare(
        ["Monthly filers", "Any registered person can file monthly; those with aggregate turnover above ₹5 crore must.", ["GSTR-1 every month", "GSTR-3B every month"]],
        ["QRMP scheme", "Optional for aggregate turnover up to ₹5 crore.", ["GSTR-1 and GSTR-3B quarterly", "Optional IFF for B2B invoices in months 1 and 2", "Tax still paid monthly through PMT-06"]],
      ),
      p("Saffron Threads must file monthly. Nila Prints uses QRMP and pays 35% of last quarter's cash tax each month under the fixed-sum method."),
    ),
    screen(
      "Key due dates",
      table(
        ["Return or payment", "Monthly filers", "QRMP filers"],
        [
          ["GSTR-1", "11th of the next month", "13th of the month after the quarter"],
          ["IFF (optional)", "—", "13th of the next month, for months 1 and 2"],
          ["PMT-06 tax payment", "—", "25th of the next month, for months 1 and 2"],
          ["GSTR-3B", "20th of the next month", "22nd or 24th of the month after the quarter, depending on the State"],
        ],
      ),
      p("So Saffron Threads files August 2026's GSTR-1 by 11 September and GSTR-3B by 20 September."),
      note("Due dates are often extended by notification. Check the GST portal and CBIC notifications each month."),
    ),
    screen(
      "Annual return deadlines",
      table(
        ["Return", "Who", "Due"],
        [
          ["GSTR-9 annual return", "Mandatory above ₹2 crore aggregate turnover", "31 December after the financial year"],
          ["GSTR-9C reconciliation statement", "Above ₹5 crore — self-certified", "With GSTR-9, by 31 December"],
        ],
      ),
      p("Saffron Threads' GSTR-9 and GSTR-9C for FY 2026-27 are due by 31 December 2027."),
    ),
    screen(
      "A compliance calendar and checklist",
      table(
        ["Day of month", "Saffron Threads task"],
        [
          ["1st–5th", "Close sales and purchase registers for the previous month"],
          ["By 10th", "ITC reconciliation with GSTR-2B and IMS actions"],
          ["11th", "File GSTR-1"],
          ["14th", "GSTR-2B for the month is generated — final ITC check"],
          ["By 18th", "Prepare GSTR-3B; approve payment"],
          ["20th", "Pay and file GSTR-3B"],
        ],
      ),
      tip("Earlier than the deadline", "Meera files two days early in case the portal is slow on the due date."),
    ),
    screen(
      "Consequences of missing a deadline",
      table(
        ["Consequence", "What happens"],
        [
          ["Interest", "18% a year on tax paid late in cash"],
          ["Late fee", "₹50 a day (₹20 for nil returns), within caps by turnover"],
          ["Blocked filing", "GSTR-1 can't be filed if earlier GSTR-3Bs are pending"],
          ["E-way bills blocked", "When GSTR-3B is pending for the specified number of periods"],
          ["Customers lose ITC", "Late GSTR-1 means your invoices don't reach their GSTR-2B"],
          ["Time-barred returns", "Returns can't be filed once three years have passed from their due date"],
        ],
      ),
      caution("Continued non-filing can lead to cancellation of registration."),
    ),
    mistakes(
      ["Missing the switch to monthly filing", "Above ₹5 crore, QRMP isn't allowed."],
      ["Waiting for the last day", "File early."],
      ["Filing GSTR-1 late", "Customers' ITC is delayed."],
      ["Ignoring old pending returns", "They become time-barred after three years."],
    ),
    check(
      1,
      q("Who can opt for the QRMP scheme?", ["Registered persons with aggregate turnover up to ₹5 crore", "Anyone", "Only exporters", "Only composition dealers"], 0, "Above ₹5 crore, monthly filing is required."),
      q("When is a monthly filer's GSTR-1 due?", ["11th of the next month", "20th of the next month", "13th of the next month", "Last day of the month"], 0, "GSTR-3B is due on the 20th."),
      q("How do QRMP filers pay tax in the first two months of a quarter?", ["Through PMT-06 by the 25th", "They don't pay until the quarter ends", "Through GSTR-9", "In cash at a bank branch only"], 0, "Monthly payment continues."),
      q("When is GSTR-9 due?", ["31 December after the financial year", "31 March", "30 September", "30 November"], 0, "With GSTR-9C if required."),
      q("What happens to customers if you file GSTR-1 late?", ["Their ITC is delayed because invoices don't reach their GSTR-2B", "Nothing", "They pay your late fee", "Their registration is cancelled"], 0, "ITC depends on your GSTR-1."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Due dates",
          ["Give Saffron Threads' due dates for October 2026's GSTR-1 and GSTR-3B."],
          ["GSTR-1 by 11 November 2026; GSTR-3B by 20 November 2026 (unless extended)."],
        ],
        [
          "Exercise 2 — QRMP",
          ["Nila Prints paid ₹60,000 tax in cash for the April–June quarter. Under the fixed-sum method, what does it pay for July and August, and by when?"],
          ["35% × ₹60,000 = ₹21,000 each month, by 25 August and 25 September, through PMT-06."],
        ],
      ),
    ),
    summary(
      ["What GST compliance covers", "Monthly vs. QRMP filing", "Due dates for GSTR-1, IFF, PMT-06 and GSTR-3B", "Annual return deadlines", "A monthly calendar", "Consequences of missing deadlines"],
      "GST compliance runs on a fixed calendar — build it once, file early, and remember that your customers' ITC depends on your returns.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Registration and Documentation Upkeep",
      ["Returns are only as good as the documents behind them. This module keeps Saffron Threads' registration and documents in order."],
      ["Keep registration details current", "Add places of business and amend core fields", "Issue compliant invoices, credit notes and debit notes", "Apply e-invoicing and generate IRNs", "Generate e-way bills", "Manage invoice series and numbering"],
    ),
    screen(
      "Keeping registration details current",
      table(
        ["Type of field", "Examples", "How it's changed"],
        [
          ["Core fields", "Legal name, principal and additional places of business, partners or directors", "Amendment application approved by the officer"],
          ["Non-core fields", "Contact details, bank account, nature of business", "Amendment takes effect without officer approval"],
        ],
      ),
      p("Changes should be applied for within 15 days of the change. When Saffron Threads opened a new warehouse in Sanganer, Meera filed a core-field amendment to add it as an additional place of business."),
      caution("Goods stored at a place not on the registration can be treated as unaccounted — add warehouses before stock moves in."),
    ),
    screen(
      "Compliant invoices, credit notes and debit notes",
      table(
        ["Document", "When", "Key points"],
        [
          ["Tax invoice", "Each taxable supply", "GSTINs, place of supply, HSN (6 digits above ₹5 crore turnover), value, rate and tax"],
          ["Credit note", "Price reduced, goods returned, or excess charged", "Declare by 30 November after the year, or the annual return date if earlier"],
          ["Debit note", "Price increased or tax under-charged", "Report in the month issued"],
        ],
      ),
      p("A retailer returns fabric worth ₹50,000 + ₹9,000 GST. Saffron Threads issues a credit note for ₹59,000 and reduces its output tax in that month's GSTR-1."),
    ),
    screen(
      "E-invoicing and the IRN",
      steps(
        ["Prepare the invoice", "In the accounting software in the e-invoice schema."],
        ["Report to the IRP", "The Invoice Registration Portal validates it."],
        ["Receive IRN and QR code", "A unique Invoice Reference Number and signed QR code."],
        ["Print or send", "The invoice with the QR code goes to the customer."],
        ["Automatic flow", "Details flow to GSTR-1 and can create the e-way bill."],
      ),
      table(
        ["Rule", "Saffron Threads"],
        [
          ["Who must e-invoice", "Turnover above ₹5 crore in any year since 2017-18 — applies"],
          ["30-day limit", "Turnover ₹10 crore or more — must report within 30 days of the invoice date"],
          ["Which documents", "B2B invoices, credit and debit notes, exports"],
          ["Cancellation", "An IRN can be cancelled within 24 hours on the IRP"],
        ],
      ),
    ),
    screen(
      "E-way bills",
      bullets(
        "Needed for movement of goods with consignment value above ₹50,000 (with some exceptions and State-specific rules).",
        "Part A: invoice, GSTINs, value, HSN. Part B: vehicle number.",
        "Validity for normal cargo: 1 day for every 200 km or part of it.",
        "Can be generated from the e-invoice, so data isn't typed twice.",
      ),
      p("Saffron Threads ships ₹2,40,000 of fabric from Jaipur to Delhi (about 280 km) — the e-way bill is valid for 2 days."),
    ),
    screen(
      "Invoice series and numbering",
      bullets(
        "Consecutive and unique for each financial year.",
        "Up to 16 characters — letters, numbers, hyphen and slash.",
        "Separate series allowed per branch or document type, e.g. ST/26-27/0001 and CN/26-27/0001.",
        "Report the series used in GSTR-1's documents-issued table.",
      ),
      tip("Restart each year", "Start a new series every 1 April so numbers never repeat across years."),
    ),
    mistakes(
      ["New warehouse not registered", "Amend before stock arrives."],
      ["Missing the credit note deadline", "Declare by 30 November or the annual return date."],
      ["B2B invoices without IRN", "Without a valid IRN, the invoice isn't a valid tax invoice for an e-invoicing business."],
      ["Reusing invoice numbers", "Keep each year's series unique."],
    ),
    check(
      2,
      q("Which change needs approval from the GST officer?", ["Adding an additional place of business", "Changing the phone number", "Updating the email address", "Changing the bank account"], 0, "It's a core field."),
      q("What does the IRP return for an e-invoice?", ["An IRN and a signed QR code", "A refund", "A GSTIN", "A PAN"], 0, "Invoice Reference Number."),
      q("Above what consignment value is an e-way bill generally needed?", ["₹50,000", "₹5,000", "₹5 lakh", "₹1 crore"], 0, "Subject to exceptions."),
      q("How long is an e-way bill valid for normal cargo?", ["1 day per 200 km or part", "1 day per 100 km", "7 days always", "30 days"], 0, "Longer journeys get more days."),
      q("What's the maximum length of an invoice number?", ["16 characters", "8 characters", "20 characters", "No limit"], 0, "Consecutive and unique per year."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — E-way bill validity",
          ["Saffron Threads ships goods 650 km to Ahmedabad. How long is the e-way bill valid?"],
          ["650 ÷ 200 = 3.25, so 4 days (each 200 km or part of it)."],
        ],
        [
          "Exercise 2 — 30-day rule",
          ["An invoice dated 2 August 2026 hasn't been reported to the IRP by 5 September. What's the problem?"],
          ["Saffron Threads (turnover ₹10 crore or more) must report within 30 days — the IRP won't accept it after 1 September, so it isn't a valid e-invoice. Investigate how it was missed and correct the process."],
        ],
      ),
    ),
    summary(
      ["Core and non-core registration amendments", "Additional places of business", "Invoices, credit notes and debit notes", "E-invoicing, IRN and the 30-day rule", "E-way bills", "Invoice numbering"],
      "Keep the registration current and every document compliant — returns simply summarise them.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Input Tax Credit Reconciliation",
      ["ITC is Saffron Threads' biggest cash item in GST. This module reconciles August 2026's credit."],
      ["Read GSTR-2A and GSTR-2B", "Accept, reject or keep invoices pending in IMS", "Reconcile the purchase register with GSTR-2B", "Follow up suppliers on missing invoices", "Reverse ineligible or unpaid credit", "Use a monthly ITC checklist"],
    ),
    screen(
      "GSTR-2A and GSTR-2B",
      compare(
        ["GSTR-2A", "Dynamic — updates whenever suppliers file or amend.", ["Useful for tracking suppliers", "Not the basis for claiming"]],
        ["GSTR-2B", "Static monthly statement, generated on the 14th.", ["The basis for ITC in GSTR-3B", "Shows eligible and ineligible credit"]],
      ),
      p("Saffron Threads claims ITC in GSTR-3B based on GSTR-2B, after its own eligibility checks."),
    ),
    screen(
      "The Invoice Management System (IMS)",
      table(
        ["Action", "Effect"],
        [
          ["Accept", "The invoice goes into GSTR-2B as available credit"],
          ["Reject", "It's left out of GSTR-2B; the supplier can correct it"],
          ["Pending", "Held back for a later period (within time limits)"],
          ["No action", "Treated as accepted when GSTR-2B is generated"],
        ],
      ),
      p("Meera rejects an invoice for goods Saffron Threads never ordered, and keeps pending an invoice for fabric still in transit."),
      tip("Recompute GSTR-2B", "If IMS actions change after the 14th, recompute GSTR-2B before filing GSTR-3B."),
    ),
    screen(
      "Reconciling the purchase register with GSTR-2B",
      table(
        ["August 2026", "ITC"],
        [
          ["ITC in the purchase register", "₹4,20,000"],
          ["Less: invoices in books, missing from GSTR-2B (two suppliers)", "(₹30,000)"],
          ["Add: invoice in GSTR-2B, not yet in books (goods in transit)", "₹6,000"],
        ],
        { footer: ["ITC per GSTR-2B", "₹3,96,000"], numeric: [1] },
      ),
      example(
        [["Matched in books and GSTR-2B", "₹3,90,000"], ["Less: blocked credit — staff meals (Section 17(5))", "−₹9,000"]],
        ["ITC claimed in August's GSTR-3B", "₹3,81,000"],
      ),
      p("The ₹6,000 is claimed once the goods arrive; the ₹30,000 once suppliers report the invoices."),
    ),
    screen(
      "Following up with suppliers",
      steps(
        ["List missing invoices", "From the reconciliation — supplier, invoice, ITC."],
        ["Email suppliers", "Ask them to report the invoice in their next GSTR-1 or IFF."],
        ["Track", "Check GSTR-2A weekly for their filings."],
        ["Escalate", "Hold payment of the GST portion for repeat offenders, as agreed in the contract."],
      ),
      note("Saffron Threads' purchase contracts now say that GST will be paid only once the invoice appears in GSTR-2B."),
    ),
    screen(
      "Reversing ineligible or unpaid credit",
      table(
        ["Situation", "Action"],
        [
          ["Blocked credit, e.g. staff food, personal use", "Don't claim, or reverse if claimed"],
          ["Supplier not paid within 180 days of the invoice", "Reverse the ITC with interest; re-claim when paid"],
          ["Supplier hasn't filed GSTR-3B for the period (Rule 37A)", "Reverse by 30 November; re-claim when they file"],
          ["Credit note received from supplier", "Reduce ITC"],
          ["Common credit for exempt supplies", "Reverse the exempt share (Rules 42 and 43)"],
        ],
      ),
    ),
    screen(
      "Monthly ITC checklist",
      bullets(
        "Purchase register complete and checked for duplicates.",
        "IMS actions taken on every invoice; GSTR-2B recomputed if needed.",
        "Reconciliation prepared: matched, missing, extra.",
        "Blocked credits removed.",
        "180-day unpaid invoices identified and reversed.",
        "Supplier follow-up list sent.",
        "Reviewer signs off before GSTR-3B.",
      ),
    ),
    mistakes(
      ["Claiming from GSTR-2A", "Claim from GSTR-2B."],
      ["Leaving IMS untouched", "Unactioned invoices are deemed accepted."],
      ["Claiming blocked credits", "Check Section 17(5)."],
      ["Forgetting the 180-day rule", "Track unpaid invoices."],
    ),
    check(
      3,
      q("Which statement is the basis for claiming ITC in GSTR-3B?", ["GSTR-2B", "GSTR-2A", "GSTR-1", "GSTR-9"], 0, "It's static for the month."),
      q("What happens to an invoice with no action in IMS?", ["It's treated as accepted", "It's rejected", "It's deleted", "It's sent to the officer"], 0, "Deemed acceptance."),
      q("ITC in books ₹2,00,000; ₹15,000 missing from GSTR-2B. Matched credit?", ["₹1,85,000", "₹2,15,000", "₹2,00,000", "₹15,000"], 0, "Claim only matched credit."),
      q("A supplier isn't paid within 180 days of the invoice. What happens to ITC?", ["Reverse it with interest, and re-claim when paid", "Nothing", "It's lost forever", "Double it"], 0, "Rule 37."),
      q("Which credit is blocked under Section 17(5)?", ["Food for staff", "Raw material", "Packing material", "Goods for resale"], 0, "With limited exceptions."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Reconcile",
          ["September: books ₹3,50,000 ITC; GSTR-2B ₹3,62,000. Missing from 2B ₹8,000; in 2B but not in books ₹20,000 (a duplicate invoice uploaded by a supplier). What's claimable?"],
          ["Matched: ₹3,50,000 − ₹8,000 = ₹3,42,000. The ₹20,000 duplicate is rejected in IMS. Claim ₹3,42,000 (less any blocked credit)."],
        ],
        [
          "Exercise 2 — 180 days",
          ["An invoice dated 10 February 2026 with ITC of ₹18,000 is still unpaid in August 2026. What should Meera do?"],
          ["The 180 days have passed — reverse ₹18,000 in GSTR-3B with interest, and re-claim when the supplier is paid."],
        ],
      ),
    ),
    summary(
      ["GSTR-2A vs. GSTR-2B", "IMS actions", "Monthly reconciliation", "Supplier follow-up", "Reversals", "The ITC checklist"],
      "Claim only what's in GSTR-2B, eligible and paid for — and chase suppliers for the rest.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Filing Monthly and Quarterly Returns",
      ["With documents and ITC ready, Meera prepares August 2026's returns for Saffron Threads."],
      ["Prepare GSTR-1 — B2B, B2C, exports and amendments", "Use IFF under QRMP", "Prepare GSTR-3B from GSTR-1 and GSTR-2B data", "Set off liability with ITC and cash", "Pay tax with a PMT-06 challan", "Correct mistakes in later returns"],
    ),
    screen(
      "Preparing GSTR-1",
      table(
        ["Table", "Contents", "Saffron Threads in August"],
        [
          ["B2B", "Invoice-wise supplies to registered persons", "Most sales, from e-invoices"],
          ["B2C (large)", "Inter-state invoices to unregistered persons above ₹1 lakh", "Two invoices"],
          ["B2C (others)", "Summary by State and rate", "Small walk-in sales"],
          ["Exports", "Export invoices, with or without payment of tax", "One shipment to Dubai"],
          ["Credit and debit notes", "Registered and unregistered", "Fabric returns"],
          ["Amendments", "Corrections to earlier periods", "One wrong GSTIN fixed"],
          ["HSN summary and documents issued", "Totals by HSN; invoice series used", "Required"],
        ],
      ),
    ),
    screen(
      "IFF under the QRMP scheme",
      p("Nila Prints' B2B customers want their ITC monthly, not quarterly. Through the Invoice Furnishing Facility (IFF), Nila uploads B2B invoices for July by 13 August and for August by 13 September."),
      bullets(
        "Optional — only for B2B invoices and notes.",
        "Invoices uploaded in IFF aren't repeated in the quarterly GSTR-1.",
        "There's a value limit per month — check the current limit on the portal.",
      ),
    ),
    screen(
      "Preparing GSTR-3B",
      table(
        ["GSTR-3B table", "Source"],
        [
          ["3.1 — Outward supplies and tax", "Auto-populated from GSTR-1 (and GSTR-1A)"],
          ["3.2 — Inter-state supplies to unregistered persons", "From GSTR-1"],
          ["4 — Eligible ITC", "From GSTR-2B, adjusted by the reconciliation"],
          ["4B — ITC reversed", "Blocked, Rule 42/43, 180-day and other reversals"],
          ["6 — Payment of tax", "Set-off and cash"],
        ],
      ),
      caution("The auto-populated output tax liability can't be edited in GSTR-3B. Correct errors through GSTR-1A before filing GSTR-3B, or in the next GSTR-1."),
    ),
    screen(
      "Setting off liability",
      table(
        ["August 2026", "Liability", "ITC used", "Cash"],
        [
          ["IGST", "₹2,40,000", "₹2,01,000", "₹39,000"],
          ["CGST", "₹1,10,000", "₹90,000", "₹20,000"],
          ["SGST", "₹1,10,000", "₹90,000", "₹20,000"],
        ],
        { footer: ["Total", "₹4,60,000", "₹3,81,000", "₹79,000"], numeric: [1, 2, 3] },
      ),
      bullets(
        "IGST credit is used first — against IGST, then CGST and SGST.",
        "CGST credit can't be used against SGST, or SGST against CGST.",
        "Interest and late fees can only be paid in cash.",
      ),
    ),
    screen(
      "Paying through a challan",
      steps(
        ["Create the challan", "PMT-06 on the GST portal, by tax head (IGST, CGST, SGST, cess)."],
        ["Pay", "Net banking, card, UPI, NEFT/RTGS or over the counter at authorised banks."],
        ["Electronic cash ledger", "The payment is credited, identified by the CPIN and CIN."],
        ["Use it in GSTR-3B", "Offset the cash liability and file."],
      ),
      note("If cash is deposited under the wrong head (e.g. CGST instead of IGST), it can be transferred within the cash ledger using PMT-09."),
    ),
    screen(
      "Correcting mistakes in later returns",
      table(
        ["Mistake", "Correction"],
        [
          ["Wrong GSTIN or value in GSTR-1", "Amend in GSTR-1A before GSTR-3B, or in a later GSTR-1 amendment table"],
          ["Sale missed in a month", "Report it in the next return, with interest on the tax"],
          ["ITC missed", "Claim in a later month, within the Section 16(4) time limit"],
          ["Excess ITC claimed", "Reverse in the next GSTR-3B, with interest if used"],
        ],
      ),
      caution("Corrections for a financial year can be made only up to 30 November after the year, or the annual return date if earlier."),
    ),
    mistakes(
      ["Filing GSTR-3B before reviewing GSTR-1", "The liability flows from GSTR-1."],
      ["Using CGST credit against SGST", "Not allowed."],
      ["Paying under the wrong head", "Use PMT-09 to move it."],
      ["Leaving corrections too late", "The 30 November deadline applies."],
    ),
    check(
      4,
      q("Which GSTR-1 table holds invoice-wise supplies to registered customers?", ["B2B", "B2C (others)", "HSN summary", "Exports"], 0, "Business to business."),
      q("What is IFF used for?", ["Uploading B2B invoices monthly under QRMP", "Paying tax", "Filing the annual return", "Claiming refunds"], 0, "So customers get ITC sooner."),
      q("Where does GSTR-3B's output tax come from?", ["GSTR-1 (and GSTR-1A)", "GSTR-2B", "GSTR-9", "The bank statement"], 0, "Auto-populated."),
      q("Can CGST credit be used to pay SGST?", ["No", "Yes", "Only in March", "Only for exporters"], 0, "Cross-utilisation isn't allowed."),
      q("Which form transfers cash between heads in the electronic cash ledger?", ["PMT-09", "PMT-06", "GSTR-9C", "REG-14"], 0, "e.g. CGST to IGST."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Set-off",
          ["September: IGST liability ₹1,80,000, CGST ₹90,000, SGST ₹90,000. ITC: IGST ₹2,10,000, CGST ₹40,000, SGST ₹40,000. How much cash is payable?"],
          ["IGST credit pays IGST ₹1,80,000; the remaining ₹30,000 pays CGST (say ₹15,000) and SGST (₹15,000). CGST: ₹90,000 − ₹15,000 − ₹40,000 = ₹35,000 cash. SGST: ₹35,000 cash. Total cash ₹70,000."],
        ],
        [
          "Exercise 2 — Correction",
          ["Meera notices on 15 September that an August invoice in GSTR-1 shows the wrong GSTIN. GSTR-3B isn't filed yet. What does she do?"],
          ["Correct it through GSTR-1A for August before filing GSTR-3B, so the customer's ITC and the liability are right."],
        ],
      ),
    ),
    summary(
      ["GSTR-1 tables", "IFF for QRMP filers", "GSTR-3B sources and the liability lock", "Set-off rules", "Paying through PMT-06", "Correcting mistakes"],
      "GSTR-1 drives the liability, GSTR-2B drives the credit, and GSTR-3B settles the difference in cash.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Annual Returns, Interest and Late Fees",
      ["At year end, Saffron Threads must reconcile its whole year. This module covers annual returns, interest, late fees and record keeping."],
      ["Prepare GSTR-9", "Know who must file GSTR-9C", "Reconcile books with returns for the year", "Calculate interest on late payment", "Calculate late fees", "Keep records for the required period"],
    ),
    screen(
      "GSTR-9 annual return",
      table(
        ["Part", "Contents"],
        [
          ["Part II", "Outward supplies declared in the year's returns"],
          ["Part III", "ITC availed, reversed and ineligible"],
          ["Part IV", "Tax paid as declared in returns"],
          ["Part V", "Transactions of the year declared in the next year (up to the deadline)"],
          ["Part VI", "Other information — HSN summaries, demands, refunds, late fees"],
        ],
      ),
      p("GSTR-9 summarises what's already been reported — it's a reconciliation, not a chance to rewrite the year. Extra tax found can be paid through DRC-03."),
    ),
    screen(
      "GSTR-9C reconciliation statement",
      p("Taxpayers with aggregate turnover above ₹5 crore file GSTR-9C, a self-certified reconciliation between the audited financial statements and GSTR-9."),
      table(
        ["Reconciliation item", "Saffron Threads FY 2026-27"],
        [
          ["Turnover per audited accounts", "₹12,40,00,000"],
          ["Less: unbilled revenue at year end", "(₹6,00,000)"],
          ["Add: credit notes accounted next year", "₹2,00,000"],
          ["Turnover per GSTR-9", "₹12,36,00,000"],
        ],
        { numeric: [1] },
      ),
    ),
    screen(
      "Reconciling books with returns",
      bullets(
        "Sales register ↔ GSTR-1 ↔ GSTR-3B — month by month.",
        "Purchase register ↔ GSTR-2B ↔ ITC in GSTR-3B.",
        "GST ledgers in the books ↔ electronic cash and credit ledgers.",
        "Turnover in audited accounts ↔ GSTR-9.",
        "Explain every difference, and pay any shortfall with interest.",
      ),
      tip("Do it monthly", "A monthly three-way reconciliation makes the annual return a formality."),
    ),
    screen(
      "Interest on late payment",
      terms(
        ["Late payment of tax — Section 50(1)", "18% a year on tax paid late in cash, from the day after the due date."],
        ["ITC wrongly availed and used", "Interest at the notified rate, currently 18% a year."],
      ),
      p("Saffron Threads pays August's ₹79,000 cash liability 8 days late:"),
      example([["₹79,000 × 18% × 8 ÷ 365", ""]], ["Interest", "≈ ₹312"]),
    ),
    screen(
      "Late fees",
      table(
        ["Return", "Late fee (CGST + SGST)"],
        [
          ["GSTR-1 / GSTR-3B", "₹50 a day (₹20 for nil returns), capped by turnover band"],
          ["GSTR-9 — turnover up to ₹5 crore", "₹50 a day, capped at 0.04% of turnover"],
          ["GSTR-9 — turnover above ₹5 crore up to ₹20 crore", "₹100 a day, capped at 0.04% of turnover"],
          ["GSTR-9 — turnover above ₹20 crore", "₹200 a day, capped at 0.5% of turnover"],
        ],
      ),
      p("Saffron Threads files August's GSTR-3B 8 days late: 8 × ₹50 = ₹400 (₹200 CGST + ₹200 SGST). If its GSTR-9 were 10 days late: 10 × ₹100 = ₹1,000."),
      note("GSTR-9 late fee amounts shown apply from FY 2022-23. Late fees can't be paid from ITC. Confirm current amounts in CBIC notifications."),
    ),
    screen(
      "Books and records",
      bullets(
        "Keep accounts and records at the principal place of business (and copies for each additional place).",
        "Retain them for 72 months from the due date of the annual return for the year.",
        "Records under appeal or investigation are kept until the matter is closed, if later.",
        "Electronic records are allowed, with backups.",
      ),
      p("Saffron Threads' FY 2026-27 records must be kept until at least 31 December 2033 — 72 months after the 31 December 2027 due date."),
    ),
    mistakes(
      ["Treating GSTR-9 as a fresh return", "It summarises the year — reconcile first."],
      ["Ignoring differences in GSTR-9C", "Explain each one."],
      ["Paying late fees from ITC", "Late fees and interest are cash only."],
      ["Discarding records too early", "Keep them 72 months from the annual return due date."],
    ),
    check(
      5,
      q("Who must file GSTR-9C?", ["Taxpayers with aggregate turnover above ₹5 crore", "Everyone", "Only composition taxpayers", "Only exporters"], 0, "Self-certified."),
      q("What rate of interest applies to tax paid late?", ["18% a year", "12% a year", "24% a year", "1% a month"], 0, "Section 50(1)."),
      q("Daily GSTR-3B late fee for a regular (non-nil) return?", ["₹50", "₹20", "₹200", "₹500"], 0, "₹25 CGST + ₹25 SGST."),
      q("How long must GST records be kept?", ["72 months from the due date of the annual return", "3 years", "1 year", "Forever"], 0, "Longer if under appeal."),
      q("How can extra tax found while preparing GSTR-9 be paid?", ["Through DRC-03", "Through GSTR-1", "It can't be paid", "Through PMT-09"], 0, "Voluntary payment."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Interest",
          ["₹1,20,000 of cash tax is paid 15 days late. Calculate interest."],
          ["₹1,20,000 × 18% × 15 ÷ 365 = ₹887.67."],
        ],
        [
          "Exercise 2 — GSTR-9 late fee",
          ["Nila Prints (turnover ₹1.2 crore) files GSTR-9 20 days late. What's the late fee and the cap?"],
          ["If it's required to file: 20 × ₹50 = ₹1,000; cap 0.04% × ₹1.2 crore = ₹4,800. (Below ₹2 crore turnover, GSTR-9 may be optional — check the current exemption.)"],
        ],
      ),
    ),
    summary(
      ["GSTR-9 parts", "GSTR-9C reconciliation", "Annual reconciliations", "Interest at 18%", "Late fees by return and turnover", "72-month record keeping"],
      "The annual return is easy when the year has been reconciled month by month.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Notices, Audits and Assessments",
      ["Even careful businesses receive notices. This module shows Saffron Threads how to respond calmly and on time."],
      ["Recognise common notices and what triggers them", "Respond to scrutiny of returns", "Handle demand notices and replies", "Prepare for departmental audits", "Understand the appeals process", "Build a compliance file that stands up to review"],
    ),
    screen(
      "Common notices and triggers",
      table(
        ["Notice", "Typical trigger"],
        [
          ["ASMT-10 — scrutiny of returns", "Differences between GSTR-1, GSTR-3B and GSTR-2B"],
          ["DRC-01A — pre-show cause intimation", "Officer's ascertained tax before a formal notice"],
          ["DRC-01 — show cause notice summary", "Demand for tax, interest and penalty"],
          ["ADT-01 — audit", "Selection for departmental audit"],
          ["Mismatch alerts", "ITC claimed above GSTR-2B, or liability below GSTR-1"],
        ],
      ),
    ),
    screen(
      "Responding to scrutiny",
      p("Saffron Threads receives an ASMT-10 for FY 2025-26: ITC claimed in GSTR-3B exceeds GSTR-2B by ₹1,40,000."),
      steps(
        ["Read carefully", "Note the period, amount and reply deadline (usually 30 days)."],
        ["Reconcile", "₹1,10,000 relates to invoices in the next year's GSTR-2B (timing); ₹30,000 is a supplier that never filed."],
        ["Reply in ASMT-11", "Explain the timing difference with evidence; pay the ₹30,000 with interest through DRC-03."],
        ["Close", "The officer accepts the reply (ASMT-12) or starts proceedings."],
      ),
    ),
    screen(
      "Demand notices and replies",
      table(
        ["Period", "Provision", "Key points"],
        [
          ["Up to FY 2023-24", "Sections 73 (non-fraud) and 74 (fraud)", "Separate time limits and penalties"],
          ["FY 2024-25 onwards", "Section 74A", "Notice within 42 months of the annual return due date; order within 12 months of the notice"],
        ],
      ),
      bullets(
        "Reply in writing within the time given, with documents.",
        "Ask for a personal hearing.",
        "In non-fraud cases, paying tax and interest early reduces or removes penalty — check the conditions.",
      ),
    ),
    screen(
      "Departmental audits",
      bullets(
        "Notice in ADT-01, usually at least 15 working days in advance.",
        "Officers review books, returns, ITC, invoices and contracts.",
        "Findings are shared; the taxpayer can respond before the final report (ADT-02).",
      ),
      tip("Audit pack", "Meera keeps a ready pack: registration certificate, monthly reconciliations, GSTR-9/9C working, e-way bill and e-invoice registers, and ITC supplier follow-ups."),
    ),
    screen(
      "Appeals — an overview",
      table(
        ["Stage", "Time limit", "Pre-deposit"],
        [
          ["First appeal to the Appellate Authority (APL-01)", "3 months from the order", "Admitted tax, plus 10% of disputed tax (cap ₹20 crore each for CGST and SGST)"],
          ["Appellate Tribunal (GSTAT)", "As notified", "A further 10% of the remaining disputed tax (cap ₹20 crore each)"],
          ["High Court and Supreme Court", "On questions of law", "—"],
        ],
      ),
      note("Pre-deposit rules have changed over time — confirm the current amounts and the GSTAT procedure before filing."),
    ),
    screen(
      "A compliance file that stands up to review",
      bullets(
        "Monthly folder: GSTR-1, GSTR-3B, challans, GSTR-2B and the ITC reconciliation.",
        "Registers: invoices, credit notes, e-invoices, e-way bills.",
        "Evidence: delivery proof, contracts, supplier payments (for the 180-day rule).",
        "Annual: GSTR-9, GSTR-9C working, books-to-returns reconciliation.",
        "Notices: every notice, reply, hearing note and order, with dates.",
      ),
    ),
    mistakes(
      ["Missing reply deadlines", "Diary every notice."],
      ["Replying without reconciling", "Back every point with evidence."],
      ["Paying disputed demands without review", "Check the law and facts first."],
      ["No organised records", "Keep a monthly compliance file."],
    ),
    check(
      6,
      q("Which form is used to notify scrutiny of returns?", ["ASMT-10", "ADT-01", "PMT-06", "REG-14"], 0, "Reply in ASMT-11."),
      q("Which section governs demands for FY 2024-25 onwards?", ["Section 74A", "Section 73 only", "Section 16", "Section 50"], 0, "It replaced 73 and 74 for later years."),
      q("Within what period must a first appeal generally be filed?", ["3 months from the order", "7 days", "5 years", "There's no limit"], 0, "In APL-01."),
      q("Which form starts a departmental audit?", ["ADT-01", "ASMT-10", "DRC-03", "GSTR-9C"], 0, "Notice of audit."),
      q("What's the first-appeal pre-deposit on disputed tax?", ["10%", "25%", "50%", "100%"], 0, "Plus admitted tax."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Time limit",
          ["For FY 2025-26, the annual return is due on 31 December 2026. By when must a Section 74A notice be issued?"],
          ["Within 42 months — by 30 June 2030."],
        ],
        [
          "Exercise 2 — Pre-deposit",
          ["A demand of ₹8,00,000 tax is disputed in full. What pre-deposit is needed for the first appeal?"],
          ["10% × ₹8,00,000 = ₹80,000 (split between the relevant tax heads)."],
        ],
      ),
    ),
    summary(
      ["Common notices and triggers", "Replying to scrutiny", "Demands under Sections 73, 74 and 74A", "Departmental audits", "Appeals and pre-deposits", "The compliance file"],
      "Notices are manageable when every return is reconciled and documented — reply on time, with evidence.",
    ),
  ],
}

export default lessons
