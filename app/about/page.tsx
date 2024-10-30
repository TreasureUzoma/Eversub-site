import Nav from "../components/sectionComponents/Nav";
import Footer from "../components/sectionComponents/Footer";
import Link from "next/link";

const aboutPage = () => {
  return (
    <>
      <Nav page="about" />
      <div className="mt-[5.5rem]">
        <div className="flex justify-center">
            <div className="p-2 my_fixed_width pb-5 border-slate-800">
                <h1 className="text-2xl font-semibold">About us</h1>
                <p className="my-4 font-semibold">Get to know us and what we are building!</p>
            </div>
        </div>
        <div className="flex justify-center mt-[3rem]">
            <div className="p-2 my_fixed_width">
                <h2 className="text-[1.3rem] font-semibold">Revolutionizing Subscription Management</h2>
                <p className="my-2 mb-7">Eversub is a cutting-edge platform designed to simplify and streamline subsicription payments for individuals and businesses. Our innovative solution consolidates and ventralizes subscription services, providing a seamless and intuitive experience. </p>

                <h3 className="text-[1.3rem] font-semibold">Mission</h3>
                <p className="my-2 mb-7">Empower users to effortlessly manage their subscription, save time, and reduce costs.</p>

                <h3 className="text-[1.3rem] font-semibold">Our Goals</h3>
                <p className="my-2 mb-7">Lorem ipsum dolor sit amen do si fi lorem ipsum dolor sit amen lorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amen</p>

                <h3 className="text-[1.3rem] font-semibold">Our Services</h3>
                <p className="my-2 mb-7">Lorem ipsum dolor sit amen do si fi lorem ipsum dolor sit amen lorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amen</p>

                <h3 className="text-[1.3rem] font-semibold">Why Us?</h3>
                <p className="my-2 mb-7">Lorem ipsum dolor sit amen do si fi lorem ipsum dolor sit amen lorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amen</p>

                <h3 className="text-[1.3rem] font-semibold">Contact Us</h3>
                <p className="my-2 mb-7">Do you have questions you&apos;re curious to ask? ask us by following this <Link href="/contact" className="underline">page</Link>.</p>

            </div>
        </div>        

      </div>
      <Footer />
    </>
  );
};

export default aboutPage;
