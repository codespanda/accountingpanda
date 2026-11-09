import { fq } from "@/lib/finalTest"

// Final test bank for Advanced Bookkeeping and Adjusting Entries — separate
// from the module knowledge checks. The correct answer is listed first; the
// test shuffles the options.

export default [
  // Module 1
  fq("A tent is sold and taken home on December 20, paid in January. When is the revenue recognised?", "December 20", ["When paid in January", "December 31", "When the tent is used"], "Revenue follows delivery."),
  fq("A hike is paid in November and run on December 5. When is it revenue?", "December 5", ["In November", "At year end", "When the guide is paid"], "Revenue is recognised when the service is performed."),
  fq("How is an annual trail-club membership paid on July 1 recognised?", "Spread over the 12 months it covers", ["All on July 1", "All on December 31", "When the member renews"], "It's earned over time."),
  fq("Which question helps apply the matching principle?", "Which period benefited from this cost?", ["When was the cash paid?", "Who approved the bill?", "Which bank was used?"], "Costs go to the period they helped."),
  fq("Cash received in December is $40,000, including $6,000 for November sales, with $3,000 of December sales unpaid. What's accrual-basis December revenue?", "$37,000", ["$40,000", "$43,000", "$34,000"], "$40,000 − $6,000 + $3,000."),
  fq("Which adjustment type covers stock shrinkage?", "Estimates", ["Accrued revenue", "Deferred revenue", "Prepaid expenses"], "Like depreciation and bad debts."),

  // Module 2
  fq("Why were three days of Granite Peak's wages accrued?", "December 31 fell on a Wednesday before Friday's payday", ["Staff were paid early", "Wages are always accrued for a week", "The bank closed early"], "Wednesday's work was unpaid at year end."),
  fq("How much December loan interest did Granite Peak accrue?", "$310", ["$620", "$1,500", "$2,700"], "Based on the loan statement."),
  fq("What was the basis for accruing $620 of electricity?", "The average of the last three bills", ["A guess", "The bank balance", "The owner's estimate of usage"], "Use evidence for estimates."),
  fq("What was the total of Granite Peak's accrued expenses?", "$5,130", ["$4,000", "$2,700", "$9,130"], "$2,700 + $620 + $310 + $1,500."),
  fq("Weekly wages of $3,000 cover 5 days; 2 days are unpaid at year end. What's the accrual?", "$1,200", ["$600", "$1,800", "$3,000"], "$3,000 × 2 ÷ 5."),
  fq("What evidence supported the Ridge Valley School revenue accrual?", "A signed contract and the hike log", ["An email rumour", "Next year's budget", "A competitor's prices"], "Only accrue measurable, earned revenue."),

  // Module 3
  fq("What was Granite Peak's booking software prepayment balance at December 31?", "$900", ["$1,200", "$300", "$0"], "$1,200 paid October 1; three months used."),
  fq("What was the total prepaid balance on Granite Peak's schedule?", "$2,400", ["$6,600", "$1,500", "$900"], "$0 + $900 + $1,500."),
  fq("How much does each trail-club member pay for 12 months?", "$180", ["$150", "$1,800", "$15"], "10 members × $180 = $1,800."),
  fq("What was Granite Peak's deferred membership revenue at December 31?", "$900", ["$1,800", "$150", "$0"], "Six of twelve months earned."),
  fq("A $2,400 hosting plan is paid April 1 for a year. What's the prepaid balance at December 31?", "$600", ["$1,800", "$2,400", "$200"], "Nine months used."),
  fq("What should the prepayments schedule total equal?", "The Prepaid expenses balance on the balance sheet", ["Total expenses for the year", "The cash balance", "Accounts payable"], "Schedule = ledger."),

  // Module 4
  fq("Which Granite Peak item would be capitalised?", "A climbing wall", ["Cleaning supplies", "Routine repairs", "Small tools"], "It benefits future periods."),
  fq("What is year 3 depreciation in the double-declining example?", "$1,440", ["$2,400", "$4,000", "$2,000"], "40% of $3,600."),
  fq("A $26,000 van has a $6,000 residual value and a 4-year life. What's annual depreciation?", "$5,000", ["$6,500", "$4,000", "$6,000"], "($26,000 − $6,000) ÷ 4."),
  fq("Equipment costing $8,000 with $5,500 accumulated depreciation sells for $3,000. What's the result?", "A $500 gain", ["A $500 loss", "A $3,000 gain", "No gain or loss"], "Book value is $2,500."),
  fq("What does a disposal entry remove from the books?", "The asset's cost and its accumulated depreciation", ["Only the cost", "Only the depreciation", "Nothing — it just adds cash"], "Both must go."),
  fq("Who handles differences between book and tax depreciation?", "The accountant, on the tax return", ["The bank", "The customer", "Nobody"], "Tax rules may differ."),

  // Module 5
  fq("Opening inventory $18,000, purchases $52,000, closing $21,500. What's COGS?", "$48,500", ["$70,000", "$51,500", "$30,500"], "$18,000 + $52,000 − $21,500."),
  fq("What should be checked before writing down a large stock shortfall?", "Its cause — count errors, unrecorded returns, damage or theft", ["Nothing", "The bank balance", "Next year's sales"], "Investigate first."),
  fq("At what amount do Granite Peak's receivables appear on the balance sheet?", "$38,800", ["$40,000", "$1,200", "$39,700"], "$40,000 − $1,200 allowance."),
  fq("Why use an aging report for the bad debt allowance?", "Older balances deserve higher loss percentages", ["It's required by banks", "It removes the allowance", "It replaces the trial balance"], "A better estimate than one flat rate."),
  fq("A €5,000 payable recorded at $1.08 is revalued at $1.12. What's the effect?", "A $200 unrealised loss", ["A $200 gain", "No effect", "A $5,600 loss"], "The payable rises to $5,600."),
  fq("When does an unrealised exchange gain or loss become realised?", "When the amount is settled", ["At every month end", "When the rate is checked", "Never"], "Settlement fixes the result."),

  // Module 6
  fq("What was Granite Peak's adjusted wages expense?", "$60,700", ["$58,000", "$2,700", "$55,300"], "$58,000 + $2,700."),
  fq("For a sole trader, how are drawings closed?", "Debit Owner's capital, credit Owner's drawings", ["Debit Drawings, credit Revenue", "Debit Cash, credit Drawings", "They're never closed"], "Drawings reduce capital."),
  fq("Revenue $120,000, expenses $95,000 and drawings $15,000 for a sole trader. What's the change in capital?", "+$10,000", ["+$25,000", "−$15,000", "+$40,000"], "$25,000 profit − $15,000 drawings."),
  fq("Revenue $85,000 and deferred revenue $1,800 before adjusting; $900 of memberships are earned. What's adjusted revenue?", "$85,900", ["$85,000", "$86,800", "$84,100"], "Revenue rises by the amount earned."),
  fq("Which statement is built from changes in balance sheet accounts and profit?", "The cash flow statement", ["The income statement", "The trial balance", "The aging report"], "It explains the change in cash."),
  fq("Which balances should be zero in the year-end review?", "Suspense and clearing accounts", ["Cash", "Fixed assets", "Owner's capital"], "They should be cleared."),
]
