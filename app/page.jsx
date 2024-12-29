import HeroSection from "./../components/hero-section"
import GallerySection from "./../components/gallery-section"
import HowDonationsHelp from "./../components/how-donations-help"
import DonationOptions from "./../components/donation-options"
import ContactSupport from "./../components/contact-support"

export default function Home() {
  return (<>
    <HeroSection />
    <GallerySection />
    <HowDonationsHelp />
    <DonationOptions />
    <ContactSupport />
  </>);
}

