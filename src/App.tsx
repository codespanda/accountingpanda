import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ScrollToHash } from "@/components/ScrollToHash"
import { Home } from "@/pages/Home"
import { Blog } from "@/pages/Blog"
import { About } from "@/pages/About"
import { FAQ } from "@/pages/FAQ"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"
import { Terms } from "@/pages/Terms"
import { FinancialPlanningPost } from "@/pages/posts/FinancialPlanningPost"
import { SalesTaxNexusPost } from "@/pages/posts/SalesTaxNexusPost"
import { BASChecklistPost } from "@/pages/posts/BASChecklistPost"
import { PayrollCompliancePost } from "@/pages/posts/PayrollCompliancePost"
import { OutsourceAccountingPost } from "@/pages/posts/OutsourceAccountingPost"
import { QuickBooksVsXeroPost } from "@/pages/posts/QuickBooksVsXeroPost"
import { Form1099Post } from "@/pages/posts/Form1099Post"
import { CPAOutsourcedSupportPost } from "@/pages/posts/CPAOutsourcedSupportPost"
import { AIReplaceAccountantsPost } from "@/pages/posts/AIReplaceAccountantsPost"

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white">
        <ScrollToHash />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/how-financial-planning-helps-your-business-grow-faster"
              element={<FinancialPlanningPost />}
            />
            <Route
              path="/blog/us-sales-tax-nexus-in-2026"
              element={<SalesTaxNexusPost />}
            />
            <Route
              path="/blog/bas-preparation-checklist-for-australian-businesses"
              element={<BASChecklistPost />}
            />
            <Route
              path="/blog/payroll-superannuation-common-compliance-traps-in-australia"
              element={<PayrollCompliancePost />}
            />
            <Route
              path="/blog/when-should-a-growing-business-outsource-its-accounting"
              element={<OutsourceAccountingPost />}
            />
            <Route
              path="/blog/quickbooks-vs-xero-which-fits-your-business-in-2026"
              element={<QuickBooksVsXeroPost />}
            />
            <Route
              path="/blog/1099-reporting-deadlines-you-cant-afford-to-miss"
              element={<Form1099Post />}
            />
            <Route
              path="/blog/how-cpa-firms-use-outsourced-support-during-tax-season"
              element={<CPAOutsourcedSupportPost />}
            />
            <Route
              path="/blog/will-ai-replace-accountants-in-2026"
              element={<AIReplaceAccountantsPost />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
