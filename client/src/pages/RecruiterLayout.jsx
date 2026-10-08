import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";

const RecruiterLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RecruiterLayout;