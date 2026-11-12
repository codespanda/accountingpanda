import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Australia Accounting — Gumtree Print Studio's
// January–March 2027 quarter and BAS.

const assignment: PracticalAssignment = {
  title: "Prepare Gumtree's March 2027 quarter BAS",
  period: "January – March 2027",
  intro:
    "Liam is closing Gumtree Print Studio's January–March 2027 quarter. Work out GST, complete the BAS figures, check super under Payday Super, and record the quarter's asset purchase and dividend.",
  context: [
    p("Gumtree Print Studio Pty Ltd is a base rate entity (company tax 25%), registered for GST on the accrual basis, lodging quarterly."),
    table(
      ["Quarter activity", "Amount"],
      [
        ["Taxable sales to Australian customers (excluding GST)", "$105,000"],
        ["Signs exported to New Zealand", "$6,000"],
        ["Business purchases with tax invoices (including GST)", "$46,200"],
        ["Interest earned on the business bank account", "$350"],
        ["Gross wages (W1), including $3,000 overtime", "$51,000"],
        ["PAYG withheld from wages", "$10,400"],
        ["PAYG instalment for the quarter", "$4,500"],
      ],
    ),
    bullets(
      "The purchases include a laminator bought on 10 February for $14,300 including GST.",
      "Assume an instant asset write-off threshold of $20,000 per asset applies for the year.",
      "On 31 March Gumtree paid a fully franked dividend of $9,000.",
    ),
    note("Answer under the GST, PAYG, super and company tax rules covered in the course."),
  ],
  tasks: [
    num("What is the GST on Australian sales (label 1A)?", 10500, "$105,000 × 10% = $10,500.", { prefix: "$" }),
    num("What is total sales including GST (label G1)?", 121850, "$115,500 (taxable sales including GST) + $6,000 exports + $350 input-taxed interest (also shown at G4) = $121,850.", { prefix: "$" }),
    num("What are the GST credits on purchases (label 1B)?", 4200, "$46,200 ÷ 11 = $4,200.", { prefix: "$" }),
    num("What is the net GST payable?", 6300, "$10,500 − $4,200 = $6,300.", { prefix: "$" }),
    num("What is the total amount payable on the BAS?", 21200, "$6,300 + $10,400 + $4,500 = $21,200.", { prefix: "$" }),
    pick("By when must the BAS be lodged and paid?", "28 April 2027", ["21 April 2027", "31 March 2027", "28 July 2027"], "The January–March quarter is due 28 April."),
    pick("How is the $350 interest treated for GST?", "Input-taxed — no GST and no related credits", ["Taxable at 10%", "GST-free", "Reported at 1A"], "It's a financial supply."),
    num("What super guarantee is due on the quarter's qualifying earnings?", 5760, "Qualifying earnings = $51,000 − $3,000 overtime = $48,000 × 12% = $5,760.", { prefix: "$" }),
    pick("When must each pay run's super reach the funds?", "Within 7 business days after each payday", ["By 28 April 2027", "By 30 June 2027", "Within 28 days after the quarter"], "Payday Super applies from 1 July 2026."),
    num("What is the laminator's cost for depreciation, excluding GST?", 13000, "$14,300 ÷ 11 = $1,300 GST; cost $13,000.", { prefix: "$" }),
    num("How much of the laminator can be deducted for tax this year?", 13000, "It costs less than the $20,000 threshold, so it's written off immediately.", { prefix: "$" }),
    num("What franking credit attaches to the $9,000 dividend?", 3000, "$9,000 × 25/75 = $3,000.", { prefix: "$" }),
  ],
  references: [
    ref("ATO — Registering for GST", "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst", "$75,000 threshold"),
    ref("ATO — Due dates for lodging and paying your BAS", "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas/due-dates-for-lodging-and-paying-your-bas"),
    ref("ATO — Payment deadlines for Payday Super", "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-on-payday/payment-deadlines-for-payday-super", "7 business days after payday, from 1 July 2026"),
    ref("ATO — Changes to company tax rates", "https://www.ato.gov.au/tax-rates-and-codes/company-tax-rates", "25% base rate entities"),
    ref("AASB — Australian Accounting Standards Board", "https://www.aasb.gov.au"),
  ],
}

export default assignment
