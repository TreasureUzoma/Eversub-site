import Nav from "../components/sectionComponents/Nav";
import Footer from "../components/sectionComponents/Footer";
import QuickLinks from "../components/pagesComponets/QuickLinks";
import HeroTwo from "../components/pagesComponets/HeroTwo";
import Link from "next/link";

const termsPage = () => {
  return (
    <>
      <Nav page="terms" />
      <div className="mt-[5.5rem]">
        <HeroTwo pageName="Terms and Condtion" bgColor="bg-[#ebe3fb]" />
        <div className="flex justify-center mt-[3rem]">
          <div className="p-2 my_fixed_width">
            <QuickLinks page="terms" />
            <h2 className="text-[1rem] font-semibold">Eversub Terms of Use</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              Effective Date: 26/12/2024
            </p>

            <h2 className="text-[1rem] font-semibold">1. Introduction</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              Welcome to <i>Eversub</i>. These Terms and Conditions govern your
              use of our website, applications, and related services
              (collectively, the <q>Services</q>). By accessing or using our
              Services, you agree to these terms. If you disagree with any part,
              please discontinue use of our Services.
            </p>

            <h2 className="text-[1rem] font-semibold">2. User Obligations</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              As a user of Eversub, you agree to provide accurate information,
              comply with our guidelines, and respect other users. You are
              responsible for the security of your account and must notify us
              immediately of any unauthorized use.
            </p>

            <h2 className="text-[1rem] font-semibold">3. Data Privacy</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              We prioritize your data privacy and handle all personal
              information per our Privacy Policy. Your data will be used to
              enhance service quality, perform transactions, and communicate
              updates. For full details, refer to our{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>

            <h2 className="text-[1rem] font-semibold">4. Use of Services</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              Our Services include features like subscription management and
              personalized notifications. We grant you a limited,
              non-transferable right to use these Services for personal or
              business purposes, as per the conditions outlined here.
            </p>

            <h2 className="text-[1rem] font-semibold">5. Restrictions</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              You agree not to misuse the Services. Prohibited actions include
              reverse engineering, distributing unauthorized content, and using
              the Services for illegal purposes. Violation of these terms may
              lead to suspension or termination of your access.
            </p>

            <h2 className="text-[1rem] font-semibold">
              6. Liability Limitation
            </h2>
            <p className="my-2 text-[0.9rem] mb-7">
              Eversub is not liable for any damages arising from the use or
              inability to use the Services. We provide the Services{" "}
              <q>as is</q> and disclaim all warranties to the extent permitted
              by law.
            </p>

            <h2 className="text-[1rem] font-semibold">7. Changes to Terms</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              We may update these Terms occasionally. We will notify you of any
              significant changes, and your continued use of the Services
              signifies acceptance of the updated Terms.
            </p>

            <h2 className="text-[1rem] font-semibold">8. Contact Us</h2>
            <p className="my-2 text-[0.9rem] mb-7">
              If you have questions or concerns regarding these Terms, please
              visit our{" "}
              <Link href="/contact" className="underline">
                contact page
              </Link>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default termsPage;
              
