import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { CountryServices } from "@/components/CountryServices"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Process } from "@/components/Process"
import { Newsletter } from "@/components/Newsletter"

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CountryServices />
      <WhyChooseUs />
      <Process />
      <Newsletter />
    </>
  )
}
