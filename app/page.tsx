import Hero from "./components/pagesComponets/homeComponents/Hero";
import  Section1 from "./components/pagesComponets/homeComponents/Section1";
import  Section2 from "./components/pagesComponets/homeComponents/Section2";
import BillsSec from "./components/pagesComponets/homeComponents/BillsSec";
import Nofees from "./components/pagesComponets/homeComponents/NoFees";
import Signup from "./components/pagesComponets/homeComponents/Signup";

const page = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <BillsSec />
      <Nofees />
      <Signup />
    </>
  );
};

export default page;
