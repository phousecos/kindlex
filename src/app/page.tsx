import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Programs />
      <Impact />
      <Testimonials />
      <GetInvolved />
      <Footer />
    </main>
  );
}
