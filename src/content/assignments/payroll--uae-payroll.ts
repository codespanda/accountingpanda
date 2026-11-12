import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for UAE Payroll — Al Noor Interiors' November 2026
// payroll and John's final settlement.

const assignment: PracticalAssignment = {
  title: "Run Al Noor's November 2026 payroll",
  period: "November 2026",
  intro:
    "Fatima is preparing Al Noor Interiors' November 2026 payroll for WPS, calculating overtime, pension contributions and gratuity accruals, and settling John's end of service.",
  context: [
    p("Al Noor is a mainland Dubai employer with 40 workers. Under the WPS rules, salaries are due on the 1st of the following month. Use daily basic = monthly basic × 12 ÷ 365 and hourly basic = daily basic ÷ 8."),
    table(
      ["Employee", "Basic", "Allowances", "November"],
      [
        ["Rahul", "AED 7,300", "AED 3,500", "8 hours' normal overtime; 4 hours' overtime between 10 pm and 2 am"],
        ["Mariam (UAE national, joined GPSSA in 2024)", "AED 12,000", "AED 6,000", "Contribution salary AED 18,000"],
        ["John", "AED 18,250", "AED 8,000", "Leaves on 30 November after exactly 7 years; 12 days' unused leave"],
      ],
    ),
    bullets(
      "Rahul has asked for a salary advance to be recovered in full from his November pay.",
      "Rahul has 2 years' service and no unpaid leave.",
    ),
    note("Answer under the UAE Labour Law, Cabinet Resolution No. 1 of 2022 and the GPSSA rules covered in the course."),
  ],
  tasks: [
    num("What is Rahul's hourly basic wage?", 30, "AED 7,300 × 12 ÷ 365 = AED 240 a day ÷ 8 = AED 30.", { prefix: "AED " }),
    num("What is Rahul's pay for 8 hours' normal overtime?", 300, "AED 30 × 1.25 = AED 37.50 × 8 = AED 300.", { prefix: "AED " }),
    num("What is Rahul's pay for 4 hours' night overtime?", 180, "AED 30 × 1.5 = AED 45 × 4 = AED 180.", { prefix: "AED " }),
    num("What is Rahul's gross pay for November?", 11280, "AED 10,800 + 300 + 180 = AED 11,280.", { prefix: "AED " }),
    num("What is the most that can be deducted from Rahul's November wage?", 5640, "Generally 50% × AED 11,280 = AED 5,640.", { prefix: "AED " }),
    num("What pension contribution is deducted from Mariam's salary?", 1980, "11% × AED 18,000 = AED 1,980.", { prefix: "AED " }),
    num("What does Al Noor pay as employer for Mariam's pension, after the government share?", 2250, "15% × 18,000 = 2,700 less the government's 2.5% (AED 450) = AED 2,250.", { prefix: "AED " }),
    num("What is Mariam's net salary?", 16020, "AED 18,000 − 1,980 = AED 16,020 — there's no income tax.", { prefix: "AED " }),
    num("What is the monthly gratuity accrual for Rahul?", 420, "21 days × AED 240 = AED 5,040 a year ÷ 12 = AED 420.", { prefix: "AED " }),
    num("What is John's end-of-service gratuity?", 99000, "Daily basic AED 600: (5 × 21 + 2 × 30) = 165 days × AED 600 = AED 99,000.", { prefix: "AED " }),
    num("What is John's leave encashment?", 7200, "12 days × AED 600 basic = AED 7,200.", { prefix: "AED " }),
    pick("When are November salaries due through WPS?", "On 1 December 2026, with at least 85% paid on time", ["By 16 December 2026", "By 31 December 2026", "By 15 January 2027"], "Ministerial Resolution No. 340 of 2026."),
    pick("By when must John's gratuity and other dues be paid?", "Within 14 days of 30 November 2026", ["Within 60 days", "At the end of the year", "When the visa is cancelled"], "Labour Law."),
  ],
  references: [
    ref("UAE Government portal — Working hours and overtime", "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/working-hours", "+25% and +50% on basic"),
    ref("UAE Government portal — Payment of salaries (WPS)", "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/payment-of-wages", "Ministerial Resolution No. 340 of 2026"),
    ref("UAE Government portal — Types of leaves", "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/Types-of-leaves"),
    ref("UAE Government portal — End of service benefits", "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector", "21 and 30 days; paid within 14 days"),
    ref("GPSSA — How contributions are calculated", "https://gpssa.gov.ae/pages/en/media-center/news/gpssa-explains-how-contributions-are-calculated-accordance-applicable-law", "11%, 15% and the 2.5% government share"),
  ],
}

export default assignment
