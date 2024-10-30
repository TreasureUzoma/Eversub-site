import Nav from "../components/sectionComponents/Nav";
import Footer from "../components/sectionComponents/Footer";
import Link from "next/link";

const privacyPage = () => {
  return (
    <>
      <Nav page="privacy" />
      <div className="mt-[5.5rem]">
        <div className="flex justify-center">
          <div className="p-2 my_fixed_width pb-5 border-slate-800">
            <h1 className="text-2xl font-semibold">Privacy Policy</h1>
            <p className="my-4 font-semibold">
              Learn About how your data is handled at Eversub
            </p>
            <p className="my-4 font-semibold text-sm">
              Effective Date: 22, December 2024
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[3rem]">
          <div className="p-2 my_fixed_width">
            <h2 className="text-[1.3rem] font-semibold">Introduction:</h2>
            <p className="my-2 mb-7">
              Welcome to <i>Eversub</i>. This Privacy Policy exolains how we
              collect, use, disclose, and protect your information about you
              when you use our website, application, and any other products and
              services we may offer (collectively, <q>Services</q>).
              <br />
              By using our Services, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-[1.3rem] font-semibold">
              1. Information We Collect
            </h2>
            <h3 className="text-[1rem] font-semibold">
              a. Personal Information
            </h3>
            <p className="my-2 mb-7">
              When you sign up for our waitlist, create an account, or use
              certain features, we may collect the followwing personal
              information information:
            </p>
            <ol className="font-rubik text-[0.9rem]">
              <li>Name</li>
              <li>Email address</li>
            </ol>

            <h3 className="text-[1.3rem] font-semibold">
              Why we ask for your data
            </h3>
            <p className="my-2 mb-7">
              Lorem ipsum dolor sit amen do si fi lorem ipsum dolor sit amen
              lorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum
              dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amen
            </p>

            <h3 className="text-[1.3rem] font-semibold">Our Services</h3>
            <p className="my-2 mb-7">
              Lorem ipsum dolor sit amen do si fi lorem ipsum dolor sit amen
              lorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum
              dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amen
            </p>

            <h3 className="text-[1.3rem] font-semibold">
              How your data is stored
            </h3>
            <p className="my-2 mb-7">
              Lorem ipsum dolor sit amen do si fi lorem ipsum dolor sit amen
              lorem ipsum dolor sit amenlorem ipsum dolor sit amenlorem ipsum
              dolor sit amenlorem ipsum dolor sit amenlorem ipsum dolor sit amen
            </p>

            <h3 className="text-[1.3rem] font-semibold">Contact Us</h3>
            <p className="my-2 mb-7">
              Do you have questions you&apos;re curious to ask? ask us by
              following this{" "}
              <Link href="/contact" className="underline">
                page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default privacyPage;
