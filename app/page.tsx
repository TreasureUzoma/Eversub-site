import Nav from "./components/sectionComponents/Nav";
import Hero from "./components/pagesComponets/homeComponents/Hero";
import Waitlist from "./components/pagesComponets/homeComponents/Waitlist";
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
