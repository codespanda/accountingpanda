import { CourseOverview, type CourseDetails } from "@/components/CourseOverview"
import type { CourseModule } from "@/components/CourseModuleAccordion"

const COURSE_PATH = "/learning/bookkeeping/bookkeeping-basics-for-beginners"

export const bookkeepingBasicsModules: CourseModule[] = [
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
    title: "Module 3 — Accounts, Debits and Credits",
    sections: [
      {
        items: [
          "Chart of accounts",
          "Account types — assets, liabilities, equity, revenue and expenses",
          "Personal vs. business expenses",
          "Creating a simple chart of accounts",
          "What debits and credits are",
          "Debit and credit rules",
          "Normal balances",
          "T-accounts and double-entry bookkeeping",
        ],
      },
    ],
  },
  {
    title: "Module 4 — Recording Transactions",
    sections: [
      {
        items: [
          "Source documents — invoices, receipts, bills and bank statements",
          "Recording sales and purchases",
          "Cash and credit transactions",
          "Owner investments and withdrawals",
          "Writing journal entries",
          "Posting to the general ledger",
          "Keeping supporting documentation",
        ],
      },
    ],
  },
  {
    title: "Module 5 — Cash, Receivables, Payables and Reconciliation",
    sections: [
      {
        items: [
          "Recording cash and bank transactions",
          "Accounts receivable — invoicing and customer payments",
          "Accounts payable — supplier bills and payments",
          "Reading a bank statement",
          "Preparing a bank reconciliation",
          "Fixing common reconciliation differences",
        ],
      },
    ],
  },
  {
    title: "Module 6 — Trial Balance, Adjustments and Financial Statements",
    sections: [
      {
        items: [
          "Preparing a trial balance",
          "Finding and correcting errors",
          "Basic adjusting entries — accruals, prepayments and depreciation",
          "The income statement",
          "The balance sheet",
          "The cash flow statement",
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

const course: CourseDetails = {
  slug: "bookkeeping-basics-for-beginners",
  title: "Bookkeeping Basics for Beginners",
  summary:
    "A 6-module beginner bookkeeping course covering the accounting equation, debits and credits, journal entries, ledgers, reconciliation and financial statements — plus a practical project.",
  intro:
    "Learn the fundamentals of bookkeeping step by step — from the accounting equation and debits and credits to recording transactions, reconciling the bank and preparing financial statements.",
  objective:
    "By the end of this course, learners will understand the fundamentals of bookkeeping, record day-to-day financial transactions, manage accounts payable and receivable, reconcile bank accounts, and prepare basic financial statements.",
  level: "Beginner",
  duration: "4 Hours",
  badge: "Bestseller",
  category: { label: "Bookkeeping", href: "/learning/bookkeeping" },
  modules: bookkeepingBasicsModules,
  assignments,
  exercises: "Learners should complete transaction-recording exercises after each major module.",
  finalExam: "30 questions",
  finalPractical: "Complete bookkeeping for one fictional business for one month.",
  startHref: `${COURSE_PATH}/progress`,
}

export function BookkeepingBasicsCourse() {
  return <CourseOverview course={course} path={COURSE_PATH} />
}
