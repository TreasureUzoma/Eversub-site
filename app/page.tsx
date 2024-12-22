import Hero from "./components/pagesComponets/homeComponents/Hero";
import { CardStackDemo } from "./components/pagesComponets/homeComponents/Testimonials";
import Section2 from "./components/pagesComponets/homeComponents/Section2";
import BillsSec from "./components/pagesComponets/homeComponents/BillsSec";
import Nofees from "./components/pagesComponets/homeComponents/NoFees";
import Signup from "./components/pagesComponets/homeComponents/Signup";

const Page = () => {
  return (
    <>
      <Hero />
      <Section2 />
      <BillsSec />
      <Nofees />
      <CardStackDemo /> 
      <Signup />
    </>
  );
};

export default Page;
