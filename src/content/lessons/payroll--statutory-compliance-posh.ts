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

// Statutory Compliance: POSH — lesson screens by module index (0 = Module 1).
// The course follows Arcus Marketing Pvt Ltd, an 85-employee agency in
// Hyderabad, under the Sexual Harassment of Women at Workplace (Prevention,
// Prohibition and Redressal) Act, 2013 and the 2013 rules. Case details are
// fictional and anonymised; this is compliance training, not legal advice.

const lessons: CourseLessons = {
  0: [
    overview(
      "Module 1 — Understanding the POSH Act",
      ["The POSH Act requires every employer to prevent sexual harassment of women at the workplace and to handle complaints fairly. This module explains the Act through Arcus Marketing."],
      ["Explain the purpose of the Act", "Recognise what counts as sexual harassment", "Apply the wide meaning of “workplace”", "Identify who is protected", "Know that every employer has duties"],
    ),
    screen(
      "Meet Arcus Marketing",
      p("Arcus Marketing Pvt Ltd is a marketing agency in Hyderabad with 85 employees, plus interns and freelancers. Farah, its HR head, is responsible for POSH compliance. Arcus's teams travel often for client events."),
    ),
    screen(
      "Purpose of the Act",
      bullets(
        "Prevent sexual harassment of women at the workplace.",
        "Prohibit it — it's a violation of the right to equality and to work with dignity.",
        "Provide a redressal mechanism through committees with fixed timelines.",
      ),
      note("The Act grew out of the Supreme Court's Vishaka guidelines of 1997."),
    ),
    screen(
      "What counts as sexual harassment",
      p("Any one or more of these unwelcome acts or behaviour, directly or by implication:"),
      bullets(
        "Physical contact and advances.",
        "A demand or request for sexual favours.",
        "Making sexually coloured remarks.",
        "Showing pornography.",
        "Any other unwelcome physical, verbal or non-verbal conduct of a sexual nature.",
      ),
      caution("Implied or explicit promises of preferential treatment, threats about employment, interference with work, or creating a hostile environment connected to such conduct also amount to harassment."),
    ),
    screen(
      "What counts as a workplace",
      table(
        ["Covered", "Example at Arcus"],
        [
          ["The office", "Hyderabad office"],
          ["Any place visited arising out of or during employment", "A client's office, an event venue"],
          ["Transport provided by the employer", "The company cab to an event"],
          ["Work-related travel", "Hotel during an out-of-town campaign"],
          ["Dwelling place or house", "Where a domestic worker works"],
        ],
      ),
      note("Harassment over messaging or video calls in the course of work is also treated seriously under the employer's policy."),
    ),
    screen(
      "Who is protected",
      compare(
        ["Aggrieved woman", "Any woman, of any age, whether employed or not, who alleges harassment at the workplace.", ["Employees — permanent, temporary, contract", "Interns, trainees, apprentices", "Visitors and client staff"]],
        ["Respondent", "The person against whom the complaint is made.", ["Can be any person", "Including a client or vendor"]],
      ),
    ),
    mistakes(
      ["Treating the office as the only workplace", "Travel, client sites and transport are covered."],
      ["Excluding interns", "Any woman at the workplace is protected."],
      ["Judging by intent", "What matters is that the conduct is unwelcome."],
      ["Thinking small firms have no duties", "Every employer must prevent harassment."],
    ),
    check(
      1,
      q("Which of these is sexual harassment under the Act?", ["Sexually coloured remarks that are unwelcome", "A performance review", "Assigning a deadline", "A transfer for business reasons"], 0, "Unwelcome conduct of a sexual nature."),
      q("Is a client's office visited for work a “workplace”?", ["Yes", "No", "Only if in the same city", "Only with HR's approval"], 0, "Any place visited arising out of employment."),
      q("Is an intern protected under the Act?", ["Yes", "No", "Only if paid", "Only after six months"], 0, "Any woman at the workplace."),
      q("Which Supreme Court guidelines preceded the Act?", ["Vishaka guidelines, 1997", "Puttaswamy, 2017", "Olga Tellis, 1985", "Maneka Gandhi, 1978"], 0, "Vishaka v. State of Rajasthan."),
      q("Is transport provided by the employer part of the workplace?", ["Yes", "No", "Only at night", "Only in metro cities"], 0, "Expressly included."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Is it covered?",
          ["A visiting vendor makes repeated sexual comments to an Arcus designer at a trade fair stall. Is this covered?"],
          ["Yes — the stall is a workplace visited in the course of employment, and the comments are unwelcome sexually coloured remarks."],
        ],
        [
          "Exercise 2 — Who is protected?",
          ["A client's employee visiting Arcus's office faces harassment by an Arcus manager. Can she complain to Arcus's Internal Committee?"],
          ["Yes — any woman at the workplace, employed there or not, is protected."],
        ],
      ),
    ),
    summary(
      ["Purpose of the Act", "Definition of harassment", "Wide meaning of workplace", "Who is protected", "Arcus Marketing's case"],
      "Harassment is judged by whether conduct is unwelcome, wherever work takes people.",
    ),
  ],

  1: [
    overview(
      "Module 2 — The Internal Committee",
      ["Arcus must constitute an Internal Committee. Farah sets one up correctly."],
      ["Know when an Internal Committee is required", "Choose the presiding officer", "Add employee and external members", "Meet the gender rule", "Understand the Local Committee"],
    ),
    screen(
      "When it's required",
      p("Every employer with ten or more employees must constitute an Internal Committee (IC) by written order — at each office or branch with ten or more employees."),
    ),
    screen(
      "Composition",
      table(
        ["Role", "Requirement"],
        [
          ["Presiding officer", "A woman employed at a senior level"],
          ["Employee members", "At least two, preferably committed to the cause of women or with social work or legal experience"],
          ["External member", "One, from an NGO or association committed to women's causes, or familiar with sexual harassment issues"],
          ["Women members", "At least half of all members"],
          ["Term", "Not more than three years"],
        ],
      ),
    ),
    screen(
      "Arcus's Internal Committee",
      table(
        ["Member", "Role"],
        [
          ["Shalini (Vice-President, Client Services)", "Presiding officer"],
          ["Ravi (Finance Manager)", "Employee member"],
          ["Sameera (Senior Designer)", "Employee member"],
          ["Advocate from a women's rights NGO", "External member"],
        ],
      ),
      example([["Members", "4"], ["Women members", "3"]], ["Meets the half rule?", "Yes"]),
      tip("External member's fees", "The rules provide for the external member to be paid ₹200 a day for proceedings plus travel costs. Many employers pay more by agreement."),
    ),
    screen(
      "The Local Committee",
      compare(
        ["Internal Committee", "Set up by the employer.", ["Workplaces with ten or more employees"]],
        ["Local Committee", "Set up by the District Officer in every district.", ["Workplaces with fewer than ten employees", "Complaints against the employer", "Domestic workers"]],
      ),
      note("A complaint against Arcus's managing director would go to the Local Committee, not the IC."),
    ),
    mistakes(
      ["No external member", "One external member is mandatory."],
      ["Fewer than half women", "At least half must be women."],
      ["A junior presiding officer", "She must be at a senior level."],
      ["Letting the term lapse", "Reconstitute before three years end."],
    ),
    check(
      2,
      q("From how many employees must an employer set up an IC?", ["Ten", "Fifty", "One", "Twenty"], 0, "At each office with ten or more employees."),
      q("Who presides over the IC?", ["A woman employed at a senior level", "The managing director", "The external member", "Any employee"], 0, "Section 4."),
      q("What proportion of IC members must be women?", ["At least half", "At least one-third", "All", "At least one"], 0, "Section 4."),
      q("What's the maximum term of IC members?", ["Three years", "One year", "Five years", "No limit"], 0, "From the date of nomination."),
      q("Who handles a complaint against the employer?", ["The Local Committee", "The IC", "The police only", "The auditor"], 0, "Set up by the District Officer."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Check the committee",
          ["A firm's IC has a senior woman presiding officer and two male employee members, but no external member. What's wrong?"],
          ["It has no external member, and with only one woman out of three it fails the half rule."],
        ],
        [
          "Exercise 2 — Branch offices",
          ["Arcus opens a 12-person office in Vizag. What must it do?"],
          ["Constitute an IC for the Vizag office, as it has ten or more employees."],
        ],
      ),
    ),
    summary(
      ["IC at ten or more employees", "Senior woman presiding officer", "Two employee members and one external member", "Half women; three-year term", "The Local Committee"],
      "A properly constituted committee is the foundation of POSH compliance.",
    ),
  ],

  2: [
    overview(
      "Module 3 — Complaints and Conciliation",
      ["Divya, an Arcus account executive, reports unwelcome remarks by a team lead during an out-of-town event. Farah and the IC handle her complaint."],
      ["Apply the time limit for complaints", "Help put a complaint in writing", "Use the SHe-Box portal", "Offer conciliation", "Give interim relief"],
    ),
    screen(
      "Time limits",
      bullets(
        "A complaint is made in writing within three months of the incident — or of the last incident, if there's a series.",
        "The IC can extend this by up to three more months if circumstances prevented the woman from filing in time, recording its reasons in writing.",
        "Where the woman can't complain herself, her legal heir or other persons allowed by the rules may complain.",
      ),
      example([["Last incident", "12 September 2026"], ["Normal time limit", "Three months"]], ["File by", "11 December 2026 (extendable)"]),
    ),
    screen(
      "Helping her file",
      steps(
        ["Written complaint", "If she can't write it, any IC member gives reasonable help."],
        ["Copies", "She submits copies with supporting documents and names of witnesses."],
        ["To the respondent", "The IC sends a copy to the respondent within seven working days."],
        ["Reply", "The respondent replies within ten working days of receiving it."],
      ),
    ),
    screen(
      "SHe-Box",
      p("The Sexual Harassment electronic Box (SHe-Box) is the Ministry of Women and Child Development's online portal for complaints. A complaint lodged there is sent to the IC or Local Committee concerned, which must act on it within the Act's timelines."),
    ),
    screen(
      "Conciliation",
      bullets(
        "Before starting an inquiry, the IC may try conciliation — only at the woman's request.",
        "No monetary settlement can be the basis of conciliation.",
        "If settled, the IC records it and no inquiry follows. If the terms aren't complied with, the inquiry goes ahead.",
      ),
      caution("Never pressure a complainant to settle."),
    ),
    screen(
      "Interim relief",
      p("During the inquiry, on the woman's written request, the IC may recommend that the employer:"),
      bullets(
        "Transfer her or the respondent to another workplace.",
        "Grant her leave of up to three months, in addition to her normal leave.",
        "Restrain the respondent from reporting on her work or writing her appraisal.",
      ),
    ),
    mistakes(
      ["Refusing a late complaint without considering an extension", "The IC can extend by up to three months."],
      ["Pushing conciliation", "Only at the complainant's request."],
      ["Settling with money", "Monetary settlement can't be the basis."],
      ["Ignoring SHe-Box complaints", "They're handled like any other."],
    ),
    check(
      3,
      q("Within how long of the incident should a complaint normally be filed?", ["Three months", "One month", "One year", "Seven days"], 0, "Extendable by up to three months."),
      q("Who can request conciliation?", ["Only the complainant", "The respondent", "The employer", "The IC on its own"], 0, "Section 10."),
      q("Can money be the basis of conciliation?", ["No", "Yes", "Up to ₹50,000", "Only with HR's approval"], 0, "No monetary settlement."),
      q("How much extra leave can be given as interim relief?", ["Up to three months", "One week", "Six months", "One year"], 0, "On the IC's recommendation."),
      q("Which ministry runs SHe-Box?", ["Ministry of Women and Child Development", "Ministry of Finance", "Ministry of Home Affairs", "Ministry of Commerce"], 0, "Online complaints."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Late complaint",
          ["A complaint arrives four months after the last incident; the woman was hospitalised for two months. What should the IC do?"],
          ["Consider extending the time by up to three months, recording its reasons, and accept the complaint."],
        ],
        [
          "Exercise 2 — Interim relief",
          ["Divya's appraisal is due and the respondent is her reporting manager. What can the IC recommend?"],
          ["That he's restrained from writing her appraisal — another manager does it — and, if she asks, a transfer or extra leave."],
        ],
      ),
    ),
    summary(
      ["Three-month time limit", "Help with written complaints", "SHe-Box", "Conciliation without money", "Interim relief"],
      "Make it easy to complain, and protect the complainant while the inquiry runs.",
    ),
  ],

  3: [
    overview(
      "Module 4 — Inquiry and Action",
      ["The IC inquires into Divya's complaint and Arcus acts on its report."],
      ["Run a fair inquiry", "Meet the 90-day, 10-day and 60-day deadlines", "Apply the action options", "Handle false complaints correctly", "Protect confidentiality and appeals"],
    ),
    screen(
      "A fair inquiry",
      bullets(
        "Follow the principles of natural justice — both sides are heard.",
        "The IC has civil-court powers to summon people, require documents and examine them on oath.",
        "At least three members, including the presiding officer, must be present for the inquiry.",
        "Legal practitioners aren't allowed to represent either party.",
      ),
    ),
    screen(
      "The timeline",
      table(
        ["Step", "Time limit"],
        [
          ["Complete the inquiry", "Within 90 days"],
          ["Report to the employer", "Within 10 days of completing the inquiry"],
          ["Employer acts on the recommendations", "Within 60 days of receiving the report"],
          ["Appeal against the recommendations", "Within 90 days of the recommendations"],
        ],
      ),
      example([["Complaint received", "2 October 2026"], ["Inquiry completed", "20 December 2026"], ["Report due by", "30 December 2026"]], ["Arcus must act by", "60 days after receiving the report"]),
    ),
    screen(
      "Action if proved",
      steps(
        ["Service rules", "Action as misconduct under service rules — written apology, warning, withholding of promotion or increment, termination, counselling or community service."],
        ["Compensation", "Deduction from the respondent's salary for compensation to the woman, considering her mental trauma, loss of career opportunity, medical expenses and the respondent's means."],
      ),
    ),
    screen(
      "False or malicious complaints",
      p("Action can be recommended against a complainant only if the IC concludes the complaint was malicious or knowingly false. Failure to prove a complaint, or lack of evidence, isn't enough."),
      caution("Malice must be established after an inquiry."),
    ),
    screen(
      "Confidentiality",
      p("The identity and addresses of the woman, respondent and witnesses, the inquiry proceedings, recommendations and action taken can't be published or disclosed to the public or media."),
      note("Information on justice secured can be shared without disclosing names or identifying details. Breach can attract a penalty under the rules."),
    ),
    mistakes(
      ["Letting the inquiry drift past 90 days", "Plan hearings from day one."],
      ["Punishing an unproved complaint", "Only malice proved after inquiry justifies action."],
      ["Allowing lawyers at hearings", "Legal practitioners aren't allowed."],
      ["Sharing details internally", "Everything is confidential."],
    ),
    check(
      4,
      q("Within how many days must the inquiry be completed?", ["90", "30", "60", "180"], 0, "Section 11."),
      q("Within how long of completing the inquiry is the report given?", ["10 days", "30 days", "90 days", "60 days"], 0, "Section 13."),
      q("Within how long must the employer act on the report?", ["60 days", "10 days", "90 days", "One year"], 0, "Section 13."),
      q("When can a complainant be penalised for a false complaint?", ["Only if malice is proved after inquiry", "Whenever the complaint isn't proved", "Always", "If the respondent asks"], 0, "Section 14."),
      q("Can legal practitioners represent the parties at the inquiry?", ["No", "Yes", "Only the respondent", "Only the complainant"], 0, "Under the rules."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Deadlines",
          ["The IC completes an inquiry on 15 January 2027 and reports on 22 January. By when must Arcus act?"],
          ["Within 60 days of receiving the report — by 23 March 2027."],
        ],
        [
          "Exercise 2 — Not proved",
          ["The IC finds Divya's complaint not proved due to lack of witnesses. The respondent wants her disciplined. What should Farah say?"],
          ["No — lack of proof isn't malice. Action is possible only if the IC finds the complaint malicious or knowingly false."],
        ],
      ),
    ),
    summary(
      ["Natural justice and civil powers", "90/10/60-day timeline", "Service-rule action and compensation", "Malicious complaints", "Confidentiality and appeals"],
      "Fair, timely and confidential — that's what makes an inquiry stand.",
    ),
  ],

  4: [
    overview(
      "Module 5 — Employer Duties",
      ["Beyond the IC, Arcus has duties to prevent harassment. Farah plans the year's programme."],
      ["List the employer's duties", "Display the required information", "Run awareness and training", "Support the IC", "Know the penalties"],
    ),
    screen(
      "The employer's duties",
      bullets(
        "Provide a safe working environment, including from people who come into contact at work.",
        "Display the penal consequences of harassment and the order constituting the IC at a conspicuous place.",
        "Organise workshops and awareness programmes regularly, and orientation for IC members.",
        "Provide facilities for the IC to deal with complaints and conduct inquiries.",
        "Help secure the attendance of the respondent and witnesses.",
        "Treat sexual harassment as misconduct under service rules.",
        "Monitor timely submission of IC reports.",
      ),
    ),
    screen(
      "Arcus's annual programme",
      table(
        ["Quarter", "Activity"],
        [
          ["Q1", "Induction session for new joiners and interns"],
          ["Q2", "Training for IC members"],
          ["Q3", "All-staff awareness workshop, including managers"],
          ["Q4", "Policy review and refresher for client-facing teams"],
        ],
      ),
      tip("Keep proof", "Keep attendance sheets and session materials as evidence of compliance."),
    ),
    screen(
      "Assisting with criminal complaints",
      p("If the woman chooses to file a complaint under the criminal law, the employer must help her. Where the respondent isn't an employee, the employer must initiate action against the perpetrator under the law."),
    ),
    screen(
      "Penalties",
      table(
        ["Breach", "Penalty"],
        [
          ["Failing to constitute an IC, act on recommendations or other duties", "Fine up to ₹50,000"],
          ["Repeat offence", "Twice the punishment, or cancellation of licence or registration"],
        ],
      ),
    ),
    mistakes(
      ["Training only once", "Run regular sessions."],
      ["Not displaying the IC order", "Display it conspicuously."],
      ["Leaving the IC without resources", "Provide facilities."],
      ["Ignoring third-party harassers", "Act against clients or vendors too."],
    ),
    check(
      5,
      q("What must the employer display at a conspicuous place?", ["Penal consequences and the IC order", "Only the company logo", "Salary slabs", "GST registration"], 0, "Section 19."),
      q("What's the fine for failing to constitute an IC?", ["Up to ₹50,000", "Up to ₹5,000", "Up to ₹5 lakh", "Nothing"], 0, "Section 26."),
      q("What can happen on a repeat offence?", ["Twice the punishment or cancellation of licence", "A warning only", "Nothing", "A tax refund"], 0, "Section 26."),
      q("How should the employer treat sexual harassment under service rules?", ["As misconduct", "As a minor issue", "As a private matter", "As a performance issue"], 0, "Section 19."),
      q("How often must awareness programmes be held?", ["At regular intervals", "Once at incorporation", "Never", "Only after a complaint"], 0, "Section 19."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Third-party harasser",
          ["A client's manager harasses an Arcus employee at the client's office. What must Arcus do?"],
          ["Take the complaint through the IC, support the employee, and initiate action against the client's manager — including helping with a criminal complaint if she chooses."],
        ],
        [
          "Exercise 2 — Inspection check",
          ["What would show an inspector that Arcus meets its employer duties?"],
          ["The IC order displayed, consequences displayed, workshop attendance records, IC training records, the policy and timely IC reports."],
        ],
      ),
    ),
    summary(
      ["Safe environment", "Display requirements", "Regular awareness and IC training", "Support and third-party action", "Penalties"],
      "Prevention is a year-round duty, not just a committee.",
    ),
  ],

  5: [
    overview(
      "Module 6 — Policy, Records and Annual Report",
      ["Farah finalises Arcus's POSH policy and the year's reporting."],
      ["Write a POSH policy", "Keep complaint records", "Prepare the IC's annual report", "Make company report disclosures", "Use the compliance checklist"],
    ),
    screen(
      "The POSH policy",
      bullets(
        "Commitment to a workplace free from sexual harassment.",
        "Definitions of harassment and workplace.",
        "IC members and how to contact them.",
        "How to complain, timelines and confidentiality.",
        "Consequences, including for malicious complaints.",
        "Protection against retaliation.",
      ),
    ),
    screen(
      "Records",
      p("Keep a confidential file for each complaint — the complaint, notices, replies, minutes, evidence, the report and the action taken — with access limited to the IC and those who must act on it."),
    ),
    screen(
      "The IC's annual report",
      p("The IC prepares an annual report and submits it to the employer and the District Officer. Under the rules it includes:"),
      bullets(
        "The number of complaints received in the year.",
        "The number disposed of.",
        "The number pending for more than 90 days.",
        "The workshops or awareness programmes held.",
        "The nature of action taken by the employer.",
      ),
      example([["Complaints received in 2026", "3"], ["Disposed of", "2"], ["Pending more than 90 days", "0"]], ["Pending at year-end", "1"]),
    ),
    screen(
      "Company report disclosures",
      bullets(
        "The employer includes the number of cases filed and their disposal in its annual report, or informs the District Officer if it has no annual report.",
        "Companies disclose in the Board's report that they have complied with the provisions on constituting the IC.",
        "From 14 July 2025, the Companies (Accounts) Rules also require the number of complaints received, disposed of and pending for more than 90 days.",
      ),
    ),
    screen(
      "Arcus's POSH checklist",
      steps(
        ["Committee", "IC constituted, half women, external member, within term."],
        ["Display", "IC order and consequences displayed."],
        ["Policy", "Approved, shared and acknowledged."],
        ["Awareness", "Regular workshops; IC trained."],
        ["Complaints", "Handled within 90/10/60 days; confidential files."],
        ["Reporting", "IC annual report; Board's report disclosures."],
      ),
    ),
    mistakes(
      ["A policy no one has read", "Share it and get acknowledgements."],
      ["Open complaint files", "Restrict access."],
      ["Skipping the annual report when there are no complaints", "File it anyway — showing nil."],
      ["Missing Board's report disclosures", "Include IC compliance and complaint numbers."],
    ),
    check(
      6,
      q("To whom does the IC submit its annual report?", ["The employer and the District Officer", "Only the police", "Only the auditor", "The Income Tax Department"], 0, "Section 21."),
      q("Which number must the annual report show?", ["Complaints pending for more than 90 days", "Total salary paid", "GST paid", "Number of clients"], 0, "Under the rules."),
      q("From when must companies disclose complaint numbers in the Board's report?", ["14 July 2025", "1 April 2013", "1 January 2024", "21 November 2025"], 0, "Companies (Accounts) Rules amendment."),
      q("Should the annual report be filed if there were no complaints?", ["Yes, showing nil", "No", "Only every three years", "Only if asked"], 0, "Nil reports show compliance."),
      q("Who should have access to complaint files?", ["Only the IC and those who must act on them", "All employees", "The media", "Any manager"], 0, "Confidentiality."),
    ),
    screen(
      "Practical exercises",
      exercises(
        [
          "Exercise 1 — Annual report",
          ["In 2026 Arcus's IC received 4 complaints, disposed of 3, and one has been pending 100 days. It held 3 workshops. What goes in the report?"],
          ["Received 4, disposed of 3, pending over 90 days 1, workshops 3, and the nature of action taken."],
        ],
        [
          "Exercise 2 — Policy gap",
          ["Arcus's policy doesn't mention interns or client sites. What should be added?"],
          ["That it covers any woman at the workplace, including interns and visitors, and that the workplace includes client sites, travel and employer transport."],
        ],
      ),
    ),
    summary(
      ["The POSH policy", "Confidential records", "IC annual report", "Company report disclosures", "The checklist"],
      "Document everything — and report it every year, even when the answer is nil.",
    ),
  ],
}

export default lessons
