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
  tip,
} from "@/lib/lessonKit"

// Statutory Compliance: Shops and Establishments — lesson screens by module
// index (0 = Module 1). The course follows Kesar Home Store Pvt Ltd, a
// homeware retailer in Pune, so the Maharashtra Shops and Establishments
// (Regulation of Employment and Conditions of Service) Act, 2017 and the
// Maharashtra rules of 2018 apply. Figures were checked against the official
// Act reprint and rules; other states' laws differ.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Shops and Establishments Law in India",
      ["Shops, offices, restaurants and most service businesses are regulated by a state Shops and Establishments Act. This module explains what these laws cover and which one applies, using Kesar Home Store in Pune."],
      ["Explain what a Shops and Establishments Act covers", "Recognise that each state has its own Act and rules", "Describe the role of the Model Bill, 2016", "Know which establishments are excluded", "Identify the Act that applies to a business"],
    ),
    screen(
      "Meet Kesar Home Store",
      p("Kesar Home Store Pvt Ltd sells homeware from a showroom on FC Road, Pune. It employs 14 workers and is about to open a small kiosk in a Pune mall with 6 workers. Priya, its HR and payroll executive, handles registration, rosters, leave and records."),
      table(
        ["Worker", "Role", "Location"],
        [
          ["Anil", "Senior sales associate", "Showroom"],
          ["Fatima", "Cashier", "Showroom"],
          ["Rohit", "Store-room assistant", "Showroom"],
          ["Sneha", "Customer support (evening shift)", "Showroom"],
          ["Deepa", "Kiosk lead", "Mall kiosk"],
        ],
      ),
    ),
    screen(
      "What the Act covers",
      bullets(
        "Registration or intimation of the establishment.",
        "Opening and closing hours, daily and weekly working hours, rest intervals and spread-over.",
        "Overtime, weekly holidays, leave and festival holidays.",
        "Employment of women, including night work.",
        "Welfare — health and safety, first aid, drinking water, toilets, crèche and canteen.",
        "Registers, notices, annual returns, inspections and penalties.",
      ),
    ),
    screen(
      "Each state has its own law",
      p("Shops and establishments are regulated by the states, so every state has its own Act and rules. Maharashtra's current law is the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017, with rules made in 2018."),
      compare(
        ["Model Shops and Establishments Bill, 2016", "A template from the Ministry of Labour and Employment.", ["Not a law on its own", "States can adopt or adapt it", "Covers establishments with ten or more workers"]],
        ["State Act", "The law you actually follow.", ["Sets thresholds, hours and leave", "Has its own forms and portal", "Changes by state amendment"]],
      ),
      note("Kesar's showroom and kiosk are both in Pune, so the Maharashtra Act of 2017 applies to both."),
    ),
    screen(
      "Who is excluded",
      p("The Maharashtra Act doesn't apply to some establishments, such as:"),
      bullets(
        "Establishments of the central and state governments.",
        "Establishments of local authorities.",
        "Certain other bodies listed in section 3 of the Act.",
      ),
      p("Factories are also outside the definition of “establishment” — they fall under factory and safety law instead."),
      caution("A private business doing work for a government department is still covered — only the government's own establishments are excluded."),
    ),
    screen(
      "Where the Labour Codes fit",
      bullets(
        "The Code on Wages governs minimum wages, payment timing and deductions for all employees.",
        "The Code on Social Security covers PF, ESI, gratuity and maternity benefit.",
        "The Occupational Safety, Health and Working Conditions Code sets national standards on safety and working conditions.",
        "The state Shops Act still governs registration, hours, holidays and leave for shops — check how your state has aligned its rules with the Codes.",
      ),
    ),
    mistakes(
      ["Assuming one national Shops Act", "Each state has its own Act and rules."],
      ["Treating the Model Bill as law", "It's a template for states."],
      ["Following another state's rules", "Use the Act of the state where the establishment is located."],
      ["Thinking government contractors are exempt", "Only government establishments themselves are excluded."],
    ),
    check(
      1,
      q("Who makes Shops and Establishments law in India?", ["Each state government", "Only the central government", "Municipal corporations", "Trade associations"], 0, "Each state has its own Act and rules."),
      q("What is the Model Shops and Establishments Bill, 2016?", ["A template states can adopt or adapt", "A central law that applies everywhere", "A Maharashtra rule", "A tax notification"], 0, "It isn't law on its own."),
      q("Which Act applies to Kesar Home Store's Pune showroom?", ["The Maharashtra Shops and Establishments Act, 2017", "The Karnataka Shops Act", "The Factories Act", "The Model Bill, 2016"], 0, "The establishment is in Maharashtra."),
      q("Which of these is excluded from the Maharashtra Act?", ["A state government office", "A private bank branch", "A restaurant", "A retail shop"], 0, "Government establishments are excluded."),
      q("Which law governs Kesar's minimum wages and wage payment dates?", ["The Code on Wages", "The Shops Act only", "The Companies Act", "The GST Act"], 0, "Wages are under the Code on Wages."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Which law?",
          ["Which Shops Act applies to (a) a café in Bengaluru, (b) Kesar's Pune kiosk, (c) a software office in Nagpur?"],
          ["(a) Karnataka's Act, (b) the Maharashtra Act, 2017, (c) the Maharashtra Act, 2017 — the location decides."],
        ],
        [
          "Exercise 2 — Covered or not?",
          ["Is a private security agency guarding a state government office covered by the Maharashtra Act?"],
          ["Yes — the agency is a private establishment. Only the government's own establishments are excluded."],
        ],
      ),
    ),
    summary(
      ["What the Act covers", "State Acts and the Model Bill", "Exclusions", "How the Labour Codes fit", "Kesar Home Store's case"],
      "Find the state where the establishment is located, then follow that state's current Act, rules and portal.",
    ),
  ],

  1: [
    overview(
      "Module 2 — Registration",
      ["Before trading, an establishment must register or give intimation. This module walks through Kesar's registration for the showroom and its intimation for the kiosk."],
      ["Apply the ten-worker threshold", "Register online in Form A", "Give intimation in Form F for smaller establishments", "Know the validity and renewal rules", "Report changes and closure"],
    ),
    screen(
      "Registration or intimation?",
      table(
        ["Workers", "What's required", "Form", "Time limit"],
        [
          ["Ten or more", "Registration", "Form A", "Within 60 days of starting business"],
          ["Fewer than ten", "Intimation of commencement", "Form F", "Within 60 days of starting business"],
        ],
      ),
      note("If a small establishment grows to ten or more workers, the whole Act applies and it must register."),
    ),
    screen(
      "Kesar's two establishments",
      table(
        ["Establishment", "Workers", "Requirement"],
        [
          ["FC Road showroom", "14", "Register in Form A"],
          ["Mall kiosk", "6", "Intimation in Form F"],
        ],
      ),
      p("Each establishment is assessed separately. If the kiosk hires four more staff, Priya must register it."),
    ),
    screen(
      "Registering online",
      steps(
        ["Apply online", "Submit Form A on the Maharashtra labour department portal to the Facilitator for the area."],
        ["Upload documents", "Including the employer's Aadhaar and a photo of the establishment showing the Marathi name board."],
        ["Self-declaration", "The employer self-certifies the details and documents."],
        ["Certificate", "The Facilitator checks the application and issues a digitally signed certificate."],
      ),
      p("No fee is prescribed under the Act or rules, but the employer pays the government's electronic transaction or service charges."),
      tip("Name board", "Keep the photo of the Marathi name board ready before applying — it's a required upload."),
    ),
    screen(
      "Validity and renewal",
      bullets(
        "The certificate is valid for the period the applicant requests, up to a maximum of ten years.",
        "Apply online for renewal at least 30 days before it expires.",
        "Produce the certificate whenever the Facilitator asks for it.",
      ),
      example([["Showroom registered from", "1 June 2026"], ["Period requested", "5 years"], ["Expires", "31 May 2031"]], ["Apply for renewal by", "1 May 2031"]),
    ),
    screen(
      "Changes and closure",
      steps(
        ["Changes", "Notify any change in the registered details online in Form I within 30 days."],
        ["Closure", "Tell the Facilitator when the establishment closes; small establishments use Form K."],
      ),
      caution("Moving the showroom to a new address or changing the employer's name are changes that must be reported."),
    ),
    mistakes(
      ["Counting workers across all branches together", "Each establishment is assessed on its own."],
      ["Waiting until an inspection to register", "Register or give intimation within 60 days."],
      ["Forgetting renewal", "Apply at least 30 days before expiry."],
      ["Not reporting a change of address", "Use Form I within 30 days."],
    ),
    check(
      2,
      q("Under the Maharashtra Act, which establishments must register?", ["Those with ten or more workers", "Only those with 50 or more", "Every establishment regardless of size", "Only shops in malls"], 0, "Smaller ones give intimation instead."),
      q("Within how long of starting business must Kesar apply for registration?", ["60 days", "Six months", "One year", "Seven days"], 0, "Section 6."),
      q("What must the six-worker kiosk file?", ["An intimation in Form F", "Registration in Form A", "Nothing at all", "Form R"], 0, "Fewer than ten workers."),
      q("What is the maximum validity of a registration certificate?", ["Ten years", "One year", "Five years", "Lifetime"], 0, "As requested, up to ten years."),
      q("Within how long must a change in registered details be notified?", ["30 days", "Seven days", "Six months", "At renewal"], 0, "Form I."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Register or intimate?",
          ["A tea stall has 3 workers, a salon has 11, and a CA office has 9. What does each file?"],
          ["Tea stall: intimation (Form F). Salon: registration (Form A). CA office: intimation (Form F)."],
        ],
        [
          "Exercise 2 — Renewal date",
          ["A certificate expires on 30 September 2029. By when should renewal be applied for?"],
          ["At least 30 days before — by 31 August 2029."],
        ],
      ),
    ),
    summary(
      ["Ten-worker threshold", "Form A registration and Form F intimation", "No fee — only service charges", "Validity up to ten years and renewal", "Changes in Form I within 30 days"],
      "Register or give intimation within 60 days, renew on time, and report changes promptly.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Working Hours, Rest and Opening Times",
      ["The Act limits how long workers can work and when they must rest. Priya designs Kesar's roster within those limits."],
      ["Apply the 9-hour and 48-hour limits", "Schedule rest intervals and spread-over", "Calculate overtime pay and track the quarterly cap", "Give weekly holidays and compensatory off", "Understand opening hours and seven-day trading"],
    ),
    screen(
      "Hour limits",
      table(
        ["Rule", "Maharashtra Act, 2017"],
        [
          ["Daily hours", "Not more than 9 hours"],
          ["Weekly hours", "Not more than 48 hours"],
          ["Rest interval", "At least half an hour after 5 hours of continuous work"],
          ["Spread-over", "Not more than 10½ hours a day (12 hours for intermittent or urgent work)"],
          ["Week", "Seven days beginning at midnight of Saturday"],
        ],
      ),
    ),
    screen(
      "Anil's shift",
      p("Spread-over is the time between starting and finishing work on a day, including rest."),
      example([["Starts", "10:00 am"], ["Rest interval", "3:00 – 3:30 pm"], ["Finishes", "7:30 pm"], ["Hours worked", "9"]], ["Spread-over", "9½ hours"]),
      note("He works 5 hours (10–3) before his break, so the rest interval comes in time. The spread-over is within 10½ hours."),
    ),
    screen(
      "Overtime",
      bullets(
        "Work beyond 9 hours a day or 48 hours a week is overtime.",
        "Overtime is paid at twice the ordinary rate of wages.",
        "Total overtime can't exceed 125 hours in any three months.",
      ),
      example([["Fatima's ordinary hourly rate", "₹110"], ["Overtime rate: × 2", "₹220"], ["Overtime in a busy Diwali week", "6 hours"]], ["Overtime pay", "₹1,320"]),
      caution("Track overtime per worker per quarter. If Rohit has already worked 120 overtime hours since October, he can only do 5 more before the quarter ends."),
    ),
    screen(
      "Weekly holiday and seven-day trading",
      bullets(
        "Every worker gets a weekly holiday with wages.",
        "An establishment may open on all seven days of the week, as long as each worker gets at least 24 consecutive hours of rest a week.",
        "If a worker's weekly holiday is denied, compensatory leave must be given within two months.",
        "Shift hours and weekly offs must be told to workers in writing in advance and sent to the Facilitator.",
      ),
      tip("Stagger the offs", "Kesar opens every day. Priya gives each worker a different fixed weekly off so the showroom is always staffed."),
    ),
    screen(
      "Opening and closing hours",
      p("The state government can fix opening and closing hours for different classes of establishments, areas or periods by notification. Priya checks the current notification for Pune before setting the mall kiosk's timings."),
      steps(
        ["Display hours", "Show the hours of work, rest interval and weekly holiday on a notice in Form M — at the premises and on the website."],
        ["Shift schedule", "If working in shifts, display the shift schedule and weekly holidays in Form N in advance."],
        ["No overlapping relays", "Don't run overlapping shifts doing the same work at the same time."],
      ),
    ),
    mistakes(
      ["Counting only the 9-hour limit", "The 48-hour weekly limit applies too."],
      ["Paying overtime at the normal rate", "It's twice the ordinary rate."],
      ["Ignoring the 125-hour cap", "Track overtime per worker per quarter."],
      ["Giving no weekly off when trading seven days", "Each worker needs 24 consecutive hours off."],
    ),
    check(
      3,
      q("What's the maximum ordinary working time a day under the Maharashtra Act?", ["9 hours", "8 hours", "10½ hours", "12 hours"], 0, "And 48 hours a week."),
      q("After how many hours of continuous work must a rest interval be given?", ["5 hours", "3 hours", "6 hours", "8 hours"], 0, "At least half an hour."),
      q("What is the normal spread-over limit?", ["10½ hours", "9 hours", "12 hours", "8 hours"], 0, "12 hours only for intermittent or urgent work."),
      q("At what rate is overtime paid?", ["Twice the ordinary rate", "1.5 times the ordinary rate", "The ordinary rate", "A fixed ₹100 an hour"], 0, "Section 15."),
      q("What's the maximum overtime in any three months?", ["125 hours", "50 hours", "75 hours", "200 hours"], 0, "Section 15."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Check the roster",
          ["Sneha works 12:00 noon to 10:30 pm with a one-hour break from 5:00 to 6:00 pm. Is this within the limits?"],
          ["Hours worked: 9½ — 30 minutes of overtime. Spread-over 10½ hours — at the limit. Rest interval after 5 hours — fine. (Night-work rules for women are covered in Module 5.)"],
        ],
        [
          "Exercise 2 — Overtime pay",
          ["Rohit's ordinary hourly rate is ₹95. He worked 51 hours this week, never more than 9 hours on any day. What overtime is due?"],
          ["3 hours over 48 × ₹190 = ₹570."],
        ],
      ),
    ),
    summary(
      ["9 hours a day, 48 a week", "Rest after 5 hours", "Spread-over 10½ hours", "Overtime at double rate, 125 hours a quarter", "Weekly holiday and seven-day trading"],
      "Build rosters that respect daily, weekly and quarterly limits, and display them.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Leave and Holidays",
      ["The Act sets minimum leave and holidays. Priya builds Kesar's leave policy and keeps the leave records."],
      ["Apply casual leave rules", "Calculate earned leave", "Handle new joiners' leave", "Apply the accumulation and encashment rules", "Give the festival holidays"],
    ),
    screen(
      "Casual leave",
      bullets(
        "Every worker gets eight days' casual leave with wages in each calendar year.",
        "It's credited quarterly — two days a quarter.",
        "Unused casual leave lapses at the end of the year.",
      ),
    ),
    screen(
      "Earned leave",
      p("A worker who has worked 240 days or more in a calendar year gets earned leave in the next year at one day for every 20 days worked."),
      example([["Anil's days worked in 2025", "260"], ["Rate: 1 day per 20 days", "÷ 20"]], ["Earned leave for 2026", "13 days"]),
      note("Days of lay-off, maternity leave, earned leave taken in the previous year and absence from a work injury are treated as days worked for this purpose."),
    ),
    screen(
      "New joiners",
      p("A worker employed for at least three months in a year gets leave of up to five days for every 60 days worked during that year."),
      example([["Deepa joined the kiosk", "1 August 2026"], ["Days worked by 31 December", "125"], ["Complete 60-day blocks", "2"]], ["Leave allowed", "Up to 10 days"]),
    ),
    screen(
      "Accumulation and encashment",
      bullets(
        "Earned leave can be accumulated up to 45 days.",
        "If leave applied for 15 days in advance is refused, the worker can encash leave above 45 days.",
        "If a worker leaves through retirement, resignation, death or discharge before taking due leave, it must be paid for.",
      ),
    ),
    screen(
      "Festival holidays",
      p("Every worker gets eight paid festival holidays a year:"),
      table(
        ["Fixed", "Agreed"],
        [
          ["26 January — Republic Day", "Four other festivals agreed between employer and workers"],
          ["1 May — Maharashtra Day", ""],
          ["15 August — Independence Day", ""],
          ["2 October — Gandhi Jayanti", ""],
        ],
      ),
      tip("Agree in advance", "Priya agrees Kesar's four festival holidays — such as Diwali, Gudi Padwa, Ganesh Chaturthi and Christmas — at the start of the year and displays them."),
    ),
    mistakes(
      ["Carrying casual leave forward", "It lapses at year-end."],
      ["Giving earned leave in the first year to everyone", "Full entitlement follows 240 days worked; new joiners get the pro-rata rule."],
      ["Ignoring the 45-day cap", "Accumulation is limited to 45 days."],
      ["Paying only four national holidays", "Eight festival holidays are due."],
    ),
    check(
      4,
      q("How many days' casual leave does a worker get each year?", ["Eight", "Twelve", "Five", "Fifteen"], 0, "Credited quarterly; lapses at year-end."),
      q("What happens to unused casual leave at year-end?", ["It lapses", "It's carried forward", "It's encashed automatically", "It's added to earned leave"], 0, "Section 18(2)."),
      q("How many days must be worked in a year to qualify for earned leave the next year?", ["240", "180", "120", "300"], 0, "Then 1 day per 20 days worked."),
      q("Up to how many days of earned leave can be accumulated?", ["45", "30", "60", "90"], 0, "Excess can be encashed if leave is refused."),
      q("How many paid festival holidays are due a year in Maharashtra?", ["Eight", "Four", "Ten", "Twelve"], 0, "Four fixed and four agreed."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Earned leave",
          ["Fatima worked 248 days in 2025 and Rohit 230 days. What earned leave does each get in 2026?"],
          ["Fatima: 248 ÷ 20 = 12 days (complete days). Rohit: under 240 days, so no earned leave under the 240-day rule."],
        ],
        [
          "Exercise 2 — Leaving employee",
          ["Anil resigns with 20 days of earned leave due. His daily wage is ₹900. What's paid?"],
          ["20 × ₹900 = ₹18,000 for the unavailed leave."],
        ],
      ),
    ),
    summary(
      ["Eight casual leave days, credited quarterly", "Earned leave at 1 per 20 days after 240 days", "New joiners: 5 days per 60 days", "45-day accumulation and encashment", "Eight festival holidays"],
      "Keep a leave register per worker and apply the year's entitlements consistently.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Women's Employment and Night Work",
      ["The Act protects women workers from discrimination and allows night work only with consent and safeguards. Kesar wants Sneha and two colleagues to staff an evening customer-support desk."],
      ["Apply the non-discrimination rule", "Know the normal hours for women", "Set up night work with consent and safeguards", "Provide transport and other facilities", "Link to the POSH law"],
    ),
    screen(
      "No discrimination",
      p("No woman worker can be discriminated against in recruitment, training, transfers, promotion or wages."),
    ),
    screen(
      "Normal hours for women",
      p("Women workers normally work only between 7:00 am and 9:30 pm."),
      p("They may work between 9:30 pm and 7:00 am with their consent, if the employer provides adequate protection of their dignity, honour and safety, protection from sexual harassment, and transport to the doorstep of their homes."),
      caution("The state government can still prohibit or regulate women's night work in particular areas by notification."),
    ),
    screen(
      "Night-shift safeguards under the 2018 rules",
      steps(
        ["Consent", "Get each woman worker's written consent in Form L."],
        ["At least three", "Not fewer than three women workers on the night shift at any time."],
        ["Transport", "Safe, separate transport from the workplace to the doorstep and back, with police verification of drivers and guards."],
        ["Extra holiday", "One additional paid holiday for every two months of night work."],
        ["Rest gap", "At least 12 consecutive hours between the last day shift and a night shift."],
        ["Security", "A complaint box, displayed helpline numbers, and women security guards where ten or more women work."],
      ),
    ),
    screen(
      "Kesar's evening desk",
      table(
        ["Requirement", "Kesar's plan"],
        [
          ["Consent", "Form L signed by Sneha, Pooja and Leena"],
          ["Minimum three women", "All three on the same shift"],
          ["Transport", "Contracted cab with verified driver, door-to-door"],
          ["Extra holiday", "One additional paid day every two months"],
        ],
      ),
    ),
    screen(
      "Facilities and POSH",
      bullets(
        "Crèche — establishments with 50 or more workers must provide one (a common crèche within one kilometre may be allowed).",
        "Clean, separate toilets and washrooms, safe for women.",
        "The Sexual Harassment of Women at Workplace Act, 2013 (POSH) applies alongside the Shops Act — an Internal Committee is required where there are ten or more employees.",
      ),
      note("Kesar has 14 workers at the showroom, so it needs an Internal Committee under POSH, but not yet a crèche."),
    ),
    mistakes(
      ["Rostering women after 9:30 pm without consent", "Written consent in Form L is required."],
      ["Putting one or two women on a night shift", "At least three are required."],
      ["Giving a travel allowance instead of transport", "Doorstep transport must be provided."],
      ["Forgetting the extra paid holiday", "One every two months of night work."],
    ),
    check(
      5,
      q("Between which hours do women normally work under the Maharashtra Act?", ["7:00 am to 9:30 pm", "6:00 am to 10:00 pm", "8:00 am to 8:00 pm", "9:00 am to 6:00 pm"], 0, "Night work needs consent and safeguards."),
      q("Which form records a woman worker's consent to night work?", ["Form L", "Form A", "Form R", "Form Q"], 0, "Under the 2018 rules."),
      q("What's the minimum number of women on a night shift?", ["Three", "One", "Two", "Five"], 0, "At any point of time."),
      q("What extra benefit do women on night shifts get?", ["One additional paid holiday every two months", "Double wages for all hours", "A one-time bonus", "Nothing extra"], 0, "Under the 2018 rules."),
      q("From how many workers must an establishment provide a crèche?", ["50", "10", "20", "100"], 0, "Section 23."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Night shift check",
          ["Kesar plans two women for a 9:00 pm – 1:00 am shift, with a ₹200 travel allowance. What's wrong?"],
          ["Only two women (three needed), no doorstep transport, and consent in Form L must be taken."],
        ],
        [
          "Exercise 2 — Rest gap",
          ["Sneha's day shift ends at 7:00 pm on Monday. When can her first night shift start?"],
          ["At least 12 consecutive hours later — no earlier than 7:00 am Tuesday, so the next night shift that evening."],
        ],
      ),
    ),
    summary(
      ["Equal treatment", "Normal hours 7:00 am – 9:30 pm", "Consent, three women and transport for night work", "Extra holiday and rest gap", "Crèche and POSH"],
      "Night work for women is allowed — but only with consent and every safeguard in place.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Records, Notices and Inspections",
      ["Good records prove compliance. Priya prepares Kesar for an inspection."],
      ["Keep the muster-roll cum wages register", "Display the required notices", "File the annual return", "Understand inspections and penalties", "Use the compliance checklist"],
    ),
    screen(
      "Registers and records",
      bullets(
        "A muster-roll cum wages register in Form Q, with entries authenticated digitally or manually.",
        "Overtime entries made promptly.",
        "Leave records and identity cards issued to every worker.",
        "Registration certificate or intimation receipt.",
      ),
      note("If an employer already keeps a muster-roll cum wages register under minimum wage rules, it needn't keep a separate Form Q."),
    ),
    screen(
      "Notices to display",
      table(
        ["Notice", "Form"],
        [
          ["Hours of work, rest interval and weekly holiday", "Form M"],
          ["Shift schedule and weekly holidays", "Form N"],
          ["Registration certificate", "—"],
          ["Helpline numbers (where women work at night)", "—"],
        ],
      ),
    ),
    screen(
      "Annual return",
      p("Every employer uploads an annual return in Form R online within two months of the year ending 31 December."),
      example([["Year ending", "31 December 2026"], ["Two months later", ""]], ["Upload by", "28 February 2027"]),
    ),
    screen(
      "Inspections and penalties",
      bullets(
        "Facilitators can inspect establishments and ask for registers and certificates.",
        "Breaking the Act or rules: fine up to ₹1 lakh, plus up to ₹2,000 a day for a continuing breach.",
        "Repeat offence of the same provision: fine up to ₹2 lakh.",
        "Many offences can be compounded by applying in Form S — but not a repeat within five years.",
      ),
    ),
    screen(
      "Kesar's compliance checklist",
      steps(
        ["Registration", "Showroom Form A certificate; kiosk Form F receipt."],
        ["Rosters", "Within 9/48 hours, rest after 5 hours, spread-over 10½ hours."],
        ["Overtime", "Double rate; under 125 hours a quarter."],
        ["Leave", "8 casual, earned leave, 8 festival holidays."],
        ["Women at night", "Form L, three women, transport."],
        ["Records", "Form Q, Forms M and N displayed, Form R by end-February."],
      ),
    ),
    mistakes(
      ["Missing the annual return", "Upload Form R within two months of year-end."],
      ["Not displaying Form M", "Show hours, rest and weekly holidays."],
      ["Unauthenticated register entries", "Each entry must be authenticated."],
      ["Ignoring a continuing breach", "Daily fines can add up."],
    ),
    check(
      6,
      q("Which form is the muster-roll cum wages register?", ["Form Q", "Form A", "Form M", "Form L"], 0, "Rule 26."),
      q("What's the deadline for the annual return for calendar year 2026?", ["28 February 2027", "31 March 2027", "31 January 2027", "30 April 2027"], 0, "Within two months."),
      q("Which form shows hours of work, rest interval and weekly holiday?", ["Form M", "Form N", "Form R", "Form I"], 0, "Display at premises and on the website."),
      q("What's the maximum fine for a first breach?", ["₹1 lakh", "₹10,000", "₹5 lakh", "₹50,000"], 0, "Plus up to ₹2,000 a day if continuing."),
      q("Which form is used to apply for compounding?", ["Form S", "Form R", "Form Q", "Form K"], 0, "Rule 31."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Inspection ready?",
          ["List what Priya should have ready for an inspection of the showroom."],
          ["Registration certificate, Form Q register, leave records, identity cards, Form M and N notices, Form L consents and transport records, and last year's Form R."],
        ],
        [
          "Exercise 2 — Continuing breach",
          ["An inspector finds no Form M displayed and the breach continues for 10 days after the conviction. What's the maximum additional fine?"],
          ["Up to ₹2,000 × 10 = ₹20,000, on top of the fine for the offence itself."],
        ],
      ),
    ),
    summary(
      ["Form Q register", "Form M and N notices", "Form R annual return", "Fines and compounding", "The checklist"],
      "Keep registers current, display the notices, and file the annual return on time.",
    ),
  ],
}

export default lessons
