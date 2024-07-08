import Image from "next/image";
import Navbar from "@/components/navbar";
import SectionContainer from "@/components/sectioncontainer";
import Showcase from "@/components/showcase";
import Precios from "@/components/precios";
import Metodos from "@/components/metodos";
import Contacto from "@/components/contacto";

export default function Home() {
  return (
    <main className="flex flex-col">
      <SectionContainer className="p-0 m-0">
        <Navbar/>
      </SectionContainer>
      <SectionContainer>
        <Showcase />
      </SectionContainer>
      <SectionContainer>
    	  <Precios />
      </SectionContainer>
      <SectionContainer>
        <Metodos />
      </SectionContainer>
      <SectionContainer>
        <Contacto />
      </SectionContainer>
    </main>
  );
}
