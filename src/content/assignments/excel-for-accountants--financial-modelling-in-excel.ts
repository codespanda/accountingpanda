import type { PracticalAssignment } from "@/lib/lessonTypes"
import { bullets, note, p, table } from "@/lib/lessonKit"
import { num, pick, ref } from "@/lib/assignmentKit"

// Practical assignment for Financial Modelling in Excel — updating
// Brightwater Coffee Roasters' model with January 2027 actuals.

const assignment: PracticalAssignment = {
  title: "Update Brightwater's model with January actuals",
  period: "January 2027",
  intro:
    "January 2027 has closed. Compare Brightwater Coffee Roasters' actual results with the model, split the revenue variance, update the schedules and re-check value and break-even.",
  context: [
    p("Brightwater Coffee Roasters — the model from the course."),
    table(
      ["January 2027", "Model (budget)", "Actual"],
      [
        ["Volume sold", "3,600 kg", "3,400 kg"],
        ["Price per kg", "$26.00", "$26.50"],
        ["Cost of sales", "60% of revenue", "$55,862"],
      ],
    ),
    bullets(
      "Bank loan opening balance $200,000 at 7% a year; interest on the opening balance, charged monthly.",
      "Annual depreciation $50,000, charged evenly each month.",
      "Annual fixed costs (operating costs, depreciation and interest) $344,000; contribution $10.40 per kg.",
      "Free cash flow forecasts: 2027 $32,270; 2028 $60,000; 2029 $70,000. Discount rate 10%.",
    ),
    note("Round money to the nearest dollar unless asked otherwise."),
  ],
  tasks: [
    num("What is January's actual revenue?", 90100, "3,400 kg × $26.50 = $90,100.", { prefix: "$" }),
    num("What is the volume variance (at the model price)? Enter adverse as negative.", -5200, "(3,400 − 3,600) × $26 = −$5,200 adverse.", { prefix: "$" }),
    num("What is the price variance (on actual volume)?", 1700, "($26.50 − $26.00) × 3,400 = $1,700 favourable.", { prefix: "$" }),
    num("What is January's actual gross profit?", 34238, "$90,100 − $55,862 = $34,238.", { prefix: "$" }),
    num("What is January's actual gross margin? (%, one decimal)", 38, "$34,238 ÷ $90,100 = 38.0%, below the model's 40%.", { suffix: "%", tolerance: 0.1 }),
    num("What is January's loan interest? (two decimals)", 1166.67, "$200,000 × 7% ÷ 12 = $1,166.67.", { prefix: "$", tolerance: 0.01 }),
    num("What is January's depreciation? (two decimals)", 4166.67, "$50,000 ÷ 12 = $4,166.67.", { prefix: "$", tolerance: 0.01 }),
    num("What is the monthly break-even volume? (one decimal)", 2756.4, "($344,000 ÷ 12) ÷ $10.40 = 2,756.4 kg.", { suffix: "kg", tolerance: 0.1 }),
    num("What does =NPV(10%, 32270, 60000, 70000) return? (nearest dollar)", 131515, "32,270 ÷ 1.1 + 60,000 ÷ 1.21 + 70,000 ÷ 1.331 = $131,515.", { prefix: "$", tolerance: 1 }),
    pick("Where should January's actual figures go in a well-built model?", "On a separate actuals input sheet, linked into the calculations by a flag", ["Typed over the forecast formulas", "In the output charts directly", "In a separate workbook with no links"], "Keep inputs separate and never overwrite formulas."),
  ],
  references: [
    ref("Microsoft Support — NPV function", "https://support.microsoft.com/en-us/office/npv-function-8672cb67-2576-4d07-b67b-ac28acf2a568"),
    ref("Microsoft Support — Use Goal Seek", "https://support.microsoft.com/en-us/office/use-goal-seek-to-find-the-result-you-want-by-adjusting-an-input-value-320cb99e-f4a4-417f-b1c3-4f369d6e66c7"),
    ref("IFRS Foundation — IAS 7 Statement of Cash Flows", "https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/"),
  ],
}

export default assignment
