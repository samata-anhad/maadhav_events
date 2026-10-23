import HeroSection from "../components/HeroSection";
import WhyContactUs from "../components/WhyContactUs";
import EventsWeDo from "../components/EventsWeDo";
import OurServices from "../components/OurServices";
import CTASection from "../components/CtaSection";
import OurPartners from "../components/OurPartners";
import SmallCTASection from "../components/SmallCtaSection";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyContactUs />
      <EventsWeDo />
      <OurServices />
      <CTASection/>
      <OurPartners/>
      <SmallCTASection/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}