import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Clock3,
  BarChart3,
  Target,
  Layers,
  ClipboardCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/Seo"
import { CONSULTATION_MAILTO } from "@/lib/contact"
import { cn } from "@/lib/utils"

type Section = { heading?: string; intro?: string; numbered?: boolean; items: string[] }
type Module = { title: string; sections: Section[] }

const modules: Module[] = [
  {
    title: "Module 1 — Introduction to Bookkeeping",
    sections: [
      {
        items: [
          "What is bookkeeping?",
          "What is accounting?",
          "Bookkeeping vs. accounting",
          "Importance of accurate financial records",
          "Role of a bookkeeper",
          "Types of bookkeeping — single-entry bookkeeping",
          "Types of bookkeeping — double-entry bookkeeping",
          "Manual vs. computerized bookkeeping",
          "Bookkeeping in small businesses",
          "Common bookkeeping terminology",
        ],
      },
    ],
  },
  {
    title: "Module 2 — Understanding the Accounting Equation",
    sections: [
      {
        items: [
          "Assets",
          "Liabilities",
          "Owner's equity",
          "The accounting equation",
          "Current assets",
          "Fixed assets",
          "Current liabilities",
          "Long-term liabilities",
          "Owner's capital",
          "Drawings",
          "How transactions affect the accounting equation",
        ],
      },
    ],
  },
  {
    title: "Module 3 — Understanding Accounts",
    sections: [
      {
        items: [
          "Chart of accounts",
          "Account types",
          "Asset accounts",
          "Liability accounts",
          "Equity accounts",
          "Revenue accounts",
          "Expense accounts",
          "Personal vs. business expenses",
          "Creating a simple chart of accounts",
        ],
      },
    ],
  },
  {
    title: "Module 4 — Debits and Credits",
    sections: [
      {
        items: [
          "What is a debit?",
          "What is a credit?",
          "Debit and credit rules",
          "Normal balances",
          "T-accounts",
          "Double-entry bookkeeping",
          "Debit/credit examples",
        ],
      },
    ],
  },
  {
    title: "Module 5 — Recording Business Transactions",
    sections: [
      {
        items: [
          "Sales transactions",
          "Purchase transactions",
          "Cash transactions",
          "Credit transactions",
          "Expense transactions",
          "Owner investment",
          "Owner withdrawals",
          "Loan transactions",
          "Asset purchases",
          "Customer payments",
          "Supplier payments",
        ],
      },
    ],
  },
  {
    title: "Module 6 — Source Documents & Bookkeeping Records",
    sections: [
      {
        items: [
          "Sales invoices",
          "Purchase invoices",
          "Receipts",
          "Credit notes",
          "Debit notes",
          "Bank statements",
          "Expense receipts",
          "Payment records",
          "Payroll documents",
          "Purchase orders",
          "Importance of supporting documentation",
        ],
      },
    ],
  },
  {
    title: "Module 7 — Journal Entries",
    sections: [
      {
        items: [
          "What is a journal?",
          "Journal entry structure",
          "Simple journal entries",
          "Compound journal entries",
          "Cash transactions",
          "Credit transactions",
          "Expense entries",
          "Revenue entries",
          "Adjusting entries",
          "Common journal-entry mistakes",
        ],
      },
    ],
  },
  {
    title: "Module 8 — Ledger & Posting",
    sections: [
      {
        items: [
          "What is a ledger?",
          "General ledger",
          "Subsidiary ledger",
          "Posting from journal to ledger",
          "T-accounts",
          "Account balances",
          "Debit and credit totals",
          "Closing ledger balances",
        ],
      },
    ],
  },
  {
    title: "Module 9 — Cash & Bank Bookkeeping",
    sections: [
      {
        items: [
          "Cash book",
          "Bank book",
          "Cash receipts",
          "Cash payments",
          "Petty cash",
          "Cash controls",
          "Bank transactions",
          "Deposits",
          "Withdrawals",
          "Bank charges",
          "Interest received",
          "Maintaining cash records",
        ],
      },
    ],
  },
  {
    title: "Module 10 — Accounts Receivable",
    sections: [
      {
        items: [
          "What are accounts receivable?",
          "Credit sales",
          "Customer invoices",
          "Customer payments",
          "Customer statements",
          "Outstanding invoices",
          "Aging reports",
          "Bad debts",
          "Credit notes",
          "Customer reconciliation",
          "Collection process",
        ],
      },
    ],
  },
  {
    title: "Module 11 — Accounts Payable",
    sections: [
      {
        items: [
          "What are accounts payable?",
          "Supplier invoices",
          "Purchase transactions",
          "Supplier payments",
          "Supplier statements",
          "Outstanding bills",
          "Payment schedules",
          "Vendor reconciliation",
          "Credit notes",
          "Duplicate invoice prevention",
        ],
      },
    ],
  },
  {
    title: "Module 12 — Bank Reconciliation",
    sections: [
      {
        items: [
          "What is bank reconciliation?",
          "Why reconciliation is important",
          "Bank statement",
          "Book balance",
          "Outstanding checks/payments",
          "Deposits in transit",
          "Bank charges",
          "Interest",
          "Errors",
          "Reconciliation adjustments",
        ],
      },
    ],
  },
  {
    title: "Module 13 — Trial Balance",
    sections: [
      {
        items: [
          "What is a trial balance?",
          "Purpose of a trial balance",
          "Preparing a trial balance",
          "Debit balances",
          "Credit balances",
          "Identifying errors",
          "Correcting errors",
          "Trial balance limitations",
        ],
      },
    ],
  },
  {
    title: "Module 14 — Adjusting Entries",
    sections: [
      {
        items: [
          "Accrued expenses",
          "Accrued income",
          "Prepaid expenses",
          "Unearned revenue",
          "Depreciation",
          "Bad debt adjustments",
          "Inventory adjustments",
          "Month-end adjustments",
        ],
      },
    ],
  },
  {
    title: "Module 15 — Financial Statements",
    sections: [
      {
        heading: "Income Statement",
        items: ["Revenue", "Cost of sales", "Gross profit", "Operating expenses", "Net profit/loss"],
      },
      {
        heading: "Balance Sheet",
        items: ["Assets", "Liabilities", "Equity"],
      },
      {
        heading: "Cash Flow Statement",
        items: ["Operating activities", "Investing activities", "Financing activities"],
      },
    ],
  },
  {
    title: "Module 16 — Payroll Bookkeeping",
    sections: [
      {
        items: [
          "Gross salary",
          "Deductions",
          "Net salary",
          "Employer costs",
          "Payroll journal entries",
          "Salary payable",
          "Payroll reconciliation",
          "Payroll records",
        ],
      },
    ],
  },
  {
    title: "Module 17 — Inventory Bookkeeping",
    sections: [
      {
        items: [
          "What is inventory?",
          "Inventory purchases",
          "Inventory sales",
          "Cost of goods sold",
          "Beginning inventory",
          "Ending inventory",
          "Stock counts",
          "Inventory adjustments",
          "Inventory reconciliation",
        ],
      },
    ],
  },
  {
    title: "Module 18 — Month-End Bookkeeping",
    sections: [
      {
        heading: "Month-End Checklist",
        items: [
          "Record all sales",
          "Record all purchases",
          "Enter expenses",
          "Reconcile bank accounts",
          "Reconcile credit cards",
          "Review accounts receivable",
          "Review accounts payable",
          "Record payroll",
          "Record depreciation",
          "Post adjustments",
          "Review trial balance",
          "Review financial statements",
        ],
      },
    ],
  },
  {
    title: "Module 19 — Bookkeeping Software",
    sections: [
      {
        items: [
          "Introduction to accounting software",
          "Setting up a company",
          "Chart of accounts",
          "Customers",
          "Vendors",
          "Invoices",
          "Bills",
          "Expenses",
          "Bank feeds",
          "Bank reconciliation",
          "Financial reports",
          "User permissions",
          "Data backup",
        ],
      },
      {
        heading: "Software Examples",
        items: ["QuickBooks", "Xero", "Zoho Books", "Wave", "Sage"],
      },
    ],
  },
  {
    title: "Module 20 — AI & Modern Bookkeeping",
    sections: [
      {
        items: [
          "AI invoice processing",
          "OCR document extraction",
          "Automated transaction categorization",
          "AI bank reconciliation",
          "Automated journal entries",
          "Expense classification",
          "Accounts receivable automation",
          "Accounts payable automation",
          "AI financial reporting",
          "Fraud/error detection",
          "Human review and controls",
          "Limitations of AI bookkeeping",
        ],
      },
    ],
  },
  {
    title: "Module 21 — Bookkeeping Errors & Internal Controls",
    sections: [
      {
        heading: "Common Errors",
        items: [
          "Duplicate transactions",
          "Incorrect account classification",
          "Missing transactions",
          "Wrong amounts",
          "Wrong dates",
          "Duplicate invoices",
          "Personal expenses recorded as business expenses",
          "Unreconciled bank accounts",
          "Incorrect journal entries",
        ],
      },
      {
        heading: "Internal Controls",
        items: [
          "Approval procedures",
          "Segregation of duties",
          "Bank reconciliation",
          "Document verification",
          "User permissions",
          "Regular review",
        ],
      },
    ],
  },
  {
    title: "Module 22 — Bookkeeping for a Small Business",
    sections: [
      {
        heading: "Case Study",
        intro:
          "Learners operate the books of a fictional small business for one complete month. They will:",
        numbered: true,
        items: [
          "Set up the chart of accounts",
          "Enter opening balances",
          "Record sales",
          "Record purchases",
          "Enter expenses",
          "Issue customer invoices",
          "Record supplier bills",
          "Record customer payments",
          "Record supplier payments",
          "Reconcile the bank",
          "Record payroll",
          "Make adjustments",
          "Prepare the trial balance",
          "Prepare financial statements",
          "Review the business results",
        ],
      },
    ],
  },
  {
    title: "Module 23 — Final Bookkeeping Project",
    sections: [
      {
        heading: "Capstone Project",
        intro:
          "Scenario: A fictional company has 30 days of financial transactions. The learner must complete the entire bookkeeping cycle: Source Documents → Journal → Ledger → Trial Balance → Adjustments → Reconciliation → Financial Statements.",
        items: [],
      },
      {
        heading: "Final Deliverables",
        items: [
          "Chart of Accounts",
          "General Journal",
          "General Ledger",
          "Accounts Receivable",
          "Accounts Payable",
          "Bank Reconciliation",
          "Trial Balance",
          "Adjusting Entries",
          "Income Statement",
          "Balance Sheet",
          "Cash Flow Summary",
          "Month-End Checklist",
        ],
      },
    ],
  },
]

const assignments = [
  "Create a chart of accounts",
  "Record transactions",
  "Prepare journal entries",
  "Post a ledger",
  "Reconcile a bank statement",
  "Prepare a trial balance",
  "Prepare financial statements",
]

function ModuleAccordion({
  module,
  index,
  open,
  onToggle,
}: {
  module: Module
  index: number
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="text-sm font-semibold text-brand-heading sm:text-base">
          {module.title}
        </span>
        <ChevronDown
          className={cn(
            "h-4.5 w-4.5 shrink-0 text-brand-green transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="space-y-4 px-5 pb-5 sm:px-6">
          {module.sections.map((section, i) => (
            <div key={section.heading ?? `${index}-${i}`}>
              {section.heading && (
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                  {section.heading}
                </p>
              )}
              {section.intro && (
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {section.intro}
                </p>
              )}
              {section.items.length > 0 && (
                <ul
                  className={cn(
                    "mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2",
                    section.numbered && "sm:grid-cols-1"
                  )}
                >
                  {section.items.map((item, itemIndex) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      {section.numbered ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-[11px] font-bold text-brand-green">
                          {itemIndex + 1}
                        </span>
                      ) : (
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function BookkeepingBasicsCourse() {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set([0]))

  const toggleModule = (index: number) => {
    setOpenModules((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <>
      <Seo
        title="Bookkeeping Basics for Beginners"
        description="A 23-module bookkeeping course covering the accounting equation, journal entries, ledgers, reconciliation, financial statements, payroll, inventory, software and AI — plus a capstone project."
        path="/learning/bookkeeping/bookkeeping-basics-for-beginners"
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-green to-brand-green-dark py-14 lg:py-16">
        <div className="container-px mx-auto max-w-4xl">
          <Link
            to="/learning/bookkeeping"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Bookkeeping Courses
          </Link>

          <span className="mt-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
            BESTSELLER
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.4rem]">
            Bookkeeping Basics for Beginners
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">
            Learn the fundamentals of bookkeeping step by step — from the
            accounting equation to financial statements, payroll,
            inventory, and modern AI-enabled bookkeeping tools.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90">
            <span className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4" />
              Beginner
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              6–8 weeks
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              {modules.length} Modules
            </span>
          </div>
        </div>
      </section>

      <div className="bg-white py-14 lg:py-16">
        <div className="container-px mx-auto max-w-4xl">
          {/* Course objective */}
          <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-brand-bg p-6 shadow-sm">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <div>
              <h2 className="text-base font-bold text-brand-heading">
                Course Objective
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                By the end of this course, learners will understand the
                fundamentals of bookkeeping, record day-to-day financial
                transactions, manage accounts payable and receivable,
                reconcile bank accounts, prepare basic financial
                statements, and understand how accounting software is
                used in modern bookkeeping.
              </p>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand-green" />
              <h2 className="text-xl font-bold text-brand-heading sm:text-2xl">
                Course Curriculum
              </h2>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {modules.length} modules covering everything from bookkeeping
              basics to AI-enabled tools and a final capstone project.
            </p>

            <div className="mt-6 space-y-3">
              {modules.map((module, index) => (
                <ModuleAccordion
                  key={module.title}
                  module={module}
                  index={index}
                  open={openModules.has(index)}
                  onToggle={() => toggleModule(index)}
                />
              ))}
            </div>
          </div>

          {/* Assessment */}
          <div className="mt-12 rounded-2xl border border-gray-100 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-brand-green" />
              <h2 className="text-xl font-bold text-brand-heading sm:text-2xl">
                Course Assessment
              </h2>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-brand-heading">Quizzes</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  Each module can have 5–10 questions.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-heading">
                  Practical Exercises
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  Learners should complete transaction-recording exercises
                  after each major module.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-heading">Assignments</h3>
                <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {assignments.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-brand-bg p-4">
                  <h3 className="text-sm font-semibold text-brand-heading">Final Exam</h3>
                  <p className="mt-1 text-sm text-gray-600">50 questions</p>
                  <p className="text-sm text-gray-600">
                    Suggested passing score: 70%
                  </p>
                </div>
                <div className="rounded-xl bg-brand-bg p-4">
                  <h3 className="text-sm font-semibold text-brand-heading">
                    Final Practical Test
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Complete bookkeeping for one fictional business for one
                    month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <section className="bg-brand-green-dark py-12 lg:py-14">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-[1.7rem]">
              Ready to Start Learning Bookkeeping?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Join thousands of learners improving their skills and
              advancing their careers.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              size="lg"
              className="bg-white text-brand-green-dark hover:bg-white/90"
              asChild
            >
              <a href={CONSULTATION_MAILTO}>
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <span className="text-xs text-white/70">No credit card required</span>
          </div>
        </div>
      </section>
    </>
  )
}
