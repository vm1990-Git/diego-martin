import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/ServiceSection/Services";
import TopProperties from "./components/TopProperties";

export default function Home() {
  return (
    <main>
      <Header />
      <TopProperties />
      <AboutUs />
      <Services />
      <Contact />
    </main>
  );
}
