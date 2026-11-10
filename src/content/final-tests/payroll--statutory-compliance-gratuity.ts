import { fq } from "@/lib/finalTest"

// Final test bank for Statutory Compliance: Gratuity — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("How many employees does Orchid Hospitality have?", "180", ["10", "4", "30"], "Across three Goa hotels."),
  fq("Which chapter of the Code on Social Security covers gratuity?", "Chapter V", ["Chapter III", "Chapter I", "Chapter X"], "Replacing the 1972 Act."),
  fq("Which establishments are covered regardless of headcount?", "Factories, mines, oilfields, plantations, ports and railway companies", ["Only shops", "Only offices", "None"], "Shops need 10+ employees."),
  fq("What's an employer obligation for every employee?", "Collecting nominations", ["Collecting PAN of family members", "Opening a bank account for them", "Paying gratuity monthly"], "For payment on death."),
  fq("Does the employee contribute to gratuity?", "No", ["Yes, 12%", "Yes, 0.75%", "Only fixed-term staff"], "Employer-funded."),

  // Module 2
  fq("Why is Rakesh's nominee entitled to gratuity after only 3 years?", "He died in service — no minimum service applies", ["He was fixed-term", "He was a manager", "Three years is the normal minimum"], "Death or disablement."),
  fq("Why does Sunita qualify after 2 years?", "She's a fixed-term employee — one year is enough", ["She resigned", "She retired", "She was disabled"], "Pro-rata under the Code."),
  fq("Which absence still counts as uninterrupted service?", "Leave, sickness and lawful strikes", ["Unauthorised long absence", "Resignation", "Dismissal"], "Continuity rules."),
  fq("How many days in 12 months count for underground mines?", "190", ["240", "180", "365"], "240 elsewhere."),
  fq("An employee is dismissed for riotous conduct. What can happen to gratuity?", "It may be wholly or partly forfeited", ["Nothing", "It doubles", "It's paid to the employer"], "With a termination order."),
  fq("How much must Orchid pay the employee who damaged ₹50,000 of equipment with ₹1,20,000 gratuity?", "₹70,000", ["₹1,20,000", "₹50,000", "Nil"], "Forfeit only to the extent of damage."),

  // Module 3
  fq("What are Joseph's wages for gratuity under the Code?", "₹30,000", ["₹20,000", "₹60,000", "₹24,000"], "₹6,000 added back."),
  fq("What's Joseph's gratuity?", "₹1,38,462", ["₹92,308", "₹1,20,000", "₹2,07,692"], "₹30,000 × 15 ÷ 26 × 8."),
  fq("How many years of service are counted for Joseph?", "8", ["7", "7.67", "9"], "8 months rounds up."),
  fq("What's Rakesh's gratuity?", "₹43,269", ["₹34,615", "₹25,000", "₹75,000"], "₹25,000 × 15 ÷ 26 × 3."),
  fq("How are a piece-rated worker's daily wages worked out?", "Average of total wages for the last three months", ["Last day's wage", "Annual average", "Minimum wage"], "Before termination."),
  fq("Why is 26 used in the formula?", "A month is treated as 26 working days", ["There are 26 weeks in half a year", "It's the tax rate", "It's arbitrary"], "15 ÷ 26 of monthly wages."),

  // Module 4
  fq("What's Anand's calculated gratuity before the ceiling?", "₹25,96,154", ["₹20,00,000", "₹20,76,923", "₹5,96,154"], "₹1,50,000 × 15 ÷ 26 × 30."),
  fq("How much contractual gratuity above the ceiling does Anand receive?", "₹5,96,154", ["Nil", "₹76,923", "₹20,00,000"], "Under the senior policy."),
  fq("By when must Orchid pay Joseph's gratuity?", "2 March 2027", ["31 January 2027", "28 February 2027", "31 March 2027"], "Within 30 days."),
  fq("Who receives Rakesh's gratuity?", "His wife, as nominee", ["Orchid", "The government", "His colleagues"], "₹43,269."),
  fq("How can unpaid gratuity be recovered?", "As arrears of land revenue", ["Through GST", "From the employee's PF", "It can't"], "After the controlling authority's decision."),

  // Module 5
  fq("How much of Anand's gratuity is taxable?", "₹5,96,154", ["Nil", "₹25,96,154", "₹76,923"], "Above ₹20 lakh exempt."),
  fq("What's the tax-formula amount for Anand?", "₹20,76,923", ["₹25,96,154", "₹20,00,000", "₹18,00,000"], "Basic + DA ₹1,20,000."),
  fq("How much of Joseph's gratuity is exempt?", "₹92,308", ["₹1,38,462", "₹20,00,000", "₹46,154"], "The tax formula uses basic + DA."),
  fq("Is gratuity paid to a nominee after death the deceased's salary income for TDS?", "No", ["Yes", "Only above ₹20 lakh", "Only for managers"], "Not salary of the deceased."),
  fq("Previous exemption ₹6,00,000 — what's the remaining lifetime limit?", "₹14,00,000", ["₹20,00,000", "₹6,00,000", "₹26,00,000"], "₹20 lakh − ₹6 lakh."),

  // Module 6
  fq("How does Orchid fund gratuity?", "Through a group gratuity policy with an insurer", ["From petty cash", "Through PF", "It doesn't"], "The fund pays claims."),
  fq("What was Orchid's gratuity expense for FY 2026-27?", "₹26,50,000", ["₹22,00,000", "₹4,50,000", "₹1,38,462"], "Service cost plus net interest."),
  fq("Under AS 15, where are actuarial gains and losses recognised?", "Profit or loss", ["Other comprehensive income", "Share capital", "Revenue"], "Ind AS 19 uses OCI."),
  fq("How are plan assets treated in the balance sheet?", "Deducted from the obligation to show the net liability", ["Added to revenue", "Ignored", "Shown as cash"], "Defined benefit plans."),
]
