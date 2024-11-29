import HeaderSection from "@/components/Sections/HeaderSection/HeaderSection";
import InfoSection from "@/components/Sections/InfoSection/InfoSection";
import Bhp from "@/components/Sections/Bhp/Bhp";
import Image from "next/image";
import PersonnelDepartment from "@/components/Sections/PersonnelDepartment/PersonelDepartment";
import Office from "@/components/Sections/Office/Office";
import Maintenace from "@/components/Sections/Maintenance/Maintenace";
import Printing from "@/components/Sections/Printing/Printing";
import { Portfolio } from "@/components/Sections/Portfolio/Portfolio";
import NavBar from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ContactSection from "@/components/Sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
    <NavBar/>
      <HeaderSection />
      <InfoSection />
      <Bhp/>
      <PersonnelDepartment/>
      <Office/>
      <Maintenace/>
      <Printing/>
      <Portfolio/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
