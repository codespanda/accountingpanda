import { Seo } from "@/components/Seo"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { CountryServices } from "@/components/CountryServices"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Process } from "@/components/Process"
import { Newsletter } from "@/components/Newsletter"

export function Home() {
  return (
    <>
      <Seo
        title="Outsourced Accounting & Bookkeeping Services for USA & Australia"
        description="AccountingPanda delivers accurate, compliant and scalable outsourced accounting & bookkeeping services for businesses and CPA firms across the USA and Australia."
        path="/"
      />
      <Hero />
      <Services />
      <CountryServices />
      <WhyChooseUs />
      <Process />
      <Newsletter />
    </>
  )
}
