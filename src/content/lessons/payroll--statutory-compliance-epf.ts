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

// Statutory Compliance: EPF — lesson screens by module index (0 = Module 1).
// The course follows Kaveri Textiles Pvt Ltd, Coimbatore (60 employees),
// through the wage ceiling change of 17 September 2026. Four sample members:
// Selvi (₹14,000 wages), Arun (₹18,000), Priya (₹22,000), Karthik (₹60,000).
// Pension and split-month treatment follow published guidance; always confirm
// with EPFO notifications and FAQs.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Introduction to EPF",
      ["Provident fund is the largest statutory deduction for most Indian employers. This module introduces the EPFO and its schemes through Kaveri Textiles."],
      ["Explain what the EPFO does", "Describe the EPF, EPS and EDLI schemes", "Place EPF within the Code on Social Security, 2020", "Decide which establishments must register", "Understand voluntary coverage"],
    ),
    screen(
      "Meet Kaveri Textiles",
      p("Kaveri Textiles Pvt Ltd runs a weaving unit in Coimbatore, Tamil Nadu, with 60 employees. Ramesh, its HR and compliance officer, files PF every month."),
      table(
        ["Sample employee", "Monthly wages (Code definition)", "PF status before 17 Sept 2026"],
        [
          ["Selvi — loom operator", "₹14,000", "Member"],
          ["Arun — supervisor, joined 2025", "₹18,000", "Excluded (above ₹15,000 at joining)"],
          ["Priya — quality analyst", "₹22,000", "Member since an earlier job"],
          ["Karthik — production manager", "₹60,000", "Member; contributions restricted to the ceiling"],
        ],
      ),
    ),
    screen(
      "What the EPFO does",
      bullets(
        "The Employees' Provident Fund Organisation (EPFO) runs India's provident fund, pension and deposit-linked insurance schemes for the organised sector.",
        "It registers establishments, issues Universal Account Numbers (UANs), collects contributions and settles claims.",
        "Members earn interest on their PF balance, declared each year.",
      ),
    ),
    screen(
      "The three schemes",
      table(
        ["Scheme", "Purpose", "Funded by"],
        [
          ["Employees' Provident Fund (EPF)", "Retirement savings with interest", "Employee 12% + part of employer 12%"],
          ["Employees' Pension Scheme (EPS)", "Monthly pension after retirement; family and disability pension", "8.33% of the employer's contribution, plus a central government contribution"],
          ["Employees' Deposit Linked Insurance (EDLI)", "Life cover paid to the family if a member dies in service", "Employer contribution of 0.5%"],
        ],
      ),
    ),
    screen(
      "The Code on Social Security, 2020",
      bullets(
        "In force from 21 November 2025, replacing the Employees' Provident Funds and Miscellaneous Provisions Act, 1952 and other social security laws.",
        "The PF, pension and insurance schemes continue under the Code.",
        "The Code's definition of “wages” — with the 50% rule for exclusions — applies to PF.",
        "From 17 September 2026, the wage ceiling for PF purposes rose from ₹15,000 to ₹25,000 a month.",
      ),
    ),
    screen(
      "Which establishments must register",
      table(
        ["Situation", "Coverage"],
        [
          ["20 or more employees", "Must register"],
          ["Fewer than 20", "Not required, but may register voluntarily"],
          ["Once covered", "Stays covered even if employees later fall below 20"],
        ],
      ),
      p("Kaveri, with 60 employees, has been registered for many years."),
      terms(["Voluntary coverage", "An establishment with fewer than 20 employees can join if the employer and the majority of employees agree — useful for attracting staff."]),
    ),
    mistakes(
      ["Waiting to register after crossing 20", "Register from the date the threshold is crossed."],
      ["Thinking coverage ends below 20", "It continues."],
      ["Ignoring EDLI", "It's a separate employer contribution."],
      ["Using the old Act's references", "The Code applies from 21 November 2025."],
    ),
    check(
      1,
      q("Which scheme provides a monthly pension?", ["EPS", "EPF", "EDLI", "ESI"], 0, "Employees' Pension Scheme."),
      q("Which scheme pays life cover if a member dies in service?", ["EDLI", "EPS", "EPF", "Gratuity"], 0, "Deposit linked insurance."),
      q("From what headcount must an establishment register for PF?", ["20 employees", "10 employees", "50 employees", "1 employee"], 0, "Voluntary below that."),
      q("Since when has the Code on Social Security been in force?", ["21 November 2025", "1 April 2026", "1 July 2025", "17 September 2026"], 0, "Replacing the 1952 Act."),
      q("Does coverage end if headcount later falls below 20?", ["No", "Yes, immediately", "Yes, after a year", "Only for new staff"], 0, "Once covered, always covered."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Register?",
          ["A firm has 18 employees in March and 21 in June. When must it register?"],
          ["From June, when it reaches 20 employees."],
        ],
        [
          "Exercise 2 — Schemes",
          ["Which scheme helps (a) a retiree wanting monthly income, (b) a family after a member's death in service, (c) a member buying a house?"],
          ["(a) EPS pension. (b) EDLI (plus EPS family pension). (c) EPF withdrawal or advance."],
        ],
      ),
    ),
    summary(
      ["The EPFO", "EPF, EPS and EDLI", "The Code on Social Security", "Registration at 20 employees", "Voluntary coverage"],
      "PF compliance now runs under the Code on Social Security — with three schemes and a new ₹25,000 wage ceiling.",
    ),
  ],
  1: [
    overview(
      "Module 2 — Coverage, Wages and the Wage Ceiling",
      ["The ceiling change in September 2026 changed who must be enrolled. This module applies it to Kaveri's employees."],
      ["Decide who counts as an employee for EPF", "Calculate “wages” with the 50% rule", "Apply the ₹25,000 ceiling from 17 September 2026", "Enrol employees earning ₹15,000–₹25,000", "Handle wages above the ceiling", "Know excluded employees and international workers"],
    ),
    screen(
      "Who counts as an employee",
      bullets(
        "Anyone employed for wages in the establishment's work — permanent, temporary, probationers, and workers engaged through contractors.",
        "Apprentices engaged under the Apprentices Act are not covered.",
        "Contractor workers: the principal employer must ensure the contractor pays PF, or pay it and recover.",
      ),
    ),
    screen(
      "“Wages” and the 50% rule",
      p("PF is calculated on “wages” as defined in the Code: basic pay, dearness allowance and retaining allowance, plus other remuneration except listed exclusions (such as HRA, conveyance, overtime, commission and bonus). If exclusions exceed 50% of total remuneration, the excess is added to wages."),
      table(
        ["Priya — monthly", "Amount"],
        [
          ["Basic + DA", "₹14,000"],
          ["Special allowance", "₹8,000"],
          ["HRA (excluded)", "₹6,000"],
          ["Total remuneration", "₹28,000"],
          ["Exclusions ₹6,000 — within 50%", "No add-back"],
        ],
        { footer: ["Wages for PF", "₹22,000"], numeric: [1] },
      ),
    ),
    screen(
      "The ₹25,000 ceiling",
      table(
        ["Period", "Wage ceiling"],
        [
          ["Up to 16 September 2026", "₹15,000 a month"],
          ["From 17 September 2026", "₹25,000 a month"],
        ],
      ),
      bullets(
        "The ceiling decides who must be enrolled, and is the usual cap on contributions.",
        "Contributions are on wages up to the ceiling; on higher wages they're optional, if the employer and employee choose.",
        "Employees with wages up to ₹25,000 who joined after 17 September 2026 must be enrolled.",
      ),
      note("Notified by S.O. 5109(E). The government's 1.16% contribution to the pension fund remains linked to wages up to ₹15,000. Confirm details with EPFO guidance."),
    ),
    screen(
      "Enrolling employees earning ₹15,000–₹25,000",
      p("Arun earns ₹18,000. He was excluded when he joined in 2025 because his wages were above the old ₹15,000 limit and he wasn't already a member."),
      steps(
        ["Identify", "List employees with wages above ₹15,000 and up to ₹25,000 who are not members."],
        ["Collect KYC", "Aadhaar, bank details and PAN."],
        ["Generate UANs", "On the EPFO employer portal."],
        ["Start contributions", "From 17 September 2026 — the first ECR affected is September 2026's, due 15 October."],
      ),
      caution("Employees in this range can no longer be treated as excluded employees."),
    ),
    screen(
      "Wages above the ceiling",
      compare(
        ["Restricted (common)", "Contribute 12% of ₹25,000 only.", ["Karthik: ₹3,000 each from employee and employer", "Lower employer cost"]],
        ["Full wages (optional)", "Contribute 12% of actual wages, with consent.", ["Karthik: ₹7,200 each", "Higher savings for the employee"]],
      ),
      p("Kaveri restricts contributions to the ceiling for all staff, and says so in its employment contracts."),
    ),
    screen(
      "Excluded employees and international workers",
      terms(
        ["Excluded employee", "Someone whose wages exceed the ceiling (now ₹25,000) when joining and who was never a member — they aren't required to join."],
        ["Previously a member", "If a new joiner was a member at an earlier employer, they must continue — whatever their salary. Priya and Karthik fall here."],
        ["International workers", "Foreign nationals working in India (and Indians from countries without a social security agreement) are covered from the first rupee — there's no ceiling."],
      ),
    ),
    mistakes(
      ["Leaving ₹15,000–₹25,000 earners out after 17 September", "Enrol them."],
      ["Using basic only as PF wages", "Apply the Code's definition."],
      ["Excluding previous members because of high salary", "They must continue."],
      ["Applying the ceiling to international workers", "No ceiling applies."],
    ),
    check(
      2,
      q("What's the PF wage ceiling from 17 September 2026?", ["₹25,000 a month", "₹15,000 a month", "₹21,000 a month", "₹30,000 a month"], 0, "Previously ₹15,000."),
      q("A new joiner earning ₹40,000 was a PF member at a previous job. Must they join?", ["Yes", "No", "Only if they ask", "Only after a year"], 0, "Previous members continue."),
      q("Is HRA part of PF wages under the Code?", ["No — it's an exclusion, subject to the 50% rule", "Yes, always", "Only in metros", "Only for managers"], 0, "Excess exclusions are added back."),
      q("Are apprentices under the Apprentices Act covered?", ["No", "Yes", "Only above ₹25,000", "Only in factories"], 0, "They're excluded."),
      q("Is there a wage ceiling for international workers?", ["No", "Yes, ₹25,000", "Yes, ₹15,000", "Yes, ₹50,000"], 0, "Covered on full wages."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Who joins?",
          ["After 17 September 2026, who must Kaveri enrol: (a) a new joiner at ₹24,000 with no PF history, (b) a new joiner at ₹30,000 with no PF history, (c) a new joiner at ₹30,000 who was a member before?"],
          ["(a) Yes — within the ceiling. (b) No — an excluded employee. (c) Yes — a previous member."],
        ],
        [
          "Exercise 2 — Wages",
          ["Total remuneration ₹30,000: basic ₹10,000, HRA ₹12,000, conveyance ₹5,000, special allowance ₹3,000. Calculate PF wages."],
          ["Wages before add-back ₹13,000; exclusions ₹17,000; 50% limit ₹15,000; add back ₹2,000 → wages ₹15,000."],
        ],
      ),
    ),
    summary(
      ["Who counts as an employee", "Code wages and the 50% rule", "The ₹25,000 ceiling", "Enrolling the ₹15,000–₹25,000 group", "Contributions above the ceiling", "Excluded employees and international workers"],
      "From 17 September 2026, the ₹25,000 ceiling brings many more employees into PF — enrol them and use the Code's wages.",
    ),
  ],
  2: [
    overview(
      "Module 3 — Calculating Contributions",
      ["This module calculates October 2026's contributions for Kaveri's four sample members, and handles the split month of September."],
      ["Calculate the employee contribution at 12%", "Split the employer contribution between EPS and EPF", "Know the 10% rate for specified establishments", "Add EDLI and administrative charges", "Work examples at the new ceiling", "Handle September 2026's mid-month change"],
    ),
    screen(
      "Employee contribution — 12%",
      bullets(
        "12% of PF wages (up to the ceiling, unless higher wages are chosen).",
        "Deducted from the employee's pay.",
        "Employees may also contribute more as a voluntary contribution (VPF) — the employer doesn't have to match it.",
      ),
    ),
    screen(
      "Employer contribution — EPS and EPF",
      table(
        ["Employer's 12%", "Goes to"],
        [
          ["8.33% of wages (within the ceiling)", "Employees' Pension Scheme (EPS)"],
          ["The balance (about 3.67%)", "The member's EPF account"],
        ],
      ),
      note("The central government adds 1.16% towards pension on wages up to ₹15,000. EPS eligibility and calculation rules for members above ₹15,000 should be checked against current EPFO guidance."),
    ),
    screen(
      "October 2026 contributions",
      table(
        ["Member", "PF wages", "Employee 12%", "Employer EPS 8.33%", "Employer EPF"],
        [
          ["Selvi", "₹14,000", "₹1,680", "₹1,166", "₹514"],
          ["Arun", "₹18,000", "₹2,160", "₹1,499", "₹661"],
          ["Priya", "₹22,000", "₹2,640", "₹1,833", "₹807"],
          ["Karthik", "₹25,000 (restricted)", "₹3,000", "₹2,083", "₹917"],
        ],
        { footer: ["Total", "₹79,000", "₹9,480", "₹6,581", "₹2,899"], numeric: [1, 2, 3, 4] },
      ),
      p("Contributions are rounded to the nearest rupee."),
    ),
    screen(
      "EDLI and administrative charges",
      table(
        ["Charge", "Rate", "Four sample members"],
        [
          ["EDLI contribution", "0.5% of PF wages", "₹395"],
          ["Administrative charges", "0.5% of PF wages (minimum ₹500 a month per establishment)", "₹395"],
        ],
      ),
      example(
        [["Employee share", "₹9,480"], ["Employer EPS + EPF", "₹9,480"], ["EDLI + admin charges", "₹790"]],
        ["Total PF remittance for the four", "₹19,750"],
      ),
      note("The ₹500 minimum applies to the whole establishment's monthly admin charge — Kaveri's 60 employees exceed it anyway."),
    ),
    screen(
      "The 10% rate for specified establishments",
      bullets(
        "Some establishments contribute 10% instead of 12% — those with fewer than 20 employees, certain sick units, and specified industries (such as jute, beedi, brick, coir and guar gum).",
        "Employee and employer rates are both 10%.",
        "The EPS share is still 8.33% of wages.",
      ),
      example([["PF wages", "₹20,000"], ["Employee 10%", "₹2,000"]], ["Employer 10% (EPS ₹1,666 + EPF ₹334)", "₹2,000"]),
    ),
    screen(
      "September 2026 — the mid-month change",
      p("The ceiling changed on 17 September, so September is treated as a split month in a single ECR. One approach, consistent with EPFO's FAQs, prorates by days:"),
      table(
        ["Member", "Calculation", "Employee 12%"],
        [
          ["Karthik (restricted to ceiling)", "₹15,000 × 16/30 + ₹25,000 × 14/30 = ₹19,667", "₹2,360"],
          ["Arun (newly covered from 17 Sept)", "₹18,000 × 14/30 = ₹8,400", "₹1,008"],
          ["Selvi (below both ceilings)", "₹14,000 — no change", "₹1,680"],
        ],
      ),
      caution("Follow the EPFO's published FAQs and ECR instructions for the split month — software settings must match them."),
    ),
    mistakes(
      ["Putting the whole 12% into EPF", "8.33% goes to EPS."],
      ["Forgetting EDLI and admin charges", "They're payable on top."],
      ["Using 12% for specified establishments", "Check if 10% applies."],
      ["Ignoring September's split", "Apply EPFO's method."],
    ),
    check(
      3,
      q("What share of wages goes to EPS from the employer's contribution?", ["8.33%", "3.67%", "12%", "1.16%"], 0, "The balance goes to EPF."),
      q("PF wages ₹20,000. Employee contribution at 12%?", ["₹2,400", "₹2,000", "₹1,666", "₹3,000"], 0, "12% × ₹20,000."),
      q("What's the EDLI contribution rate?", ["0.5% of PF wages", "1%", "8.33%", "3.25%"], 0, "Paid by the employer."),
      q("What's the minimum monthly admin charge per establishment?", ["₹500", "₹75", "₹1,000", "Nil"], 0, "0.5% otherwise."),
      q("Is the employer required to match voluntary PF (VPF)?", ["No", "Yes", "Only at 50%", "Only for managers"], 0, "VPF is the employee's choice."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Contributions",
          ["PF wages ₹16,500. Calculate the employee contribution, EPS and employer EPF."],
          ["Employee ₹1,980; EPS 8.33% = ₹1,374; employer EPF ₹606."],
        ],
        [
          "Exercise 2 — Remittance",
          ["Total PF wages for a month are ₹4,00,000. What's the total remittance at 12% + 12% + 0.5% + 0.5%?"],
          ["₹48,000 + ₹48,000 + ₹2,000 + ₹2,000 = ₹1,00,000."],
        ],
      ),
    ),
    summary(
      ["Employee 12%", "Employer 8.33% to EPS and the balance to EPF", "EDLI and admin charges", "The 10% rate", "October examples", "September's split month"],
      "Every PF remittance has five parts: employee share, EPS, employer EPF, EDLI and admin charges.",
    ),
  ],
  3: [
    overview(
      "Module 4 — Registration and Member Management",
      ["PF only works when every member's records are right. This module covers registration, UANs, KYC and transfers."],
      ["Register an establishment on the EPFO portal", "Generate and activate UANs", "Complete member KYC", "Record joining and exit dates", "Transfer accounts between employers"],
    ),
    screen(
      "Registering an establishment",
      steps(
        ["Apply online", "Through the Shram Suvidha / EPFO employer portal, with PAN, incorporation and address details."],
        ["Upload documents", "Digital signature of the authorised signatory, bank details."],
        ["Receive the establishment code", "Used for all filings and payments."],
        ["Register employees", "Add existing staff and generate UANs."],
      ),
    ),
    screen(
      "UANs",
      bullets(
        "The Universal Account Number stays with a member for life, across jobs.",
        "New members' UANs are generated by the employer, usually using Aadhaar-based verification.",
        "Members activate the UAN on the member portal to view passbooks and file claims.",
        "A previous UAN must be used — don't create a second one.",
      ),
      caution("Duplicate UANs split a member's history and delay claims. Always ask joiners for their existing UAN."),
    ),
    screen(
      "Member KYC",
      table(
        ["KYC item", "Why it matters"],
        [
          ["Aadhaar", "Identity; online claims and UAN generation"],
          ["Bank account and IFSC", "Claim payments"],
          ["PAN", "Lower TDS on taxable withdrawals"],
        ],
      ),
      p("The employer approves KYC added by members on the employer portal. Kaveri checks KYC for every newly enrolled member, like Arun, in their first month."),
    ),
    screen(
      "Joining and exit dates",
      bullets(
        "The date of joining is recorded when the member is added and in the first ECR.",
        "The date of exit and reason (resignation, retirement, death) are marked after the last contribution.",
        "Members can update the exit date themselves in some cases, two months after leaving.",
        "Wrong dates delay withdrawals and transfers.",
      ),
    ),
    screen(
      "Transfers between employers",
      bullets(
        "When a member changes jobs, the PF balance moves from the old account to the new one under the same UAN.",
        "Transfers are now largely automatic once KYC is complete and dates are recorded.",
        "Where needed, members request the transfer online, and the old or new employer attests it.",
        "Transfer keeps service continuous for pension and preserves tax benefits.",
      ),
      tip("Check at joining", "Ask new joiners like Priya to confirm their UAN, KYC and previous exit date in their first month."),
    ),
    mistakes(
      ["Creating new UANs for joiners", "Use the existing one."],
      ["Leaving KYC unapproved", "Claims fail."],
      ["Not marking exit dates", "Members can't withdraw or transfer."],
      ["Wrong date of joining", "Affects pension service."],
    ),
    check(
      4,
      q("How long does a UAN stay with a member?", ["For life, across jobs", "Only for one employer", "One year", "Until age 40"], 0, "Universal."),
      q("Which KYC item helps with lower TDS on taxable withdrawals?", ["PAN", "Passport", "Driving licence", "Voter ID"], 0, "Along with Aadhaar and bank."),
      q("Who approves KYC added by members?", ["The employer", "The bank", "The tax department", "Nobody"], 0, "On the employer portal."),
      q("What's the risk of duplicate UANs?", ["Split history and delayed claims", "Higher interest", "Lower contributions", "Nothing"], 0, "Always ask for the existing UAN."),
      q("What happens to the PF balance when a member changes jobs?", ["It's transferred to the new account under the same UAN", "It's forfeited", "It's paid to the employer", "It's frozen forever"], 0, "Service stays continuous."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Joiner",
          ["A joiner says she “thinks” she had PF at her last job. What should Ramesh do?"],
          ["Ask for the UAN (or search using Aadhaar on the portal). Link her to the existing UAN rather than creating a new one, and check her KYC and previous exit date."],
        ],
        [
          "Exercise 2 — Leaver",
          ["Karthik leaves on 31 December 2026. What does Ramesh record, and when?"],
          ["Include December's contribution in the ECR, then mark the exit date (31 December 2026) and reason (resignation) on the portal."],
        ],
      ),
    ),
    summary(
      ["Establishment registration", "UANs", "KYC", "Joining and exit dates", "Transfers"],
      "Clean member records — one UAN, complete KYC and correct dates — make every later claim and transfer smooth.",
    ),
  ],
  4: [
    overview(
      "Module 5 — Monthly ECR Filing and Payment",
      ["Every month Kaveri files an ECR and pays PF by the 15th. This module covers both, and the cost of being late."],
      ["Prepare the Electronic Challan cum Return (ECR)", "Meet the 15th-of-month due date", "Pay contributions online", "Calculate interest and damages for late payment", "Correct a filed return"],
    ),
    screen(
      "Preparing the ECR",
      table(
        ["ECR field (per member)", "Selvi, October 2026"],
        [
          ["UAN and name", "Selvi's UAN"],
          ["Gross wages", "₹20,000"],
          ["EPF wages", "₹14,000"],
          ["EPS wages", "₹14,000"],
          ["EDLI wages", "₹14,000"],
          ["Employee contribution", "₹1,680"],
          ["EPS contribution", "₹1,166"],
          ["Employer EPF (difference)", "₹514"],
          ["Non-contributing days", "0"],
        ],
      ),
      p("The ECR is uploaded as a text file from the payroll system. The portal validates it and generates a challan (TRRN)."),
    ),
    screen(
      "Due date and payment",
      bullets(
        "Contributions for a month are due by the 15th of the following month — October 2026 by 15 November 2026.",
        "Pay online through the EPFO portal using net banking from authorised banks.",
        "Payment is complete when the challan shows as paid — keep the receipt.",
      ),
      tip("Pay with the ECR", "Kaveri uploads the ECR and pays on the 10th, leaving time for portal or bank delays."),
    ),
    screen(
      "Interest and damages for late payment",
      table(
        ["Delay", "Damages (yearly rate on the arrears)"],
        [
          ["Less than 2 months", "5%"],
          ["2 to 4 months", "10%"],
          ["4 to 6 months", "15%"],
          ["More than 6 months", "25%"],
        ],
      ),
      p("Interest of 12% a year also applies on late payments."),
      example(
        [["₹50,000 contributions paid 50 days late", ""], ["Interest: ₹50,000 × 12% × 50 ÷ 365", "₹822"], ["Damages: ₹50,000 × 5% × 50 ÷ 365", "₹342"]],
        ["Total cost of the delay", "₹1,164"],
      ),
      caution("Deducting the employee's share and not depositing it is treated very seriously and can lead to prosecution."),
    ),
    screen(
      "Correcting a filed return",
      bullets(
        "Wrong wages or contributions for a member: file a revised or supplementary ECR as permitted by the portal.",
        "Missed member: include them in a supplementary ECR with the arrears and interest.",
        "Wrong UAN: contact EPFO through the employer interface for correction.",
        "Keep records of every correction and the reason.",
      ),
    ),
    screen(
      "The monthly ECR routine",
      steps(
        ["Payroll close", "PF wages and contributions finalised."],
        ["Reconcile", "Payroll register PF totals = ECR totals."],
        ["Upload ECR", "Validate and generate the challan."],
        ["Pay by the 10th", "Before the 15th due date."],
        ["Record", "Clear the PF payable ledger in the books."],
      ),
    ),
    mistakes(
      ["Paying after the 15th", "Interest and damages apply."],
      ["Mismatched ECR and payroll", "Reconcile before upload."],
      ["Ignoring new members in ECR", "Include everyone covered."],
      ["Not correcting errors promptly", "Members' balances stay wrong."],
    ),
    check(
      5,
      q("By when must PF for October 2026 be paid?", ["15 November 2026", "7 November 2026", "31 October 2026", "30 November 2026"], 0, "15th of the following month."),
      q("What does ECR stand for?", ["Electronic Challan cum Return", "Employee Contribution Record", "EPF Claim Request", "Employer Compliance Report"], 0, "Filed monthly."),
      q("What's the interest rate on late PF payments?", ["12% a year", "18% a year", "1.5% a month", "5% a year"], 0, "Plus damages."),
      q("What damages rate applies for a delay of 3 months?", ["10% a year", "5% a year", "25% a year", "15% a year"], 0, "2 to 4 months."),
      q("How is a missed member fixed?", ["A supplementary ECR with arrears and interest", "Ignore it", "Pay them in cash", "Wait for year end"], 0, "Correct promptly."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Late payment",
          ["₹1,20,000 of PF is paid 100 days late. Calculate interest and damages."],
          ["Interest: ₹1,20,000 × 12% × 100 ÷ 365 = ₹3,945. Damages (2–4 months, 10%): ₹1,20,000 × 10% × 100 ÷ 365 = ₹3,288."],
        ],
        [
          "Exercise 2 — Reconcile",
          ["Payroll shows PF deductions of ₹9,480 for the four sample members, but the ECR shows ₹8,280. What's likely wrong?"],
          ["₹1,200 difference — Karthik's contribution is still capped at the old ₹15,000 ceiling (₹1,800 instead of ₹3,000). Update the ceiling in the ECR settings and re-generate before upload."],
        ],
      ),
    ),
    summary(
      ["ECR fields", "The 15th due date and online payment", "Interest at 12% and tiered damages", "Corrections", "The monthly routine"],
      "File the ECR and pay by the 15th — late payment costs interest, damages and possibly more.",
    ),
  ],
  5: [
    overview(
      "Module 6 — Claims, Records and Inspections",
      ["PF exists to pay members when they need it. This module covers claims, the employer's role, records and inspections."],
      ["Support withdrawals, advances and final settlement", "Understand pension and insurance claims", "Approve claims as an employer", "Keep the required registers and records", "Handle EPFO inspections and notices", "Use a monthly PF compliance checklist"],
    ),
    screen(
      "Withdrawals, advances and final settlement",
      table(
        ["Claim", "Typical situation"],
        [
          ["Partial withdrawal (advance)", "Illness, education, marriage, housing — subject to service and amount conditions, simplified in recent reforms"],
          ["Final settlement", "Retirement, or unemployment for a specified period after leaving"],
          ["Transfer", "Moving to a new employer"],
        ],
      ),
      p("Most claims are filed online by members with an activated UAN and complete KYC."),
      note("Withdrawals before 5 years of continuous service may be taxable, with TDS if the amount exceeds the threshold."),
    ),
    screen(
      "Pension and insurance claims",
      table(
        ["Claim", "Who", "When"],
        [
          ["Monthly pension", "Members with at least 10 years of eligible service", "From age 58 (reduced pension from 50)"],
          ["Withdrawal benefit", "Members with less than 10 years' service", "On leaving"],
          ["Family pension", "Spouse and children", "On a member's death"],
          ["EDLI", "Nominee or legal heir", "On a member's death in service"],
        ],
      ),
    ),
    screen(
      "The employer's role in claims",
      bullets(
        "Ensure KYC is approved and exit dates are marked.",
        "Attest claims where EPFO requires it (for example, if KYC is incomplete or for death claims).",
        "Help families with EDLI and pension claims after a death.",
        "Keep nominations up to date — members file e-nominations online.",
      ),
      tip("Nominations", "Kaveri asks every member to complete an e-nomination when they join — it speeds up death claims."),
    ),
    screen(
      "Registers and records",
      bullets(
        "Wage registers showing PF wages and deductions.",
        "Monthly ECRs, challans and payment receipts.",
        "Member joining, exit and KYC records.",
        "Contractor PF compliance (challans and ECRs for contract workers).",
        "Correspondence and orders from EPFO.",
      ),
      p("Records may be kept electronically. Keep them for the period required under the Code and schemes."),
    ),
    screen(
      "Inspections and notices",
      steps(
        ["Notice", "An inspector (now often called an inspector-cum-facilitator) schedules a visit or asks for documents."],
        ["Prepare", "Wage registers, ECRs, challans, member lists, contractor records."],
        ["Explain", "Answer questions on coverage, wages and the 50% rule."],
        ["Follow up", "Pay any shortfall and file corrections."],
        ["Appeal", "If you disagree with an assessment order, appeal within the time allowed."],
      ),
    ),
    screen(
      "Monthly PF compliance checklist",
      bullets(
        "New joiners: UAN, KYC, e-nomination.",
        "Coverage: everyone with wages up to ₹25,000 enrolled; previous members continued.",
        "Wages: Code definition, 50% rule applied.",
        "Contributions: EE 12%, EPS 8.33%, EPF balance, EDLI 0.5%, admin 0.5%.",
        "ECR uploaded and paid by the 15th (Kaveri: the 10th).",
        "Leavers: exit dates marked.",
        "Contractors: PF challans received for their workers.",
        "Payable ledger cleared; records filed.",
      ),
    ),
    mistakes(
      ["Ignoring members' KYC problems", "Claims get rejected."],
      ["No nominations", "Death claims are delayed."],
      ["Not checking contractors' PF", "The principal employer can be liable."],
      ["Missing appeal deadlines", "Orders become final."],
    ),
    check(
      6,
      q("How many years of eligible service are needed for a monthly EPS pension?", ["10 years", "5 years", "20 years", "1 year"], 0, "From age 58."),
      q("Who receives the EDLI benefit?", ["The nominee or legal heir after a death in service", "The employer", "The member at retirement", "The bank"], 0, "Life cover."),
      q("When can PF withdrawals be taxable?", ["Before 5 years of continuous service", "Never", "Always", "Only after retirement"], 0, "With TDS above a threshold."),
      q("Why should the employer check contractors' PF?", ["The principal employer can be liable", "It's optional", "To save tax", "To increase wages"], 0, "Ask for challans and ECRs."),
      q("What should every member complete at joining for faster death claims?", ["An e-nomination", "A loan form", "A PAN application", "A pension claim"], 0, "Online."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Death claim",
          ["A Kaveri employee with 6 years' service dies in service. Which benefits can the family claim?"],
          ["PF balance (final settlement), EPS family pension, and EDLI insurance — Kaveri helps with the claims and attests where required."],
        ],
        [
          "Exercise 2 — Inspection",
          ["An inspector asks why Arun wasn't contributing before September 2026. What's the answer?"],
          ["Before 17 September 2026 the ceiling was ₹15,000; Arun joined at ₹18,000 with no prior membership, so he was an excluded employee. He was enrolled from 17 September 2026 when the ceiling rose to ₹25,000."],
        ],
      ),
    ),
    summary(
      ["Withdrawals and final settlement", "Pension and EDLI", "The employer's role", "Records", "Inspections", "The monthly checklist"],
      "PF compliance ends with members getting their money — complete records and prompt employer support make that happen.",
    ),
  ],
}

export default lessons
