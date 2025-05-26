import ClientPage from "./sections/clients/client";
import FAQ from "./sections/faq/faq";
import Hero from "./sections/hero/hero";
import ProcessPage from "./sections/process/page";
import Services from "./sections/services/services";
import Works from "./sections/works/works";

export default function Home() {
  return (
  <main className="">
    <Hero/>
    <Works/>
    <Services/>
    <ProcessPage/>
    <ClientPage/>
    <FAQ/>
  </main>
  );
}
