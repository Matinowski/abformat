import HeaderSection from "@/components/Sections/HeaderSection/HeaderSection";
import InfoSection from "@/components/Sections/InfoSection/InfoSection";
import Bhp from "@/components/Sections/Bhp/Bhp";
import Image from "next/image";
import PersonnelDepartment from "@/components/Sections/PersonnelDepartment/PersonelDepartment";
import Office from "@/components/Sections/Office/Office";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <InfoSection />
      <Bhp/>
      <PersonnelDepartment/>
      <Office/>
    </>
  );
}
