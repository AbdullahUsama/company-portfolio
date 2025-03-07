import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Timeline2 from "./components/Timeline_above"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"

import CustomCursor from "./components/CustomCursor"

export default function Home() {
  return (
    <>
      <CustomCursor/>
      <Hero />
      {/* <WearYourStory /> */}
      <FeatureCarousel />
      <Timeline2 />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
      {/* <NewsletterSubscribe /> */}
    </>
  )
}

