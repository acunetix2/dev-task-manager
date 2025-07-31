import { Outlet } from "react-router-dom";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
