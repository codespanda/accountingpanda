import type { CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const category = { label: "Payroll", href: "/learning/payroll" }

const mod = (n: number, title: string, items: string[]): CourseModule => ({
  title: `Module ${n} — ${title}`,
  sections: [{ items }],
})

/** Course pages for the Payroll category (Indian statutory payroll compliance). */
export const payrollCourseCatalog: CourseDetails[] = [
  {
    slug: "statutory-compliance-epf",
    title: "Statutory Compliance: EPF",
    image: "assets/course-epf.jpg",
    summary:
      "Run Employees' Provident Fund compliance correctly — coverage, the ₹25,000 wage ceiling, contributions, UAN and KYC, monthly ECR filing and claims.",
    intro:
      "Learn how provident fund works for employers in India under the Code on Social Security, 2020 — who must be covered, how wages and contributions are calculated, and how to file and pay every month without penalties.",
    objective:
      "By the end of this course, learners will decide which employees EPF covers, calculate wages and contributions under the current wage ceiling, register the establishment and manage UANs, file the monthly ECR and pay on time, and support employees with claims and transfers.",
    level: "Intermediate",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Introduction to EPF", [
        "What the Employees' Provident Fund Organisation (EPFO) does",
        "The three schemes — EPF, EPS (pension) and EDLI (insurance)",
        "The Code on Social Security, 2020 — in force from 21 November 2025",
        "Which establishments must register",
        "Voluntary coverage",
      ]),
      mod(2, "Coverage, Wages and the Wage Ceiling", [
        "Who counts as an employee for EPF",
        "“Wages” under the Code — and the 50% rule for excluded allowances",
        "Wage ceiling raised from ₹15,000 to ₹25,000 from 17 September 2026",
        "Enrolling employees earning ₹15,000–₹25,000 who were previously outside the fund",
        "Contributing on wages above the ceiling",
        "Excluded employees and international workers",
      ]),
      mod(3, "Calculating Contributions", [
        "Employee contribution — 12% of wages",
        "Employer contribution — 8.33% to EPS and the balance to EPF",
        "10% rate for specified establishments",
        "EDLI contributions and administrative charges",
        "Worked examples at the new ceiling",
        "Handling September 2026 — the ceiling change mid-month",
      ]),
      mod(4, "Registration and Member Management", [
        "Registering an establishment on the EPFO portal",
        "Generating and activating a UAN",
        "Member KYC — Aadhaar, bank account and PAN",
        "Recording joining and exit dates",
        "Transferring accounts between employers",
      ]),
      mod(5, "Monthly ECR Filing and Payment", [
        "Preparing the Electronic Challan cum Return (ECR)",
        "Due date — the 15th of the following month",
        "Paying contributions online",
        "Interest and damages for late payment",
        "Correcting a filed return",
      ]),
      mod(6, "Claims, Records and Inspections", [
        "Employee withdrawals, advances and final settlement",
        "Pension and insurance claims",
        "The employer's role in approving claims",
        "Registers and records to keep",
        "EPFO inspections and notices",
        "Monthly PF compliance checklist",
      ]),
    ],
    assignments: [
      "Decide which employees EPF covers",
      "Calculate PF wages using the 50% rule",
      "Calculate employee and employer contributions",
      "Prepare a monthly ECR",
      "Work out interest and damages on a late payment",
      "Build a PF compliance checklist",
    ],
    exercises:
      "Worked PF calculations and ECR preparation after each module, using salary structures from real payslips.",
    finalExam: "30 questions",
    finalPractical:
      "Run one month of PF compliance for a fictional company — coverage, contributions, the ECR and payment.",
    note:
      "The wage ceiling of ₹25,000 applies from 17 September 2026 (S.O. 5109(E)); periods before that use ₹15,000. Rates, ceilings, due dates and how “wages” are calculated can change through notifications under the Code on Social Security, so always confirm current requirements on the EPFO portal.",
  },
  {
    slug: "statutory-compliance-esi",
    title: "Statutory Compliance: ESI",
    image: "assets/course-esi.jpg",
    summary:
      "Manage Employees' State Insurance compliance — coverage, the ₹21,000 wage ceiling, contributions, registration, monthly filing, benefits and records.",
    intro:
      "Learn how Employees' State Insurance works for employers in India under the Code on Social Security, 2020 — who is covered, how contributions are calculated, and how to register, file and keep records correctly.",
    objective:
      "By the end of this course, learners will identify establishments and employees covered by ESI, calculate contributions using the wage ceiling and contribution periods, register employees, file and pay monthly contributions, and handle benefit claims and inspections.",
    level: "Intermediate",
    duration: "3 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Introduction to ESI", [
        "What the Employees' State Insurance Corporation (ESIC) does",
        "Benefits — medical, sickness, maternity, disablement and dependants",
        "The Code on Social Security, 2020 — in force from 21 November 2025",
        "Which establishments must register",
        "Implemented areas",
      ]),
      mod(2, "Coverage and the Wage Ceiling", [
        "Who counts as an employee for ESI",
        "Wage ceiling — ₹21,000 a month (₹25,000 for employees with a disability)",
        "“Wages” under the Code — and the 50% rule",
        "Employees who become newly covered under the Code's wage definition",
        "Contribution periods — April to September and October to March",
        "Employees whose wages cross the ceiling mid-period",
      ]),
      mod(3, "Calculating Contributions", [
        "Employer contribution — 3.25% of wages",
        "Employee contribution — 0.75% of wages",
        "Low-wage employees exempt from the employee share",
        "Rounding rules",
        "Worked examples",
      ]),
      mod(4, "Registration and Employee Enrolment", [
        "Registering an employer on the ESIC portal",
        "Registering employees and generating the Insurance Number",
        "Family details and the e-Pehchan card",
        "Registering new joiners on time",
        "Recording exits",
      ]),
      mod(5, "Monthly Contributions and Filing", [
        "Filing monthly contributions online",
        "Paying through the ESIC portal",
        "Due dates — checking the current ESIC circular",
        "Interest and damages for late payment",
        "Correcting contribution errors",
      ]),
      mod(6, "Benefits, Claims, Records and Inspections", [
        "Reporting workplace accidents",
        "Supporting sickness and maternity claims",
        "Registers and records to keep",
        "ESIC inspections and notices",
        "Monthly ESI compliance checklist",
      ]),
    ],
    assignments: [
      "Decide which employees ESI covers",
      "Calculate ESI wages using the 50% rule",
      "Calculate employer and employee contributions",
      "Apply contribution periods to a mid-period pay rise",
      "Prepare monthly contribution data",
      "Build an ESI compliance checklist",
    ],
    exercises:
      "Worked coverage and contribution scenarios after each module, including employees near the wage ceiling.",
    finalExam: "30 questions",
    finalPractical:
      "Run one contribution period of ESI compliance for a fictional company — coverage, monthly contributions and records.",
    note:
      "The ESI wage ceiling of ₹21,000 has applied since 2017, and the contribution rates since July 2019. A higher ceiling has been discussed but not notified. Ceilings, rates and due dates can change by notification under the Code on Social Security, so always confirm current requirements on the ESIC portal.",
  },
  {
    slug: "statutory-compliance-professional-tax",
    title: "Statutory Compliance: Professional Tax",
    image: "assets/course-professional-tax.jpg",
    summary:
      "Handle professional tax across Indian states — who must register, state slabs, monthly deductions, payments, returns and multi-state payroll.",
    intro:
      "Professional tax is set by each state, so the rules change as soon as a business has staff in more than one place. Learn how it works, how to register, and how to deduct, pay and file correctly in each state.",
    objective:
      "By the end of this course, learners will identify where professional tax applies, register the business correctly, apply the right state slabs to each employee, pay and file on time, and manage professional tax for employees across several states.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "What Professional Tax Is", [
        "A state tax on professions, trades and employment",
        "Constitutional basis and the ₹2,500 annual cap",
        "Who pays — employees, professionals and businesses",
        "States that levy professional tax and states that don't",
      ]),
      mod(2, "Registration", [
        "Employer registration to deduct from salaries",
        "Enrolment for the business itself and for professionals",
        "Registering in each state where you have staff",
        "Amending and cancelling registrations",
      ]),
      mod(3, "State Slabs and Deductions", [
        "How monthly slabs work",
        "The February adjustment in some states",
        "Exemptions — senior citizens, people with disabilities and others",
        "Worked examples — Maharashtra, Karnataka and West Bengal",
        "Half-yearly assessment in Tamil Nadu",
        "Finding the current slabs on each state's portal",
      ]),
      mod(4, "Payment and Returns", [
        "Monthly, quarterly and annual payment cycles",
        "Due dates and how they differ between states",
        "Paying online through state portals",
        "Filing professional tax returns",
      ]),
      mod(5, "Penalties and Corrections", [
        "Interest on late payment",
        "Penalties for late registration and filing",
        "Correcting under- or over-deduction",
        "Refunds of excess payments",
      ]),
      mod(6, "Multi-State Payroll and Records", [
        "Setting up professional tax in payroll software",
        "Employees who move between states",
        "Showing professional tax on payslips and the annual salary certificate",
        "Annual reconciliation",
        "Professional tax compliance checklist",
      ]),
    ],
    assignments: [
      "Check whether professional tax applies in a list of states",
      "Calculate monthly deductions using state slabs",
      "Apply the February adjustment",
      "Plan registrations for a multi-state employer",
      "Reconcile a year of professional tax deductions",
    ],
    exercises:
      "Worked deduction examples for different states after each module.",
    finalExam: "25 questions",
    finalPractical:
      "Set up and run one month of professional tax for a fictional company with employees in three states.",
    note:
      "Professional tax slabs, exemptions and due dates are set by each state and change from time to time. The examples in this course are for learning only — always confirm the current rules on the relevant state's tax portal.",
  },
]
