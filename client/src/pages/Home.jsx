
import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <Navbar />

      <main className="flex w-full flex-1 flex-col">
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default Home;