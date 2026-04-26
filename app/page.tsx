import dynamic from "next/dynamic";
const Robot3DScene = dynamic(() => import("@/components/Robot3DScene"), { ssr: false });
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Methodology from "@/components/sections/Methodology";
import Solutions from "@/components/sections/Solutions";
import Partners from "@/components/sections/Partners";
import Industries from "@/components/sections/Industries";
import Customers from "@/components/sections/Customers";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      {/* Fixed background grid behind everything */}
      <div className="grid-bg pointer-events-none fixed inset-0 -z-10" />

      {/* 3D arm — fixed full-screen behind text but above grid */}
      <Robot3DScene />

      <Header />

      <main className="relative">
        <Hero />
        <Methodology />
        <Solutions />
        <Partners />
        <Industries />
        <Customers />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
