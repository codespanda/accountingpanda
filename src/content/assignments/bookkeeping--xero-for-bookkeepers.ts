import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Xero for Bookkeepers — Saltbush Design Co's
// December in Xero, with Australian GST.

const assignment: PracticalAssignment = {
  title: "Keep Saltbush Design's December books in Xero",
  period: "December 2026",
  intro:
    "Record Saltbush Design Co's December sales and spending in Xero, reconcile the bank, and work out the GST figures for its quarterly BAS.",
  context: [
    p("Saltbush Design Co is an Australian business registered for GST (10%). Amounts are in Australian dollars."),
    table(
      ["December transaction", "Amount", "GST treatment"],
      [
        ["Invoice INV-031 to Red Gum Cafe", "$4,000 + GST", "GST on income"],
        ["Invoice INV-032 to Coast Physio", "$2,500 + GST", "GST on income"],
        ["Invoice INV-033 to Banksia Studio", "$1,500 + GST", "GST on income"],
        ["Design software subscription", "$330 including GST", "GST on expenses"],
        ["Office rent", "$2,200 including GST", "GST on expenses"],
        ["Bank fees", "$15", "GST-free"],
        ["Wages", "$3,000", "BAS excluded"],
      ],
    ),
    bullets(
      "Red Gum Cafe and Coast Physio paid in full in December; Banksia Studio hasn't paid.",
      "Saltbush accounts for GST on an accrual basis.",
    ),
    note("For BAS: G1 = total sales including GST; 1A = GST on sales; 1B = GST on purchases."),
  ],
  tasks: [
    num("What is the GST on December's sales (BAS label 1A)?", 800, "10% × ($4,000 + $2,500 + $1,500) = $800.", { prefix: "$" }),
    num("What is the total of December's sales including GST (BAS label G1)?", 8800, "$8,000 + $800 = $8,800.", { prefix: "$" }),
    num("What are December's GST credits on purchases (BAS label 1B)?", 230, "Software $330 ÷ 11 = $30 + rent $2,200 ÷ 11 = $200 = $230. Bank fees are GST-free; wages are BAS excluded.", { prefix: "$" }),
    num("What is the net GST payable for December?", 570, "$800 − $230 = $570.", { prefix: "$" }),
    num("How much did Saltbush receive from customers in December?", 7150, "Red Gum $4,400 + Coast Physio $2,750 = $7,150.", { prefix: "$" }),
    num("What is still owed by Banksia Studio?", 1650, "$1,500 + $150 GST = $1,650.", { prefix: "$" }),
    pick("Which Xero tax rate should the bank fee use?", "GST Free Expenses", ["GST on Expenses", "BAS Excluded", "GST on Income"], "Bank fees are input-taxed / GST-free in Xero's setup for most banks — no GST credit."),
    num("What is December's net profit (amounts excluding GST)?", 2685, "Income $8,000 − software $300 − rent $2,000 − bank fees $15 − wages $3,000 = $2,685.", { prefix: "$" }),
    pick("When is the October–December quarterly BAS generally due if Saltbush lodges itself?", "28 February 2027", ["21 January 2027", "31 March 2027", "28 December 2026"], "The December quarter BAS is due on 28 February (ATO)."),
  ],
  references: [
    ref("Australian Taxation Office — GST", "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst"),
    ref("Australian Taxation Office — Due dates for lodging and paying your BAS", "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas/due-dates-for-lodging-and-paying-your-bas", "December quarter due 28 February"),
    ref("Xero Central — help and guides", "https://central.xero.com"),
  ],
}

export default assignment
