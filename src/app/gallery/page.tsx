
import SiteNavbar from "../../components/SiteNavbar";
import GalleryHero from "../../components/GalleryHero";
import Footer from "../../components/Footer";
import OurCaptureMoments from "../../components/OurCaptureMoments";

export default function GalleryPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <GalleryHero />
        <OurCaptureMoments/>
        <Footer/>
      </main>
    </>
  );
}
