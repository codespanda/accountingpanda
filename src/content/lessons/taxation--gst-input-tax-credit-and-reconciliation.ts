import type { CourseLessons } from "@/lib/lessonTypes"
import {
  bullets,
  caution,
  check,
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

// GST Input Tax Credit & Reconciliation — lesson screens by module index
// (0 = Module 1). The course follows Vardhan Healthcare Distributors Pvt Ltd,
// headquartered in Hyderabad with branches in Bengaluru and Vijayawada,
// through FY 2026-27. Amounts are illustrative.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Conditions for Claiming ITC — Section 16",
      ["Input tax credit (ITC) is only available when every condition is met. This module tests Vardhan Healthcare's purchases against Section 16."],
      ["Hold a tax invoice or debit note", "Check the supplier's details are in GSTR-1 and GSTR-2B", "Confirm receipt of goods or services, including bill-to ship-to", "Understand that the supplier must pay the tax", "File your own GSTR-3B", "Apply the rules for goods in lots and depreciation on tax"],
    ),
    screen(
      "Meet Vardhan Healthcare",
      p("Vardhan Healthcare Distributors Pvt Ltd distributes medicines and medical devices. Its head office is in Hyderabad (Telangana), with branches in Bengaluru (Karnataka) and Vijayawada (Andhra Pradesh) — each with its own GSTIN."),
      table(
        ["Fact", "ITC relevance"],
        [
          ["About 600 suppliers", "Heavy monthly reconciliation"],
          ["Imports of devices", "IGST credit on imports"],
          ["Shared head-office services", "Input Service Distributor (ISD) rules"],
          ["Company cars, staff events", "Blocked credits"],
        ],
      ),
      p("Lakshmi, the GST manager, claims about ₹12 lakh of ITC each month."),
    ),
    screen(
      "The Section 16 conditions",
      table(
        ["Condition", "In practice"],
        [
          ["Possession of a tax invoice or debit note", "A valid invoice with Vardhan's GSTIN"],
          ["Supplier has furnished it in GSTR-1, and it's in GSTR-2B", "Check the monthly GSTR-2B"],
          ["Goods or services received", "GRN, e-way bill, service confirmation"],
          ["Tax actually paid to the government by the supplier", "Supplier has filed GSTR-3B"],
          ["Recipient has filed its own return", "Vardhan files GSTR-3B"],
          ["Within the time limit", "Section 16(4) — Module 5"],
        ],
      ),
      caution("All conditions must be met. A perfect invoice is worthless for ITC if the supplier doesn't report it."),
    ),
    screen(
      "Receipt — including bill-to ship-to",
      p("A Hyderabad hospital orders devices from Vardhan; Vardhan buys them from a Pune manufacturer and asks it to ship directly to the hospital."),
      bullets(
        "The manufacturer bills Vardhan (bill-to) but ships to the hospital (ship-to).",
        "Vardhan is treated as having received the goods when the hospital receives them on its direction.",
        "Vardhan can claim the ITC, with proof of delivery to the hospital.",
      ),
    ),
    screen(
      "Tax paid by the supplier, and your own return",
      bullets(
        "If a supplier collects GST but doesn't pay it, the recipient's ITC is at risk.",
        "Vardhan tracks suppliers' GSTR-3B filing status and holds back the GST portion for non-filers.",
        "ITC is claimed only through Vardhan's own GSTR-3B.",
      ),
      tip("Vendor rating", "Lakshmi rates suppliers on GST compliance. Repeat non-filers are replaced."),
    ),
    screen(
      "Goods in lots, and depreciation on tax",
      terms(
        ["Goods received in lots", "When one invoice covers goods delivered in several lots, ITC is available on receipt of the last lot."],
        ["Depreciation on the tax component", "If depreciation is claimed on the GST portion of an asset's cost under income tax, ITC on that GST isn't allowed."],
      ),
      p("A cold-storage unit invoiced for ₹10,00,000 + ₹1,80,000 GST arrives in three lots — ITC of ₹1,80,000 is claimed when the third lot arrives."),
    ),
    mistakes(
      ["Claiming on invoice alone", "Check every condition."],
      ["No proof of delivery for bill-to ship-to", "Keep the third party's acknowledgement."],
      ["Claiming before the last lot", "Wait for final receipt."],
      ["Capitalising GST and claiming ITC", "Choose one."],
    ),
    check(
      1,
      q("Which statement must show the invoice before ITC is claimed?", ["GSTR-2B", "GSTR-9", "Form 168", "The purchase order"], 0, "From the supplier's GSTR-1."),
      q("In a bill-to ship-to supply, who is treated as receiving the goods?", ["The person on whose direction they're delivered", "The transporter", "Nobody", "The ship-to party only"], 0, "The bill-to recipient."),
      q("When is ITC available on goods received in lots?", ["On receipt of the last lot", "On the first lot", "On payment", "At year end"], 0, "Section 16."),
      q("If depreciation is claimed on the GST component, ITC on that GST is:", ["Not allowed", "Allowed in full", "Allowed at 50%", "Allowed next year"], 0, "No double benefit."),
      q("Whose return must be filed for ITC?", ["The recipient's own GSTR-3B", "Only the supplier's", "The transporter's", "None"], 0, "And the supplier's."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Conditions",
          ["Vardhan has an invoice and received the goods, but the supplier hasn't filed GSTR-1. Can it claim ITC this month?"],
          ["No — the invoice won't appear in GSTR-2B. Claim it when the supplier reports it (within the time limit)."],
        ],
        [
          "Exercise 2 — Lots",
          ["A ₹5,00,000 + ₹90,000 GST order arrives in two lots in October and November. When is the ₹90,000 claimed?"],
          ["In November, when the last lot is received (if the other conditions are met)."],
        ],
      ),
    ),
    summary(
      ["Invoice or debit note", "GSTR-1 and GSTR-2B", "Receipt, including bill-to ship-to", "Tax paid by the supplier", "Your own GSTR-3B", "Lots and depreciation"],
      "ITC needs every Section 16 condition — documents, reporting, receipt, payment by the supplier and your own return.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Blocked and Restricted Credits",
      ["Some credits are blocked by law even when all conditions are met. This module applies Section 17(5) and the apportionment rules to Vardhan."],
      ["Identify Section 17(5) blocked credits", "Apply the rules for works contracts and construction", "Understand the 2025 “plant and machinery” amendment", "Reverse common credit for exempt supplies — rules 42 and 43", "Apply the Input Service Distributor rules from 1 April 2025"],
    ),
    screen(
      "Section 17(5) — blocked credits",
      table(
        ["Blocked (with limited exceptions)", "Vardhan example"],
        [
          ["Motor vehicles for transporting people (up to 13 seats), unless used for specified purposes", "Directors' cars"],
          ["Food and beverages, outdoor catering, beauty treatment, health services", "Staff lunch at the annual meeting"],
          ["Membership of clubs and fitness centres", "Managers' club memberships"],
          ["Rent-a-cab, life and health insurance (unless obligatory under law)", "Cab hire for directors"],
          ["Travel benefits to employees on vacation", "Staff holiday package"],
          ["Goods lost, stolen, destroyed, written off, or given as free samples or gifts", "Diwali gifts to staff; expired stock destroyed"],
        ],
      ),
    ),
    screen(
      "Works contracts and construction",
      bullets(
        "ITC on works contract services for constructing immovable property is blocked — except for plant and machinery, or where the recipient supplies further works contract services.",
        "ITC on goods or services used to construct immovable property on your own account is blocked, even if capitalised.",
        "Vardhan's new Hyderabad warehouse: GST on the building's construction is blocked; GST on racking and cold-storage machinery is allowed.",
      ),
    ),
    screen(
      "“Plant and machinery” — the 2025 amendment",
      p("The block on own-account construction refers to “plant or machinery”. After a Supreme Court ruling suggested some buildings could count as a “plant” based on their function, the Finance Act, 2025 amended the wording to “plant and machinery”, retrospectively from 1 July 2017."),
      bullets(
        "“Plant and machinery” means apparatus, equipment and machinery fixed to earth by a foundation or structural support.",
        "Land, buildings and other civil structures are excluded.",
        "So buildings — even ones essential to the business — don't qualify for ITC.",
      ),
      caution("Retrospective changes can affect earlier years' claims. Review any credit taken on buildings in the past."),
    ),
    screen(
      "Common credit — rules 42 and 43",
      p("Where inputs or input services are used for both taxable and exempt supplies, ITC attributable to exempt supplies must be reversed."),
      example(
        [["Common ITC for the month", "₹1,00,000"], ["Exempt turnover ÷ total turnover: ₹20 lakh ÷ ₹1 crore", "20%"]],
        ["ITC to reverse (rule 42)", "₹20,000"],
      ),
      bullets(
        "Rule 42 covers inputs and input services; rule 43 covers capital goods.",
        "Calculate monthly, then finalise for the year by 30 September after the year end.",
      ),
      note("Vardhan's supplies are all taxable, so rules 42 and 43 don't apply to it — but a sister company with exempt sales must reverse."),
    ),
    screen(
      "Input Service Distributor (ISD) — from 1 April 2025",
      p("From 1 April 2025, a business must register as an ISD to distribute common input services (including those under reverse charge) used by its distinct GSTINs."),
      table(
        ["October 2026 — common services at Hyderabad HO", "Turnover", "ITC distributed"],
        [
          ["Hyderabad (Telangana)", "₹8 crore", "₹1,60,000"],
          ["Bengaluru (Karnataka)", "₹5 crore", "₹1,00,000"],
          ["Vijayawada (Andhra Pradesh)", "₹2 crore", "₹40,000"],
        ],
        { footer: ["Total ITC — audit, software, legal", "₹15 crore", "₹3,00,000"], numeric: [1, 2] },
      ),
      p("The ISD files GSTR-6 monthly and issues ISD invoices. Credit goes as IGST to branches in other States and as CGST and SGST to the same-State unit."),
    ),
    mistakes(
      ["Claiming ITC on directors' cars", "Blocked unless used for specified purposes."],
      ["Claiming GST on building construction", "Blocked — even after the court ruling, the law was amended."],
      ["Not reversing for exempt supplies", "Apply rules 42 and 43."],
      ["Allocating HO services without ISD", "Register as an ISD from April 2025."],
    ),
    check(
      2,
      q("Which credit is blocked under Section 17(5)?", ["Membership of a club", "Raw materials", "Packing materials", "Freight inward for goods for sale"], 0, "Personal-type benefits are blocked."),
      q("Is ITC available on cold-storage machinery fixed to a foundation?", ["Yes — it's plant and machinery", "No, never", "Only 50%", "Only for exporters"], 0, "Buildings are excluded, machinery isn't."),
      q("What did the 2025 amendment change “plant or machinery” to?", ["“Plant and machinery”", "“Any building”", "“Capital goods”", "Nothing"], 0, "Retrospectively from 1 July 2017."),
      q("Which rule covers reversal of common credit on inputs and input services?", ["Rule 42", "Rule 37", "Rule 37A", "Rule 88D"], 0, "Rule 43 covers capital goods."),
      q("Which return does an ISD file?", ["GSTR-6", "GSTR-1", "GSTR-9C", "GSTR-4"], 0, "Monthly."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Blocked or not?",
          ["Classify: (a) GST on a delivery van for medicines, (b) GST on a director's sedan, (c) GST on staff Diwali gifts."],
          ["(a) Allowed — goods transport vehicles aren't blocked. (b) Blocked. (c) Blocked — gifts."],
        ],
        [
          "Exercise 2 — ISD",
          ["November common ITC is ₹4,50,000; turnovers are the same as October. Distribute it."],
          ["Hyderabad 8/15 = ₹2,40,000; Bengaluru 5/15 = ₹1,50,000; Vijayawada 2/15 = ₹60,000."],
        ],
      ),
    ),
    summary(
      ["Section 17(5) blocked credits", "Works contracts and construction", "The 2025 plant and machinery amendment", "Rules 42 and 43", "ISD rules from April 2025"],
      "Meeting Section 16 isn't enough — check Section 17(5), reverse for exempt use, and distribute shared credit through an ISD.",
    ),
  ],
  2: [
    overview(
      "Module 3 — The Invoice Management System (IMS)",
      ["IMS lets Vardhan act on each supplier record before its GSTR-2B is final. This module works through October 2026's IMS dashboard."],
      ["Accept, reject or keep records pending", "Understand that no action means deemed acceptance", "Recompute GSTR-2B before filing GSTR-3B", "Handle credit notes and declare ITC to reverse", "Add remarks and work with suppliers"],
    ),
    screen(
      "Accept, reject or pending",
      table(
        ["Action", "Effect on Vardhan", "Effect on supplier"],
        [
          ["Accept", "ITC included in GSTR-2B", "No change"],
          ["Reject", "Excluded from GSTR-2B", "The supplier sees the rejection and can correct or amend"],
          ["Pending", "Held back to a later period", "No change yet"],
        ],
      ),
      p("In October, Lakshmi accepts 1,140 invoices, rejects 3 (a duplicate, a wrong GSTIN and goods never ordered) and keeps 5 pending (goods in transit)."),
    ),
    screen(
      "No action means accepted",
      bullets(
        "Records with no action when GSTR-2B is generated are treated as accepted.",
        "So unchecked invoices — including wrong ones — can flow straight into ITC.",
        "Lakshmi reviews every record above ₹10,000 individually and samples the rest.",
      ),
      caution("Deemed acceptance of a wrong invoice can mean claiming ineligible ITC, with interest later."),
    ),
    screen(
      "Recomputing GSTR-2B",
      steps(
        ["14th", "GSTR-2B is generated using IMS actions so far."],
        ["After the 14th", "If Lakshmi changes IMS actions, she recomputes GSTR-2B."],
        ["Before GSTR-3B", "The recomputed GSTR-2B flows into the ITC tables."],
        ["After filing", "Actions can't change that month's GSTR-2B any more."],
      ),
    ),
    screen(
      "Credit notes and ITC reversal",
      p("A supplier issues a credit note for ₹50,000 + ₹9,000 GST for short-expiry stock Vardhan returned."),
      bullets(
        "Accepting the credit note reduces Vardhan's ITC by ₹9,000 in GSTR-2B.",
        "If Vardhan had never claimed ITC on the original invoice, it can declare a lower reversal amount — as allowed by the IMS functionality.",
        "Credit notes can be kept pending while a dispute is resolved, within the allowed period.",
      ),
      note("IMS features are updated regularly through GSTN advisories. Check the latest options on the portal."),
    ),
    screen(
      "Remarks and working with suppliers",
      table(
        ["Problem", "Lakshmi's action"],
        [
          ["Duplicate invoice uploaded", "Reject with remark: “Duplicate of INV-2241”"],
          ["Wrong GSTIN (branch instead of HO)", "Reject: “Bill to 36AAACV1234F1Z5”"],
          ["Amount differs from the purchase order", "Pending, and email the supplier"],
          ["Goods never ordered", "Reject and alert the purchasing team"],
        ],
      ),
      tip("Clear remarks", "Short, specific remarks help suppliers fix records quickly in their next GSTR-1 or GSTR-1A."),
    ),
    mistakes(
      ["Ignoring IMS", "No action means acceptance."],
      ["Rejecting valid invoices by mistake", "The ITC is lost for that month."],
      ["Not recomputing GSTR-2B", "Late IMS changes won't count."],
      ["Accepting credit notes without checking original ITC", "Declare the correct reversal."],
    ),
    check(
      3,
      q("What happens to an IMS record with no action?", ["It's deemed accepted", "It's deemed rejected", "It's deleted", "It's sent to the officer"], 0, "When GSTR-2B is generated."),
      q("What does rejecting a record do?", ["Excludes it from GSTR-2B and lets the supplier correct it", "Cancels the supplier's registration", "Claims double ITC", "Nothing"], 0, "The supplier sees it."),
      q("When should GSTR-2B be recomputed?", ["After changing IMS actions post-generation, before filing GSTR-3B", "Never", "After filing GSTR-3B", "Only annually"], 0, "To reflect late actions."),
      q("Accepting a supplier's credit note generally:", ["Reduces the recipient's ITC", "Increases ITC", "Has no effect", "Cancels the invoice series"], 0, "Unless ITC wasn't originally claimed."),
      q("Which action suits goods still in transit?", ["Pending", "Reject", "Accept", "Delete"], 0, "Claim on receipt."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — IMS decisions",
          ["Decide: (a) a correct invoice for goods received, (b) an invoice billed to the Bengaluru branch's GSTIN, (c) an invoice for goods arriving next week."],
          ["(a) Accept. (b) Reject with a remark — Bengaluru should receive it, or the supplier corrects it. (c) Pending."],
        ],
        [
          "Exercise 2 — Credit note",
          ["Vardhan never claimed the ₹18,000 ITC on an invoice (it was blocked). The supplier issues a credit note reducing GST by ₹18,000. What should Lakshmi declare?"],
          ["That no ITC (or the correct lower amount) needs to be reversed, because none was claimed."],
        ],
      ),
    ),
    summary(
      ["Accept, reject and pending", "Deemed acceptance", "Recomputing GSTR-2B", "Credit notes and reversal amounts", "Remarks and supplier follow-up"],
      "IMS puts the recipient in control — act on every record, because silence means acceptance.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Monthly ITC Reconciliation",
      ["This module reconciles Vardhan's October 2026 purchase register with GSTR-2B and decides what to claim."],
      ["Match the purchase register with GSTR-2B", "Handle missing, mismatched and duplicate invoices", "Claim reverse charge and import credits", "Follow up suppliers who haven't filed", "Build a monthly reconciliation workbook"],
    ),
    screen(
      "Matching books with GSTR-2B",
      table(
        ["October 2026", "Purchase register", "GSTR-2B"],
        [
          ["Matched (including import IGST of ₹1,00,000)", "₹11,60,000", "₹11,60,000"],
          ["In books, missing from GSTR-2B", "₹80,000", "—"],
          ["In GSTR-2B, not in books", "—", "₹50,000"],
        ],
        { footer: ["Total ITC", "₹12,40,000", "₹12,10,000"], numeric: [1, 2] },
      ),
      tip("Match on GSTIN, invoice number and tax", "Lakshmi matches by supplier GSTIN, invoice number (ignoring prefixes and leading zeros) and tax amount."),
    ),
    screen(
      "Missing, mismatched and duplicate invoices",
      table(
        ["Item", "Amount", "Action"],
        [
          ["Supplier filed GSTR-1 after the cut-off", "₹50,000", "Will appear in November GSTR-2B — claim then"],
          ["Supplier hasn't filed", "₹30,000", "Follow up; hold the GST portion of payment"],
          ["Duplicate invoice in GSTR-2B", "₹20,000", "Rejected in IMS"],
          ["Goods in transit", "₹30,000", "Pending in IMS; claim on receipt"],
        ],
      ),
    ),
    screen(
      "Reverse charge and imports",
      terms(
        ["Reverse charge (RCM)", "Vardhan pays GST in cash on legal services from an advocate, then claims the ITC in the same GSTR-3B — ₹18,000 this month. RCM credit from unregistered suppliers doesn't appear in GSTR-2B, so it's reported from Vardhan's own records."],
        ["Import of goods", "IGST paid at customs appears in GSTR-2B from ICEGATE data — match it to the bill of entry."],
      ),
      note("Keep the RCM liability and ITC aligned — the portal tracks RCM liability against RCM credit claimed."),
    ),
    screen(
      "What Vardhan claims",
      example(
        [
          ["Matched ITC", "₹11,60,000"],
          ["Less: blocked — directors' cab hire (₹14,000) and staff gifts (₹6,000)", "−₹20,000"],
          ["Add: RCM ITC on legal services", "₹18,000"],
        ],
        ["ITC claimed in October GSTR-3B", "₹11,58,000"],
      ),
    ),
    screen(
      "Following up suppliers who haven't filed",
      steps(
        ["Weekly list", "Suppliers missing from GSTR-2A/2B, with invoice and amount."],
        ["Email and call", "Ask them to file GSTR-1 (or IFF) and GSTR-3B."],
        ["Hold GST", "Pay the taxable value; release the GST once the invoice appears."],
        ["Escalate", "Replace persistent non-filers."],
      ),
    ),
    screen(
      "A monthly reconciliation workbook",
      table(
        ["Sheet", "Contents"],
        [
          ["Books", "Purchase register export"],
          ["GSTR-2B", "Downloaded from the portal"],
          ["Match", "XLOOKUP or Power Query merge on GSTIN + invoice"],
          ["Exceptions", "Missing, extra, amount differences"],
          ["Blocked and reversals", "Section 17(5), rule 42/43, 180-day items"],
          ["Summary", "Claimable ITC and the GSTR-3B figures"],
          ["Carry forward", "Items to claim in later months"],
        ],
      ),
    ),
    mistakes(
      ["Matching on invoice number only", "Include GSTIN and tax."],
      ["Forgetting RCM credit", "Claim it after paying RCM tax."],
      ["Losing track of carried-forward items", "Keep a carry-forward sheet."],
      ["Paying non-filing suppliers in full", "Hold the GST."],
    ),
    check(
      4,
      q("Purchase register ₹5,00,000 ITC; ₹40,000 missing from GSTR-2B. What's matched?", ["₹4,60,000", "₹5,40,000", "₹5,00,000", "₹40,000"], 0, "Claim matched credit."),
      q("When can ITC on RCM tax be claimed?", ["After paying the RCM tax in cash, in the same return", "Never", "Only next year", "From GSTR-2B only"], 0, "Pay first."),
      q("Where does import IGST data come from in GSTR-2B?", ["ICEGATE", "The supplier's GSTR-1", "Form 168", "GSTR-6"], 0, "Customs data."),
      q("What should be done about an invoice the supplier reported after the cut-off?", ["Claim it in the month it appears in GSTR-2B", "Claim it now anyway", "Forget it", "Reject it"], 0, "Within time limits."),
      q("Which key should reconciliations match on?", ["Supplier GSTIN, invoice number and tax amount", "Invoice date only", "Supplier name only", "Amount only"], 0, "Reliable matching."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — November claim",
          ["In November, matched ITC is ₹11,00,000, the ₹50,000 late invoice appears, the ₹30,000 in-transit goods arrive, blocked credits are ₹12,000 and RCM ITC is ₹9,000. What does Vardhan claim?"],
          ["If the late invoice and the in-transit invoice are included in matched ITC: ₹11,00,000 − ₹12,000 + ₹9,000 = ₹10,97,000. (Check they're in November's GSTR-2B rather than adding them twice.)"],
        ],
        [
          "Exercise 2 — Matching",
          ["Books show invoice “INV/0042” and GSTR-2B shows “42” from the same supplier GSTIN with the same tax. Match?"],
          ["Yes — normalise invoice numbers by removing prefixes and leading zeros before matching."],
        ],
      ),
    ),
    summary(
      ["Matching books and GSTR-2B", "Missing, mismatched and duplicate items", "RCM and import credits", "Supplier follow-up", "The reconciliation workbook"],
      "Reconcile every month, claim only matched and eligible credit, and track everything carried forward.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Reversals, Re-claims and Time Limits",
      ["Some credit must be reversed and re-claimed later, and all credit has a deadline. This module covers Vardhan's reversals and time limits."],
      ["Apply the 180-day rule for unpaid suppliers", "Re-claim credit once payment is made", "Apply rule 37A when a supplier hasn't filed GSTR-3B", "Meet the Section 16(4) deadline", "Calculate interest on credit wrongly availed and used"],
    ),
    screen(
      "The 180-day rule (rule 37)",
      p("If the recipient doesn't pay the supplier (value plus tax) within 180 days of the invoice date, the ITC must be reversed."),
      table(
        ["Example", "Detail"],
        [
          ["Invoice date", "15 March 2026"],
          ["ITC claimed", "₹45,000 in March 2026's GSTR-3B"],
          ["180 days end", "11 September 2026 — still unpaid"],
          ["Action", "Reverse ₹45,000 in September 2026's GSTR-3B, with interest where applicable"],
        ],
      ),
      note("Deemed values (e.g. supplies between related persons without consideration) and some reverse charge cases are excluded."),
    ),
    screen(
      "Re-claiming once paid",
      p("Vardhan pays the supplier in full on 5 December 2026."),
      bullets(
        "The ₹45,000 can be re-claimed in December 2026's GSTR-3B.",
        "The time limit in Section 16(4) doesn't apply to this re-claim.",
        "Keep the payment proof with the reversal and re-claim workings.",
      ),
      tip("Partial payment", "If only part is paid, re-claim proportionately."),
    ),
    screen(
      "Rule 37A — supplier hasn't filed GSTR-3B",
      p("If a supplier furnished the invoice in GSTR-1 but hasn't filed GSTR-3B for that period by 30 September of the following year, the recipient must reverse the ITC by 30 November."),
      table(
        ["Example", "Detail"],
        [
          ["Invoice in FY 2025-26, ITC", "₹30,000"],
          ["Supplier's GSTR-3B still pending on 30 September 2026", "Rule 37A applies"],
          ["Reverse by", "30 November 2026, with interest if used"],
          ["Re-claim", "When the supplier files the GSTR-3B"],
        ],
      ),
    ),
    screen(
      "The Section 16(4) deadline",
      p("ITC on an invoice or debit note must be claimed by 30 November after the end of the financial year it relates to, or the date of filing the annual return, whichever is earlier."),
      table(
        ["Invoice date", "Last date to claim"],
        [
          ["15 January 2027 (FY 2026-27)", "30 November 2027, or the GSTR-9 filing date if earlier"],
          ["10 May 2026 (FY 2026-27)", "Same — the deadline depends on the financial year"],
        ],
      ),
      caution("Credit carried forward in the reconciliation must be claimed before this date or it's lost."),
    ),
    screen(
      "Interest on credit wrongly availed and used",
      p("Interest at 18% a year applies when ITC is wrongly availed and also utilised — not just availed."),
      bullets(
        "ITC counts as utilised when the electronic credit ledger balance falls below the wrongly availed amount.",
        "Interest runs from the date of utilisation to the date of reversal.",
      ),
      example([["Wrongly availed ITC used", "₹40,000"], ["Days until reversal", "60"]], ["Interest: ₹40,000 × 18% × 60 ÷ 365", "≈ ₹1,184"]),
    ),
    mistakes(
      ["Forgetting the 180-day rule", "Track unpaid invoices by age."],
      ["Not re-claiming after payment", "Credit is recoverable."],
      ["Missing rule 37A checks in September", "Review suppliers' GSTR-3B status."],
      ["Claiming after 30 November", "Credit is time-barred."],
    ),
    check(
      5,
      q("Within how many days must suppliers be paid to keep ITC?", ["180", "90", "365", "30"], 0, "From the invoice date."),
      q("When can reversed 180-day ITC be re-claimed?", ["When the supplier is paid", "Never", "After 5 years", "Only in GSTR-9"], 0, "Section 16(4) doesn't apply to the re-claim."),
      q("Under rule 37A, by when must ITC be reversed?", ["30 November", "30 September", "31 March", "31 December"], 0, "If the supplier's GSTR-3B is still pending on 30 September."),
      q("What's the Section 16(4) deadline?", ["30 November after the year, or the annual return date if earlier", "31 March", "Any time", "31 December"], 0, "For the financial year of the invoice."),
      q("When does interest at 18% apply to wrong ITC?", ["When it's availed and utilised", "When it's only availed", "Never", "Only for exporters"], 0, "Section 50(3)."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — 180 days",
          ["An invoice dated 1 June 2026 with ITC of ₹27,000 is unpaid on 28 November 2026. Is reversal due?"],
          ["Yes — 180 days end on 28 November 2026. Reverse ₹27,000 in November's GSTR-3B (with interest where applicable); re-claim when paid."],
        ],
        [
          "Exercise 2 — Deadline",
          ["Vardhan files its FY 2026-27 GSTR-9 on 20 October 2027. Until when can it claim FY 2026-27 ITC?"],
          ["20 October 2027 — the annual return date is earlier than 30 November 2027."],
        ],
      ),
    ),
    summary(
      ["The 180-day rule", "Re-claiming after payment", "Rule 37A", "The Section 16(4) deadline", "Interest on wrongly availed and used ITC"],
      "Track supplier payments and filings, reverse when required, re-claim when you can — and never miss 30 November.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Annual Reconciliation and Notices",
      ["At year end, Vardhan reconciles its ITC for FY 2026-27, reports it in the annual return and prepares for notices."],
      ["Reconcile ITC in books, GSTR-3B and GSTR-2B for the year", "Report ITC in GSTR-9 and GSTR-9C", "Reply to common ITC mismatch notices", "Keep documents for every credit", "Use an ITC year-end checklist"],
    ),
    screen(
      "Annual three-way reconciliation",
      table(
        ["FY 2026-27", "Amount"],
        [
          ["ITC in books", "₹1,48,60,000"],
          ["ITC claimed in GSTR-3B", "₹1,46,20,000"],
          ["ITC in GSTR-2B", "₹1,47,80,000"],
        ],
        { numeric: [1] },
      ),
      bullets(
        "Books vs. GSTR-3B: ₹2,40,000 — blocked credits and items not yet in GSTR-2B.",
        "GSTR-2B vs. GSTR-3B: ₹1,60,000 — rejected/blocked items and RCM differences.",
        "Every difference is explained in a schedule with invoice-level detail.",
      ),
    ),
    screen(
      "ITC in GSTR-9 and GSTR-9C",
      table(
        ["GSTR-9 table", "Contents"],
        [
          ["Table 6", "ITC availed during the year, by type — inputs, capital goods, services, imports, RCM, ISD"],
          ["Table 7", "ITC reversed and ineligible"],
          ["Table 8", "ITC as per GSTR-2B compared with ITC availed"],
          ["Table 13", "ITC for the year availed in the next year (up to the deadline)"],
        ],
      ),
      note("GSTR-9C's ITC reconciliation tables have been optional in recent years. Check the current instructions for each year."),
    ),
    screen(
      "Common ITC notices and replies",
      table(
        ["Notice", "Trigger", "Reply"],
        [
          ["DRC-01C", "ITC in GSTR-3B exceeds GSTR-2B beyond the prescribed limit", "Explain or pay the excess, in Part B, within the time allowed"],
          ["ASMT-10", "Scrutiny of returns — ITC mismatches", "ASMT-11 with reconciliation and documents"],
          ["Rule 37A/180-day queries", "Unpaid suppliers or non-filing suppliers", "Payment proofs, reversal details"],
          ["Show cause notice", "Disputed ITC after scrutiny or audit", "Detailed written reply and hearing"],
        ],
      ),
      tip("Answer with data", "A clean invoice-level reconciliation answers most ITC notices."),
    ),
    screen(
      "Documents to keep for every credit",
      bullets(
        "Tax invoice or debit note, and any credit notes.",
        "Proof of receipt — goods received note, e-way bill, transport receipt, or service confirmation.",
        "Proof of payment to the supplier (for the 180-day rule).",
        "GSTR-2B for the month and IMS action log.",
        "Reconciliation workings, blocked-credit and reversal schedules.",
        "For imports: bill of entry; for ISD: ISD invoices.",
      ),
      p("Keep them for 72 months from the due date of the annual return — longer if a dispute is open."),
    ),
    screen(
      "ITC year-end checklist",
      bullets(
        "All carried-forward ITC claimed before 30 November (or the annual return date).",
        "Rule 37A review completed in September.",
        "180-day unpaid invoices reversed; paid ones re-claimed.",
        "Rules 42/43 final reversal calculated (if applicable).",
        "ISD distribution reconciled to GSTR-6.",
        "Books, GSTR-3B and GSTR-2B reconciled for the year.",
        "GSTR-9 Tables 6, 7, 8 and 13 prepared from the reconciliation.",
      ),
    ),
    mistakes(
      ["Leaving reconciliation to year end", "Reconcile monthly."],
      ["Unexplained GSTR-9 Table 8 differences", "Explain each one."],
      ["Ignoring DRC-01C", "Reply within the time allowed or ITC use can be restricted."],
      ["Missing proof of receipt", "Keep GRNs and e-way bills."],
    ),
    check(
      6,
      q("Which GSTR-9 table compares ITC in GSTR-2B with ITC availed?", ["Table 8", "Table 6", "Table 4", "Table 17"], 0, "Differences need explaining."),
      q("Which notice is issued when GSTR-3B ITC exceeds GSTR-2B beyond the limit?", ["DRC-01C", "REG-17", "PMT-09", "ADT-01"], 0, "Reply in Part B."),
      q("Which document proves goods were received?", ["Goods received note or e-way bill", "A sales invoice", "A bank statement only", "GSTR-1"], 0, "Proof of receipt."),
      q("Where is ITC for the year availed in the next year reported?", ["GSTR-9 Table 13", "GSTR-9 Table 6", "GSTR-1", "GSTR-6"], 0, "Up to the deadline."),
      q("How long must ITC documents be kept?", ["72 months from the annual return due date", "1 year", "3 years", "Until payment"], 0, "Longer if disputed."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Explain the gap",
          ["Books show ₹1,48,60,000 ITC and GSTR-3B ₹1,46,20,000. List likely reasons for the ₹2,40,000 difference."],
          ["Blocked credits recorded in books, invoices not yet in GSTR-2B (carried forward), goods in transit, and rejected duplicates."],
        ],
        [
          "Exercise 2 — Notice reply",
          ["A DRC-01C says Vardhan's October ITC exceeded GSTR-2B by ₹18,000. What's the likely explanation?"],
          ["Check the reconciliation. If an invoice was claimed before it appeared in GSTR-2B, the claim was premature — pay or reverse the ₹18,000 (with interest if it was used) and re-claim it when it appears. If the difference is a data or reporting error, explain it in Part B with evidence."],
        ],
      ),
    ),
    summary(
      ["Annual three-way reconciliation", "GSTR-9 Tables 6, 7, 8 and 13", "DRC-01C and other ITC notices", "Documents for every credit", "The ITC year-end checklist"],
      "Annual ITC reporting and notices are easy when every month is reconciled and every credit is documented.",
    ),
  ],
}

export default lessons
