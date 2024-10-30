import Nav from "../components/sectionComponents/Nav";
import Footer from "../components/sectionComponents/Footer";
import Image from "next/image";

const aboutPage = () => {
  return (
    <>
      <Nav page="about" />
      <div className="mt-[5.5rem]">
        <div className="flex justify-center">
          <div className="p-2 my_fixed_width pb-5">
            <h1 className="text-2xl font-semibold">About Eversub</h1>
            <p className="my-4 font-semibold">
              Discover the team, mission, and story behind Eversub.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[3rem]">
          <div className="p-2 my_fixed_width">
            <h2 className="text-[1.3rem] font-semibold">Our Mission</h2>
            <p className="my-2 mb-7">
              At Eversub, we aim to simplify subscription management, helping users
              track, manage, and optimize their services in one convenient platform.
              We believe in providing transparency and control, so users can get the most
              out of their subscriptions without the stress of manual tracking.
            </p>

            <h2 className="text-[1.3rem] font-semibold">Our Story</h2>
            <p className="my-2 mb-7">
              Eversub was born out of the frustration of juggling multiple subscriptions
              with little oversight. Realizing that others faced the same problem, we set
              out to create a solution that brings simplicity to an otherwise complex 
              task. Our journey has been fueled by a commitment to innovation and customer 
              satisfaction.
            </p>

            <h2 className="text-[1.3rem] font-semibold">Our Values</h2>
            <p className="my-2 mb-7">
              We’re guided by core values of transparency, efficiency, and user-centric
              design. These values shape everything we do, from the features we build to
              the way we interact with our community.
            </p>

            <h2 className="text-[1.3rem] font-semibold">The Team</h2>
            <p className="my-2 mb-7">
              Our team is a group of passionate developers, designers, and thinkers who
              share a common goal: making subscription management effortless for everyone.
              With a mix of experience in tech, design, and customer support, we’re here to
              provide a seamless experience for our users.
            </p>

            <h2 className="text-[1.3rem] font-semibold">Get in Touch</h2>
            <p className="my-2 mb-7">
              We&apos;d love to hear from you! Whether you have questions, feedback, or ideas, feel free
              to <a href="/contact" className="underline">contact us</a>. Join us on this journey to make 
              subscription management better and simpler.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default aboutPage;
