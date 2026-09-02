import { asset } from "@/lib/asset"

export type LessonBlock =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "image"; src: string; alt: string }

export type LessonPage = { title: string; blocks: LessonBlock[] }

// Lesson content by module index (0-based). Only modules with real
// written content appear here — modules without an entry fall back to
// their curriculum topic list on the lesson page.
export const bookkeepingBasicsLessons: Record<number, LessonPage[]> = {
  0: [
    {
      title: "Module 1 — Introduction to Bookkeeping",
      blocks: [
        { type: "h3", text: "Module Overview" },
        {
          type: "p",
          text: "Welcome to Module 1: Introduction to Bookkeeping, the first step in your journey toward becoming a confident bookkeeper.",
        },
        {
          type: "p",
          text: "Bookkeeping is the foundation of financial management for every business. Whether a business is a small online store, a restaurant, a consulting firm, a freelancer, or a large corporation, it needs accurate financial records to understand where money comes from, where it goes, what it owns, and what it owes.",
        },
        {
          type: "p",
          text: "In this module, you will build a strong understanding of the purpose, principles, processes, and terminology of bookkeeping before moving into journal entries, ledgers, reconciliations, and financial statements in later modules.",
        },
      ],
    },
    {
      title: "What Is Bookkeeping?",
      blocks: [
        { type: "h3", text: "Definition" },
        {
          type: "p",
          text: "Bookkeeping is the systematic process of recording, organizing, classifying, and maintaining a business's financial transactions.",
        },
        {
          type: "p",
          text: "A financial transaction occurs whenever money or something with monetary value moves into, out of, or within a business.",
        },
        { type: "p", text: "Examples include:" },
        {
          type: "list",
          items: [
            "A customer purchases a product.",
            "A business pays rent.",
            "A company purchases office equipment.",
            "An employee receives a salary.",
            "A customer pays an outstanding invoice.",
            "A business receives a bank loan.",
            "The owner invests money into the business.",
            "The business pays a supplier.",
          ],
        },
        {
          type: "p",
          text: "A bookkeeper records these transactions in an organized manner so that the business can later use the information to prepare reports and make decisions.",
        },
        {
          type: "image",
          src: asset("assets/lesson-what-is-bookkeeping.jpg"),
          alt: "Infographic: What Is Bookkeeping? — examples of transactions and a simple ABC Consulting example",
        },
        { type: "h3", text: "Simple Example" },
        {
          type: "p",
          text: "Suppose ABC Consulting starts business with ₹100,000 in cash.",
        },
        { type: "p", text: "The bookkeeper records the transaction:" },
        {
          type: "note",
          text: "Business receives ₹100,000 from the owner → financial transaction recorded.",
        },
        { type: "p", text: "Later, ABC Consulting:" },
        {
          type: "list",
          items: [
            "Pays ₹20,000 office rent",
            "Purchases a laptop for ₹50,000",
            "Receives ₹30,000 from a customer",
          ],
        },
        { type: "p", text: "The bookkeeper records each transaction." },
        {
          type: "p",
          text: "At the end of the month, the business can determine:",
        },
        {
          type: "list",
          items: [
            "How much cash it has",
            "How much revenue it earned",
            "How much it spent",
            "What customers owe",
            "What it owes suppliers",
            "What assets it owns",
          ],
        },
        { type: "note", text: "This is the fundamental purpose of bookkeeping." },
      ],
    },
  ],
}
