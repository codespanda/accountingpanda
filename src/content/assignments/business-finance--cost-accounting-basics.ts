import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Cost Accounting Basics — Oakridge Joinery's
// November variances, a job cost and a special order.

const assignment: PracticalAssignment = {
  title: "Analyse Oakridge Joinery's November costs",
  period: "November 2026",
  intro:
    "Oakridge Joinery made 180 standard doors in November and quoted a custom job. Calculate the variances, cost the job and decide on a special order.",
  context: [
    p("Oakridge Joinery — the workshop from the course."),
    table(
      ["Standard cost per door", "Standard"],
      [
        ["Oak timber", "4 m² × $30"],
        ["Direct labour", "3 hours × $30"],
        ["Variable overhead", "3 labour hours × $10"],
      ],
    ),
    table(
      ["November actuals (180 doors)", "Amount"],
      [
        ["Oak bought and used", "700 m² at $31"],
        ["Direct labour", "520 hours at $31"],
        ["Variable overhead", "$5,000"],
        ["Fixed overhead (budget $15,000)", "$14,600"],
      ],
    ),
    bullets(
      "Custom staircase job: materials $3,200; 40 labour hours at $30; 10 machine hours. Absorption rates: $24 per labour hour and $15 per machine hour. Quote at production cost + 25%.",
      "A builder offers $280 a door for 50 doors needing $10 special handles. Variable cost per door is $240 and there is spare capacity.",
    ),
    note("Enter favourable variances as positive and adverse as negative."),
  ],
  tasks: [
    num("Material price variance?", -700, "($30 − $31) × 700 m² = −$700 adverse.", { prefix: "$" }),
    num("Material usage variance?", 600, "Standard 720 m² (180 × 4) − actual 700 = 20 m² × $30 = $600 favourable.", { prefix: "$" }),
    num("Labour rate variance?", -520, "($30 − $31) × 520 hours = −$520 adverse.", { prefix: "$" }),
    num("Labour efficiency variance?", 600, "Standard 540 hours − actual 520 = 20 × $30 = $600 favourable.", { prefix: "$" }),
    num("Variable overhead spending variance?", 200, "520 hours × $10 = $5,200 − actual $5,000 = $200 favourable.", { prefix: "$" }),
    num("Fixed overhead expenditure variance?", 400, "Budget $15,000 − actual $14,600 = $400 favourable.", { prefix: "$" }),
    num("What is the total of these variances (including variable overhead efficiency of +$200)?", 780, "−700 + 600 − 520 + 600 + 200 + 200 + 400 = $780 favourable.", { prefix: "$" }),
    num("What is the staircase job's production cost?", 5510, "Materials $3,200 + labour $1,200 + overhead (40 × $24 + 10 × $15 = $1,110) = $5,510.", { prefix: "$" }),
    num("What price should Oakridge quote for the staircase? (two decimals)", 6887.5, "$5,510 × 1.25 = $6,887.50.", { prefix: "$", tolerance: 0.01 }),
    num("How much would the builder's special order add to profit?", 1500, "($280 − $240 − $10) × 50 = $1,500.", { prefix: "$" }),
    pick("Should Oakridge accept the special order?", "Yes, if it won't undercut regular customers' prices — it adds $1,500", ["No — $280 is below full cost", "No — special orders are never accepted", "Only at full cost plus 25%"], "With spare capacity, any price above relevant variable cost adds contribution."),
  ],
  references: [
    ref("IFRS Foundation — IAS 2 Inventories", "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/", "production overheads absorbed on normal capacity"),
    ref("US Small Business Administration — Manage your finances", "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"),
  ],
}

export default assignment
