import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Demo from "@/components/Demo";
import HowItWorks from "@/components/HowItWorks";
import ROI from "@/components/ROI";
import LeadCapture from "@/components/LeadCapture";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileCTA />
      <Hero />
      <TrustBar />
      <Problem />
      <Demo />
      <HowItWorks />
      <ROI />
      <LeadCapture />
      <Features />
      <Pricing />
      <LeadCapture />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
