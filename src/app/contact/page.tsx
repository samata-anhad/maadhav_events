
import SiteNavbar from "../../components/SiteNavbar";
import ContactHero from "../../components/ContactHero";
import ContactDetails from "../../components/ContactDetails";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />

      <main>
        <ContactHero />
        <ContactDetails />
        <Footer/>
      </main>
    </>
  );
}
