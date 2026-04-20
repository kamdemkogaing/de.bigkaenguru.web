import Advantages from "./components/Advantages";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1B1B1B]">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Advantages />
        <Process />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
