import HeroMain from "@/components/HeroMain";
import Model from "@/components/Model";
import RequestDemo from "@/components/RequestDemo";
import InstallmentCTA from "@/components/InstallmentCTA";
import ContactUs from "@/components/ContactUs";
import About from "@/components/About";
import Services from "@/components/Services";
import Vehicles from "@/components/Vehicles";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* New Hero Section with background image */}
      <HeroMain />

      {/* Car Configurator Section */}
      {/* <div className="pt-[72px]"> */}
      <Model />
      <RequestDemo />
      <InstallmentCTA />
      <ContactUs />
      {/* <Footer /> */}
      {/* </div> */}
      {/* <Services />
      <Vehicles />
      <Testimonials /> */}
    </main>
  );
}
