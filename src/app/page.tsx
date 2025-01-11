import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Statistics from "@/components/Statistics";
import Support from "@/components/Support";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Programs />
      <Mission />
      <Statistics />
      <Testimonials />
      <Support />
      <FAQ />
      <Footer />
    </div>
  );
}
