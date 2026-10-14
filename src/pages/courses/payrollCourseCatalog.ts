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
    slug: "payroll-processing-in-india",
    title: "Payroll Processing in India",
    image: "assets/course-payroll-processing.jpg",
    summary:
      "Run a complete monthly payroll in India — salary structure, attendance inputs, statutory deductions, salary TDS, payslips, payments, filings, accounting and full and final settlement.",
    intro:
      "Bring every piece of Indian payroll together into one monthly cycle — from setting up salary structures and collecting inputs to calculating deductions and tax, paying employees, filing statutory returns and closing the books.",
    objective:
      "By the end of this course, learners will design compliant salary structures, process a full monthly payroll with EPF, ESI, professional tax, LWF and salary TDS, issue payslips and pay on time, meet each statutory payment and filing deadline, record payroll in the books, and handle joiners, leavers and year-end tasks.",
    level: "Intermediate",
    duration: "4 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Payroll Foundations", [
        "What a payroll cycle covers, from inputs to filings",
        "Employee master data, documents and onboarding",
        "Pay periods and payroll calendars",
        "The Labour Codes and other laws that shape payroll",
        "Choosing payroll software or outsourcing",
      ]),
      mod(2, "Salary Structure and CTC", [
        "Cost to company — fixed pay, variable pay and employer costs",
        "Basic pay, HRA and common allowances",
        "“Wages” under the Labour Codes — the 50% rule and why it matters",
        "Reimbursements and benefits",
        "Designing structures that meet minimum wage and Code requirements",
      ]),
      mod(3, "Monthly Inputs and Gross Pay", [
        "Attendance, leave and loss of pay",
        "Overtime, arrears and bonuses",
        "Joiners, leavers and pro-rata pay",
        "Calculating gross pay",
        "Pre-payroll checks and approvals",
      ]),
      mod(4, "Statutory Deductions and Salary TDS", [
        "EPF and ESI deductions and employer contributions",
        "Professional tax and Labour Welfare Fund by state",
        "Salary TDS — the default new tax regime and opting for the old regime",
        "Standard deduction of ₹75,000 and no tax up to ₹12 lakh of income under the new regime",
        "Employee investment declarations and proofs",
        "Calculating net pay",
      ]),
      mod(5, "Payslips, Payment and Filings", [
        "Payslips and what they must show",
        "Paying salaries — by the 7th of the following month for monthly wages",
        "Statutory payment calendar — TDS by the 7th, EPF and ESI by the 15th, PT and LWF by state",
        "Monthly and quarterly returns — ECR, ESI, Form 138 and state returns",
        "Payroll journal entries and reconciliations",
      ]),
      mod(6, "Exits and Year-End", [
        "Full and final settlement — within two working days of leaving",
        "Leave encashment, gratuity and bonus at exit",
        "Form 130 annual salary certificates",
        "Year-end reconciliation of salary, TDS and statutory contributions",
        "Payroll audit and monthly checklist",
      ]),
    ],
    assignments: [
      "Design a salary structure that meets the 50% wages rule",
      "Process one month of payroll for ten employees",
      "Calculate salary TDS under the new and old regimes",
      "Build a statutory payment and filing calendar",
      "Record payroll journal entries",
      "Prepare a full and final settlement",
    ],
    exercises:
      "A running case study — the same fictional company's payroll, built up step by step through each module.",
    finalExam: "40 questions",
    finalPractical:
      "Run a complete month of payroll for a fictional 25-employee company — inputs, deductions, TDS, payslips, payments, filings and accounting.",
    note:
      "Payroll draws on many laws that change often — tax slabs and deductions in each year's Finance Act, contribution ceilings under the Code on Social Security, and state rules for professional tax and LWF. The figures in this course reflect tax year 2026–27 and current notifications; always confirm current rates with the Income Tax Department, EPFO, ESIC and state authorities.",
  },
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
        "Due date — within 15 days of the end of the month",
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
  {
    slug: "statutory-compliance-gratuity",
    title: "Statutory Compliance: Gratuity",
    image: "assets/course-gratuity.jpg",
    summary:
      "Get gratuity right under the Code on Social Security — eligibility, fixed-term employees, wages, the calculation, the ceiling, payment, tax and provisioning.",
    intro:
      "Gratuity rewards long service, and since the Code on Social Security, 2020 replaced the Payment of Gratuity Act, the rules on who qualifies and how wages are counted have changed. Learn how to calculate, pay, provide for and record it correctly.",
    objective:
      "By the end of this course, learners will decide when an employee is entitled to gratuity, calculate it using the Code's definition of wages, apply the statutory ceiling, pay it on time, explain its tax treatment, and account for the employer's gratuity liability.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Gratuity and the Code on Social Security", [
        "What gratuity is and why it exists",
        "From the Payment of Gratuity Act, 1972 to Chapter V of the Code on Social Security, 2020",
        "The Code in force from 21 November 2025",
        "Which establishments it applies to",
        "Employer obligations at a glance",
      ]),
      mod(2, "Eligibility", [
        "Five years of continuous service for regular employees",
        "Death or disablement — no minimum service needed",
        "Fixed-term employees — pro-rata gratuity after one year",
        "What counts as continuous service",
        "Resignation, retirement, termination and forfeiture",
      ]),
      mod(3, "Calculating Gratuity", [
        "“Wages” for gratuity — and the 50% rule for excluded allowances",
        "The formula — 15 days' wages for each completed year of service",
        "Rounding part-years of service",
        "Seasonal and piece-rated employees",
        "Worked examples for regular and fixed-term employees",
      ]),
      mod(4, "The Ceiling, Payment and Nomination", [
        "The maximum gratuity — as notified by the Central Government under the Code",
        "₹20 lakh — the limit last notified (2018) and the tax-free limit",
        "Paying more than the ceiling under a contract or policy",
        "Paying within 30 days of gratuity becoming payable, and interest on delay",
        "Nominations and paying nominees or legal heirs",
        "Disputes and the role of the controlling authority",
      ]),
      mod(5, "Tax Treatment", [
        "When gratuity is tax-exempt and how much",
        "Government vs. private-sector employees",
        "Gratuity above the exempt limit",
        "Showing gratuity on the salary certificate",
      ]),
      mod(6, "Funding, Provisioning and Accounting", [
        "Funding through an approved gratuity trust or group insurance",
        "Actuarial valuation of the gratuity liability",
        "Accounting under AS 15 and Ind AS 19 — an overview",
        "Recording the provision and payments in the books",
        "Gratuity compliance checklist",
      ]),
    ],
    assignments: [
      "Decide gratuity eligibility for a set of employees",
      "Calculate gratuity wages using the 50% rule",
      "Calculate gratuity for regular and fixed-term employees",
      "Apply the ceiling and work out the taxable portion",
      "Record a year-end gratuity provision",
    ],
    exercises: "Worked gratuity calculations after each module, from simple cases to fixed-term contracts.",
    finalExam: "25 questions",
    finalPractical:
      "Calculate, pay and record gratuity for a group of leaving employees at a fictional company.",
    note:
      "Gratuity is governed by Chapter V of the Code on Social Security, 2020, under which the maximum gratuity is whatever the Central Government notifies. ₹20 lakh is the limit last notified (in 2018, under the Payment of Gratuity Act) and the current income-tax exemption limit for non-government employees; central government employees have a separate ₹25 lakh ceiling. Ceilings, the fixed-term employee rules and tax exemptions can change by notification, so always confirm current requirements with the Ministry of Labour and Employment and the Income Tax Department.",
  },
  {
    slug: "statutory-compliance-bonus",
    title: "Statutory Compliance: Bonus",
    image: "assets/course-bonus.jpg",
    summary:
      "Pay statutory bonus correctly under the Code on Wages — eligibility, the 8.33%–20% range, wage limits, allocable surplus, set-on and set-off, payment and records.",
    intro:
      "Statutory bonus now sits in the Code on Wages, 2019 instead of the Payment of Bonus Act. Learn who is entitled, how much to pay, how to work out the bonus pool from profits, and how to pay and record it on time.",
    objective:
      "By the end of this course, learners will identify employees entitled to bonus, calculate the minimum and maximum bonus using the applicable wage limits, compute the allocable surplus and apply set-on and set-off, pay bonus on time, and keep the records and returns required.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Bonus and the Code on Wages", [
        "What statutory bonus is and why it exists",
        "From the Payment of Bonus Act, 1965 to the Code on Wages, 2019",
        "The Code in force from 21 November 2025 — and old rules that continue until new ones are notified",
        "Which establishments must pay bonus",
        "Employer obligations at a glance",
      ]),
      mod(2, "Eligibility", [
        "At least 30 days' work in the accounting year",
        "Wage limit for eligibility — set by government notification",
        "₹21,000 a month — the limit under the 2015 amendment, still applied until a new notification",
        "Employees who are disqualified",
        "Part-year employees and leavers",
      ]),
      mod(3, "Calculating Bonus", [
        "Minimum bonus — 8.33% of wages or ₹100, whichever is higher",
        "Maximum bonus — 20% of wages",
        "Calculation ceiling — ₹7,000 or the minimum wage, whichever is higher, until a new notification",
        "“Wages” for bonus under the Code",
        "Proportionate bonus for part of the year",
        "Worked examples",
      ]),
      mod(4, "Allocable Surplus, Set-On and Set-Off", [
        "Gross profit, available surplus and allocable surplus",
        "When bonus above the minimum is payable",
        "Carrying forward surplus — set-on",
        "Carrying forward a shortfall — set-off",
        "Bonus linked to production or productivity",
      ]),
      mod(5, "Payment and Deductions", [
        "Paying within eight months of the end of the accounting year",
        "Crediting bonus to the employee's bank account",
        "Adjusting customary or interim bonus already paid",
        "Deductions allowed from bonus",
        "Tax treatment of bonus as salary",
      ]),
      mod(6, "Records, Returns and Accounting", [
        "Registers and records to keep",
        "Annual returns and inspections",
        "Disputes and claims",
        "Recording the bonus provision in the books",
        "Bonus compliance checklist",
      ]),
    ],
    assignments: [
      "Decide bonus eligibility for a list of employees",
      "Calculate minimum bonus using the calculation ceiling",
      "Compute allocable surplus from a profit statement",
      "Apply set-on and set-off over two years",
      "Plan bonus payment dates",
      "Record a year-end bonus provision",
    ],
    exercises: "Worked bonus calculations after each module, from single employees to a full bonus pool.",
    finalExam: "25 questions",
    finalPractical:
      "Calculate, pay and record statutory bonus for a fictional company for one accounting year.",
    note:
      "Under Section 26 of the Code on Wages, 2019, the eligibility wage limit and the calculation ceiling are set by government notification. Until new amounts are notified, the figures from the Payment of Bonus Act (₹21,000 eligibility limit; ₹7,000 or the minimum wage, whichever is higher, as the calculation ceiling) continue to be used. Always confirm current limits with the Ministry of Labour and Employment or your state labour department.",
  },
  {
    slug: "statutory-compliance-labour-welfare-fund",
    title: "Statutory Compliance: Labour Welfare Fund",
    image: "assets/course-labour-welfare-fund.jpg",
    summary:
      "Manage Labour Welfare Fund contributions across Indian states — applicability, half-yearly and annual cycles, deductions, payment, returns and records.",
    intro:
      "The Labour Welfare Fund is a state levy that pays for welfare facilities for workers. Each state has its own Act, amounts and due dates — and some states have no fund at all. Learn how to work out where it applies and run it correctly.",
    objective:
      "By the end of this course, learners will identify which states and employees the Labour Welfare Fund applies to, calculate employee and employer contributions for each state's cycle, deduct the employee share correctly, pay and file on time, and keep the records each welfare board requires.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "What the Labour Welfare Fund Is", [
        "Purpose — welfare facilities for workers and their families",
        "State Labour Welfare Fund Acts and welfare boards",
        "Contributions from employees, employers and the state",
        "States that operate a fund and states that don't",
        "How LWF differs from EPF, ESI and professional tax",
      ]),
      mod(2, "Applicability", [
        "Establishments covered — factories, shops and others",
        "Employee-count thresholds in each state",
        "Which employees are covered — wage and role limits",
        "Registering with the state welfare board",
        "Employers with staff in several states",
      ]),
      mod(3, "Contribution Cycles and Amounts", [
        "Fixed amounts per employee vs. wage-linked contributions",
        "Half-yearly cycles — Maharashtra, based on the register on 30 June and 31 December",
        "Annual cycles — Karnataka, for the calendar year",
        "Wage-linked contributions — Haryana",
        "The employer's matching share",
        "Finding the current amounts on each board's website",
      ]),
      mod(4, "Deductions and Payment", [
        "Deducting the employee share from the right month's wages",
        "Why the employer's share can never be recovered from employees",
        "Due dates — for example, Karnataka's 15 January deadline",
        "Paying online through state board portals",
        "Interest and penalties for late payment",
      ]),
      mod(5, "Returns and Records", [
        "Contribution statements and returns",
        "Registers to maintain",
        "Unpaid accumulations and unclaimed wages",
        "Inspections and notices from welfare boards",
      ]),
      mod(6, "LWF in Payroll", [
        "Setting up LWF in payroll software by state",
        "Showing LWF on payslips",
        "Recording LWF in the books",
        "Annual LWF compliance calendar and checklist",
      ]),
    ],
    assignments: [
      "Check whether LWF applies in a list of states",
      "Calculate half-yearly contributions for a Maharashtra establishment",
      "Calculate annual contributions for a Karnataka establishment",
      "Calculate wage-linked contributions for a Haryana employee",
      "Build an LWF compliance calendar for a multi-state employer",
    ],
    exercises: "Worked contribution examples for different states after each module.",
    finalExam: "20 questions",
    finalPractical:
      "Run one year of Labour Welfare Fund compliance for a fictional company with employees in three states.",
    note:
      "Labour Welfare Fund amounts, thresholds and due dates are set by each state's Act and welfare board and are revised from time to time. The state examples in this course show how the different systems work — always confirm current amounts and deadlines on the relevant state welfare board's website.",
  },
  {
    slug: "statutory-compliance-minimum-wages",
    title: "Statutory Compliance: Minimum Wages",
    image: "assets/course-minimum-wages.jpg",
    summary:
      "Pay at least the legal minimum under the Code on Wages — floor wage, central and state rates, VDA revisions, skill categories, overtime, payment timelines, deductions and records.",
    intro:
      "Minimum wages now sit in the Code on Wages, 2019, alongside the rules on when and how wages are paid. Learn how to find the right rate for each worker, keep up with twice-yearly revisions, and pay wages on time and in full.",
    objective:
      "By the end of this course, learners will find the applicable minimum wage for any worker by employment, skill level and area, apply dearness allowance revisions, calculate overtime, pay wages within the Code's timelines, keep deductions within the legal limits, and maintain the records inspectors expect.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Minimum Wages and the Code on Wages", [
        "Why minimum wages exist",
        "From the Minimum Wages Act, 1948 to the Code on Wages, 2019",
        "The Code in force from 21 November 2025",
        "Coverage — now extended to all employees",
        "Central and state governments as “appropriate government”",
      ]),
      mod(2, "The Floor Wage and How Rates Are Fixed", [
        "The national floor wage under Section 9 of the Code",
        "States cannot fix minimum wages below the floor wage",
        "Factors used to fix minimum wages — skill, difficulty and geography",
        "Review of minimum wages at least every five years",
        "Where to find central and state wage notifications",
      ]),
      mod(3, "Reading a Minimum Wage Notification", [
        "Skill categories — unskilled, semi-skilled, skilled and highly skilled",
        "Area classification — A, B and C",
        "Basic rate plus variable dearness allowance (VDA)",
        "VDA revisions on 1 April and 1 October in line with CPI-IW",
        "Daily, monthly and piece-rate wages",
        "Worked examples",
      ]),
      mod(4, "Working Hours and Overtime", [
        "Normal working hours and rest days",
        "Overtime — work beyond 8 hours a day or 48 hours a week",
        "Overtime paid at twice the normal rate, at the end of the wage period",
        "Calculating overtime for daily and monthly-rated workers",
        "Wages for workers on a rest day",
      ]),
      mod(5, "Paying Wages Correctly", [
        "Wage periods — daily, weekly, fortnightly and monthly",
        "Payment deadlines, including by the 7th of the following month for monthly wages",
        "Paying within two working days when an employee leaves",
        "Permitted deductions and the 50% limit",
        "Equal remuneration — no discrimination on the basis of gender",
      ]),
      mod(6, "Records, Inspections and Claims", [
        "Registers and wage slips to maintain",
        "Inspector-cum-facilitators and inspections",
        "Claims for underpayment and the limitation period",
        "Penalties and compounding of offences",
        "Minimum wages compliance checklist",
      ]),
    ],
    assignments: [
      "Find the applicable minimum wage for workers in different states and skill levels",
      "Apply a VDA revision to a wage register",
      "Calculate overtime for daily and monthly-rated workers",
      "Check deductions against the 50% limit",
      "Plan wage payment dates for each wage period",
      "Build a minimum wages compliance checklist",
    ],
    exercises: "Worked rate look-ups and wage calculations after each module, using sample notifications.",
    finalExam: "25 questions",
    finalPractical:
      "Check one month's wage register for a fictional company against the applicable minimum wages and payment rules.",
    note:
      "Minimum wage rates are notified by the central government and each state, and the variable dearness allowance is revised every April and October. The Code on Wages provides for a national floor wage; check whether one has been notified. Always confirm current rates on the Chief Labour Commissioner (Central) website or the relevant state labour department before paying.",
  },
  {
    slug: "statutory-compliance-shops-and-establishments",
    title: "Statutory Compliance: Shops and Establishments",
    image: "assets/course-shops-and-establishments.jpg",
    summary:
      "Register and run shops, offices and other establishments under state Shops and Establishments Acts — registration, working hours, leave, night work, records and inspections.",
    intro:
      "Almost every shop, office, restaurant and service business in India falls under a state Shops and Establishments Act. Learn how these laws work, how states differ, and how to register and stay compliant with working-hour, leave and record-keeping rules.",
    objective:
      "By the end of this course, learners will decide which Shops and Establishments Act applies, register or notify an establishment, set working hours, rest, weekly holidays and leave within the law, apply the rules on night work and women's employment, and keep the registers and notices inspectors expect.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Shops and Establishments Law in India", [
        "What a Shops and Establishments Act covers",
        "State laws — each state has its own Act and rules",
        "The Model Shops and Establishments Bill, 2016 and how states use it",
        "Where shops law meets the Labour Codes, including the OSH Code",
        "Shops, commercial establishments, offices, restaurants and IT firms",
      ]),
      mod(2, "Registration", [
        "Which establishments must register — employee thresholds by state",
        "Registration within six months and the Labour Identification Number (Model Bill)",
        "Smaller establishments — intimation instead of registration in some states",
        "Online registration through state labour portals",
        "Renewal, amendments, displaying the certificate and closure",
      ]),
      mod(3, "Working Hours, Rest and Opening Times", [
        "Daily and weekly hour limits",
        "Rest intervals and spread-over",
        "Overtime and its limits",
        "Weekly holidays and compensatory off",
        "Opening and closing hours, and operating 365 days a year",
      ]),
      mod(4, "Leave and Holidays", [
        "Earned or privilege leave",
        "Casual and sick leave",
        "National and festival holidays",
        "Leave encashment and carry-forward",
        "Leave records",
      ]),
      mod(5, "Women's Employment and Night Work", [
        "No discrimination in recruitment, training, promotion or wages",
        "Night shifts for women — consent and safety safeguards",
        "Transport, rest rooms and crèche facilities",
        "Prevention of sexual harassment at the workplace",
      ]),
      mod(6, "Records, Notices and Inspections", [
        "Registers of employment, wages and leave",
        "Notices to display at the workplace",
        "Inspections and facilitation visits",
        "Penalties and how to avoid them",
        "Shops and Establishments compliance checklist",
      ]),
    ],
    assignments: [
      "Decide which state Act applies to a list of businesses",
      "Prepare a registration application",
      "Design a shift roster within the hour and rest limits",
      "Build a leave policy that meets the state Act",
      "Prepare the registers and notices for an inspection",
    ],
    exercises: "Worked scenarios after each module for shops, offices and restaurants in different states.",
    finalExam: "25 questions",
    finalPractical:
      "Set up a new retail outlet's Shops and Establishments compliance — registration, rosters, leave and records.",
    note:
      "Shops and Establishments law is made by each state, so registration thresholds, working hours, leave entitlements and renewal rules differ between states and change over time. The Model Bill, 2016 is a template, not a national law. Always check your state's current Act, rules and labour department portal.",
  },
  {
    slug: "statutory-compliance-maternity-benefit",
    title: "Statutory Compliance: Maternity Benefit",
    image: "assets/course-maternity-benefit.jpg",
    summary:
      "Provide maternity benefit correctly under the Code on Social Security — eligibility, 26 weeks' paid leave, adoption and commissioning mothers, medical bonus, crèche and payroll.",
    intro:
      "Maternity benefit now sits in the Code on Social Security, 2020. Learn who is eligible, how much leave and pay to give, how it works alongside ESI, and the employer's duties on crèches, work from home and job protection.",
    objective:
      "By the end of this course, learners will decide whether an employee is eligible for maternity benefit, calculate the leave and payment due, handle adoption and commissioning-mother cases, apply the medical bonus and crèche rules, and process maternity benefit through payroll and records.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Maternity Benefit and the Code on Social Security", [
        "Purpose of maternity benefit",
        "From the Maternity Benefit Act, 1961 to Chapter VI of the Code on Social Security, 2020",
        "The Code in force from 21 November 2025",
        "Establishments covered",
        "How it works for employees covered by ESI",
      ]),
      mod(2, "Eligibility and Leave", [
        "Eligibility — at least 80 days' work in the 12 months before the expected delivery",
        "26 weeks' leave, with up to 8 weeks before delivery",
        "12 weeks for women with two or more surviving children",
        "12 weeks for adopting mothers of a child under 3 months, and for commissioning mothers",
        "Six weeks' leave with wages after a miscarriage or medical termination of pregnancy",
      ]),
      mod(3, "Calculating Maternity Pay", [
        "Paying at the average daily wage",
        "Working out the average daily wage",
        "Medical bonus — ₹3,500 or a higher notified amount, where free care isn't provided",
        "Paying the pre-delivery amount in advance, and the balance within 48 hours of proof of delivery",
        "If the employee dies — paying her nominee or legal representative",
        "Worked examples",
      ]),
      mod(4, "Workplace Support", [
        "Crèche facility for establishments with 50 or more employees",
        "Crèche visits during the working day",
        "Two nursing breaks a day until the child is 15 months old",
        "Work from home after maternity leave, where the work allows",
        "No arduous work or long hours of standing during pregnancy, on request",
      ]),
      mod(5, "Job Protection", [
        "No dismissal or discharge during maternity leave",
        "No change to service conditions to the employee's disadvantage",
        "Wages and benefits during absence",
        "Complaints, inspections and penalties",
      ]),
      mod(6, "Maternity Benefit in Payroll", [
        "Notices and claim documents",
        "Medical certification — including ASHA workers and midwives",
        "Recording maternity leave and payments in payroll",
        "Coordinating with ESIC for ESI-covered employees",
        "Maternity benefit compliance checklist",
      ]),
    ],
    assignments: [
      "Decide maternity benefit eligibility for a set of employees",
      "Calculate the leave entitlement in different scenarios",
      "Calculate maternity pay and the medical bonus",
      "Plan crèche arrangements for a 60-employee establishment",
      "Process maternity benefit through payroll",
    ],
    exercises: "Worked eligibility and pay calculations after each module, including adoption and ESI-covered cases.",
    finalExam: "25 questions",
    finalPractical:
      "Handle a maternity benefit claim end to end — eligibility, leave, pay, medical bonus and records — for an employee of a fictional company.",
    note:
      "Maternity benefit is governed by Chapter VI of the Code on Social Security, 2020 and its rules. The medical bonus amount, crèche rules and procedures can change by notification, and employees covered by ESI receive maternity benefit from ESIC instead. Always confirm current requirements with the Ministry of Labour and Employment and ESIC.",
  },
  {
    slug: "statutory-compliance-posh",
    title: "Statutory Compliance: POSH",
    image: "assets/course-posh.jpg",
    summary:
      "Prevent and handle sexual harassment at work under the POSH Act, 2013 — the Internal Committee, complaints, inquiry timelines, employer duties, the SHe-Box portal and annual reporting.",
    intro:
      "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 — the POSH Act — requires every employer to prevent harassment and handle complaints fairly and on time. Learn how to set up the Internal Committee, run the complaint process and meet every employer duty.",
    objective:
      "By the end of this course, learners will explain what counts as sexual harassment at the workplace, constitute an Internal Committee correctly, guide a complaint from filing to action within the legal timelines, meet the employer's duties under the Act, and prepare the records and annual report required.",
    level: "Intermediate",
    duration: "2 Hours",
    badge: "New",
    category,
    modules: [
      mod(1, "Understanding the POSH Act", [
        "Purpose of the Sexual Harassment of Women at Workplace Act, 2013",
        "What counts as sexual harassment",
        "What counts as a “workplace” — including travel and work-related visits",
        "Who is protected — employees, interns, visitors and others",
        "Every employer's obligations, whatever its size",
      ]),
      mod(2, "The Internal Committee", [
        "When an Internal Committee is required — 10 or more employees",
        "Presiding officer — a woman employed at a senior level",
        "At least two employee members and one external member",
        "At least half the members must be women",
        "Term of up to three years and fees for the external member",
        "The district Local Committee for smaller workplaces and complaints against the employer",
      ]),
      mod(3, "Complaints and Conciliation", [
        "Filing a complaint within three months — extendable by up to three months",
        "Helping a complainant put the complaint in writing",
        "Complaints through the SHe-Box portal",
        "Conciliation at the complainant's request",
        "Interim relief during the inquiry",
      ]),
      mod(4, "Inquiry and Action", [
        "Conducting a fair inquiry",
        "Completing the inquiry within 90 days",
        "Inquiry report to the employer within 10 days of completion",
        "Employer action on the report within 60 days",
        "False or malicious complaints — only after an inquiry proves malice",
        "Appeals against the committee's recommendations",
        "Confidentiality throughout",
      ]),
      mod(5, "Employer Duties", [
        "A safe working environment",
        "Displaying the consequences of harassment and the committee's details",
        "Regular awareness workshops and committee training",
        "Facilities for the committee to work",
        "Treating sexual harassment as misconduct under service rules",
        "Penalties — ₹50,000 for non-compliance, higher for repeat offences",
      ]),
      mod(6, "Policy, Records and Annual Report", [
        "Writing a POSH policy",
        "Records of complaints and inquiries",
        "The committee's annual report",
        "Disclosures in company reports",
        "POSH compliance checklist",
      ]),
    ],
    assignments: [
      "Identify whether a scenario counts as workplace sexual harassment",
      "Constitute an Internal Committee for a sample company",
      "Draft a complaint-handling timeline",
      "Plan an annual awareness programme",
      "Draft a POSH policy",
      "Prepare a committee annual report",
    ],
    exercises: "Case-based scenarios after each module, handled with the confidentiality the Act requires.",
    finalExam: "25 questions",
    finalPractical:
      "Set up POSH compliance for a new company — policy, Internal Committee, awareness plan and records.",
    note:
      "This course explains the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and its rules for compliance training. It is not legal advice for individual cases. Complaints can also be lodged on the government's SHe-Box portal. Always refer to the Act, the rules and the Ministry of Women and Child Development for current requirements.",
  },
]
