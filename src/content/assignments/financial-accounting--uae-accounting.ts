import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for UAE Accounting — Falcon Trading's December 2026
// quarter VAT return and 2026 Corporate Tax.

const assignment: PracticalAssignment = {
  title: "Close Falcon Trading's December 2026 quarter and year",
  period: "October – December 2026",
  intro:
    "Aisha is preparing Falcon Trading LLC's VAT return for October–December 2026 and its Corporate Tax estimate for the 2026 calendar year, and checking Falcon Logistics FZE's free zone status.",
  context: [
    p("Falcon Trading LLC is a mainland Dubai company with revenue of about AED 5 million, filing VAT quarterly. All amounts exclude VAT unless stated."),
    table(
      ["October–December 2026", "AED"],
      [
        ["Standard-rated furniture sales in Dubai", "1,240,000"],
        ["Furniture exported to a customer in Oman", "180,000"],
        ["Standard-rated purchases with tax invoices (includes 20,000 client entertainment)", "760,000"],
        ["Cloud software services bought from an Irish supplier", "30,000"],
      ],
    ),
    bullets(
      "Aisha found that the July–September return understated output VAT by AED 4,000.",
      "Falcon Trading's 2026 IFRS net profit is AED 1,150,000, after client entertainment of AED 80,000 and traffic fines of AED 6,000.",
      "Falcon Logistics FZE's 2026 revenue is AED 2,500,000, of which AED 150,000 is from mainland customers (non-qualifying).",
    ),
    note("Answer under the VAT and Corporate Tax rules covered in the course."),
  ],
  tasks: [
    num("What output VAT is due on the standard-rated sales?", 62000, "AED 1,240,000 × 5% = AED 62,000.", { prefix: "AED " }),
    num("How much input VAT on purchases is recoverable?", 37000, "Entertainment VAT is blocked: (760,000 − 20,000) × 5% = AED 37,000.", { prefix: "AED " }),
    num("What reverse charge VAT applies to the software services?", 1500, "AED 30,000 × 5% = AED 1,500, reported as output and recovered as input.", { prefix: "AED " }),
    pick("How should Aisha correct the AED 4,000 error?", "Include it in the October–December return", ["File a voluntary disclosure", "Ignore it", "Wait for an FTA audit"], "Errors of AED 10,000 or less can be corrected in the next return."),
    num("What is the net VAT payable for the quarter, including the correction?", 29000, "Output 62,000 + 1,500 + 4,000 − input 37,000 − 1,500 = AED 29,000.", { prefix: "AED " }),
    pick("By when must the return be filed and the VAT paid?", "28 January 2027", ["31 December 2026", "31 January 2027", "28 February 2027"], "28 days after the tax period ends."),
    num("What is Falcon Trading's 2026 taxable income?", 1196000, "1,150,000 + 50% of 80,000 entertainment (40,000) + fines 6,000 = AED 1,196,000.", { prefix: "AED " }),
    num("What is Falcon Trading's 2026 Corporate Tax?", 73890, "9% × (1,196,000 − 375,000) = AED 73,890.", { prefix: "AED " }),
    pick("Can Falcon Trading elect small business relief for 2026?", "No — its revenue is above AED 3 million", ["Yes", "Only for half the year", "Only if it files late"], "The relief is for revenue of AED 3 million or less."),
    pick("By when must Falcon Trading's 2026 Corporate Tax return be filed and paid?", "30 September 2027", ["31 March 2027", "28 January 2027", "31 December 2027"], "Within 9 months of the period end."),
    num("What is Falcon Logistics' de minimis limit for non-qualifying revenue in 2026?", 125000, "Lower of 5% × 2,500,000 = AED 125,000 and AED 5 million.", { prefix: "AED " }),
    pick("What happens to Falcon Logistics' QFZP status?", "It's lost for 2026 and the next four tax periods", ["Nothing — it's under AED 5 million", "It's lost only for 2026", "It pays 5% instead"], "AED 150,000 exceeds the AED 125,000 limit."),
    pick("From when must Falcon Trading issue e-invoices?", "1 July 2027", ["1 January 2027", "1 July 2026", "1 October 2027"], "Revenue below AED 50 million — Phase 2."),
  ],
  references: [
    ref("Federal Tax Authority — VAT", "https://tax.gov.ae/en/taxes/Vat.aspx", "Registration, returns and voluntary disclosures"),
    ref("Federal Tax Authority — Corporate Tax", "https://tax.gov.ae/en/taxes/corporate.tax.aspx", "Rates, small business relief and free zone persons"),
    ref("UAE Ministry of Finance — Corporate Tax", "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/", "Law and decisions"),
    ref("UAE Ministry of Finance — Accreditation of eInvoicing Service Providers", "https://mof.gov.ae/en/services/accreditation-of-einvoicing-service-providers/", "The UAE eInvoicing system and accredited providers"),
  ],
}

export default assignment
