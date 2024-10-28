import Nav from "./components/sectionComponents/Nav";
import Hero from "./components/sectionComponents/Hero";
import Waitlist from "./components/sectionComponents/Waitlist";
import Footer from "./components/sectionComponents/Footer";

const page = () => {
  return (
    <div>
      <Nav page="home" />
      <Hero />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default page;
