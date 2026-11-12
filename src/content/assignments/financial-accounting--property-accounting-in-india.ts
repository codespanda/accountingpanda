import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Property Accounting in India — Vrindavan Realty's
// November 2026 property transactions.

const assignment: PracticalAssignment = {
  title: "Account for Vrindavan Realty's November 2026",
  period: "November 2026",
  intro:
    "Kavita is closing Vrindavan Realty's November 2026 books. Work out RERA deposits, GST and TDS on flat sales, the office rent, the progress on a second project and the month's depreciation.",
  context: [
    p("Vrindavan follows Ind AS. Lotus Heights (Pune) recognises revenue on possession; a second project, Orchid Court, meets the over-time criteria and measures progress by cost."),
    table(
      ["November activity", "Amount"],
      [
        ["Collections from Lotus Heights buyers (excluding GST)", "₹8,40,00,000"],
        ["Instalment from a buyer of a ₹1.1 crore, 110 sq m flat (excluding GST)", "₹50,00,000"],
        ["New booking: ₹42 lakh flat with 58 sq m carpet area", "₹42,00,000"],
        ["Sale of a completed flat after the completion certificate", "₹95,00,000"],
        ["Monthly rent from the IT company for the 3rd floor (excluding GST)", "₹3,20,000"],
      ],
    ),
    bullets(
      "Orchid Court: cost incurred to date ₹54 crore of ₹90 crore estimated (excluding land); flats sold ₹120 crore.",
      "The 3rd-floor building component costs ₹18 crore, with a useful life of 60 years.",
      "Interest of ₹45 lakh was incurred this month on the Lotus Heights construction loan.",
    ),
    note("Answer under the Ind AS, RERA, GST and TDS rules covered in the course."),
  ],
  tasks: [
    num("How much must go into the Lotus Heights RERA designated account?", 58800000, "70% × ₹8,40,00,000 = ₹5,88,00,000.", { prefix: "₹" }),
    num("What GST applies to the ₹50 lakh instalment on the 110 sq m flat?", 250000, "Not affordable (over 90 sq m and ₹45 lakh): 5% × ₹50,00,000 = ₹2,50,000.", { prefix: "₹" }),
    num("What GST applies to the ₹42 lakh affordable flat?", 42000, "Within ₹45 lakh and 90 sq m outside metros: 1% × ₹42,00,000 = ₹42,000.", { prefix: "₹" }),
    num("What GST applies to the completed flat sold after the completion certificate?", 0, "Sale of completed property is outside GST.", { prefix: "₹", tolerance: 0 }),
    num("What TDS does the buyer of the ₹1.1 crore flat deduct over the full price?", 110000, "1% × ₹1,10,00,000 = ₹1,10,000.", { prefix: "₹" }),
    num("What GST is charged on the month's office rent?", 57600, "18% × ₹3,20,000 = ₹57,600.", { prefix: "₹" }),
    num("What TDS does the IT company deduct from the rent?", 32000, "10% × ₹3,20,000 = ₹32,000.", { prefix: "₹" }),
    num("How much rent reaches Vrindavan's bank account?", 345600, "₹3,20,000 + ₹57,600 − ₹32,000 = ₹3,45,600.", { prefix: "₹" }),
    num("What is Orchid Court's percentage of completion?", 60, "₹54 crore ÷ ₹90 crore = 60%.", { suffix: "%", tolerance: 0 }),
    num("What revenue should Orchid Court have recognised to date?", 720000000, "60% × ₹120 crore = ₹72 crore.", { prefix: "₹" }),
    num("What is the month's depreciation on the 3rd-floor building?", 250000, "₹18 crore ÷ 60 ÷ 12 = ₹2,50,000.", { prefix: "₹" }),
    pick("How should the ₹45 lakh construction loan interest be treated?", "Capitalised into Lotus Heights inventory under Ind AS 23", ["Expensed as finance cost", "Charged to buyers", "Deducted from the RERA account"], "Borrowing costs on a qualifying asset during construction."),
  ],
  references: [
    ref("India Code — Real Estate (Regulation and Development) Act, 2016", "https://www.indiacode.nic.in", "Section 4 — the 70% account"),
    ref("MahaRERA — Maharashtra Real Estate Regulatory Authority", "https://maharera.maharashtra.gov.in", "Project registration and compliance"),
    ref("CBIC — GST rates for services", "https://cbic-gst.gov.in/gst-goods-services-rates.html", "Construction of residential apartments"),
    ref("Income Tax Department — Income-tax Act, 2025", "https://www.incometaxindia.gov.in", "TDS on property and rent"),
    ref("Ministry of Corporate Affairs — Indian Accounting Standards", "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/accounting-standards.html", "Ind AS 2, 23, 40 and 115"),
  ],
}

export default assignment
