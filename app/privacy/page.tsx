
import Nav from "../components/sectionComponents/Nav";
import Footer from "../components/sectionComponents/Footer";
import HeroTwo from "../components/pagesComponets/HeroTwo";
import QuickLinks from "../components/pagesComponets/QuickLinks";
import Link from "next/link";

const privacyPage = () => {
  return (
    <>
      <Nav page="privacy" />
      <div className="mt-[4.8rem]">
        <HeroTwo pageName="Privacy Policy" bgColor="bg-[#e0eff1]" />
        <div className="flex justify-center mt-[3rem]">
          <div className="p-2 my_fixed_width">
            <QuickLinks  page="privacy"/>
            <h2 className="text-[1rem] font-semibold">
              Eversub Privacy Policy
            </h2>
            <p className="my-2 text-[0.9rem]text-[0.9rem] mb-7">
              Effective Date: 26/12/2024
            </p>

            <h2 className="text-[1rem] font-semibold">Introduction</h2>
            <p className="my-2 text-[0.9rem]mb-7">
              Welcome to <i>Eversub</i>. This Privacy Policy explains how we
              collect, use, disclose, and protect information about you when you
              use our website, application, and any other products and services
              we may offer (collectively, <q>Services</q>).
              <br />
              By using our Services, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-[1rem] font-semibold">
              1. Information We Collect
            </h2>
            <h3 className="text-[1rem] font-semibold">
              a. Personal Information
            </h3>
            <p className="my-2">
              When you sign up for our waitlist, create an account, or use
              certain features, we may collect the following personal
              information:
            </p>
            <ol className="font-rubik text-[0.92rem] list-disc pl-4 mb-4">
              <li>Name</li>
              <li>Contact information</li>
              <li>Date of Birth</li>
              <li>Payment information (when making payments)</li>
            </ol>

            <h3 className="text-[1rem] font-semibold">
              b. Automatically Collected Information
            </h3>
            <p className="my-2">
              We may collect certain information automatically when you use our
              Services, such as:
            </p>
            <ol className="font-rubik text-[0.92rem] list-disc pl-4 mb-7">
              <li>
                Device Information (e.g., IP address, browser type, and version)
              </li>
              <li>
                Usage data (e.g., pages viewed, time spent on pages, links
                clicked)
              </li>
            </ol>

            <h2 className="text-[1rem] font-semibold">
              2. How We Use Your Information
            </h2>
            <p className="my-2">
              We use the collected information to improve your experience with
              our Services, as described below:
            </p>
            <ol className="font-rubik text-[0.92rem] list-disc pl-4 mb-7">
              <li>
                <b>Account Management:</b> To create and manage your account.
              </li>
              <li>
                <b>Service Delivery:</b> To facilitate payment of your bills and
                subscriptions.
              </li>
              <li>
                <b>Communication:</b> To send notifications, updates, and other
                information related to your account and Services.
              </li>
              <li>
                <b>Marketing:</b> To send promotional messages (you may opt out
                at any time).
              </li>
              <li>
                <b>Compliance:</b> To comply with applicable laws, regulations,
                and legal obligations.
              </li>
            </ol>

            <h2 className="text-[1rem] font-semibold">3. Our Services</h2>
            <p className="my-2 text-[0.9rem]mb-7">
              Eversub provides a convenient way to manage and pay your bills and
              subscriptions all in one place. Our platform helps simplify
              financial tasks by offering tools to track payment schedules,
              manage payment methods, and automate reminders. In the future, we
              plan to add features such as expense analysis, budgeting tools,
              and enhanced security measures to improve user experience.
            </p>

            <h2 className="text-[1rem] font-semibold">
              4. How Your Data Is Stored
            </h2>
            <p className="my-2 text-[0.9rem]mb-7">
              Your data is securely stored using industry-standard encryption
              and security practices. We utilize secure servers and databases to
              protect your personal information from unauthorized access,
              alteration, or destruction. Only authorized personnel with a
              legitimate need to know can access your data. Additionally, any
              sensitive payment information you provide is securely processed by
              our third-party payment processors, adhering to all necessary
              security standards.
            </p>

            <h2 className="text-[1rem] font-semibold">5. Contact Us</h2>
            <p className="my-2 text-[0.9rem]text-[0.9rem]mb-7">
              If you have questions or concerns about this Privacy Policy or
              your data, please reach out to us via our{" "}
              <Link href="/contact" className="underline">
                Contact Page
              </Link>
              . We value your privacy and are here to help.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default privacyPage;
      
