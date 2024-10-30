import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-8 flex justify-center py-[3rem] md:mt-0">
      <div className="my_fixed_width">
        <h3 className="text-base font-bold font-grotesk">Eversub</h3>
        <p className="text-[0.8rem] py-6">Eversub is a cutting-edge platform designed to simplify and streamline subsicription payments for individuals and businesses. Our innovative solution consolidates and ventralizes subscription services, providing a seamless and intuitive experience.</p>
        <div className="grid gap-3 grid-cols-3 my-9 text-left md:grid-cols-4">
          <Link
            className="text-[0.8rem] font-rubik font-semibold"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[0.8rem] font-rubik font-semibold"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-[0.8rem] font-rubik font-semibold"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-[0.8rem] font-rubik font-semibold"
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className="text-[0.8rem] font-rubik font-semibold"
            href="/faq"
          >
            FAQ
          </Link>
          <Link
            className="text-[0.8rem] font-rubik font-semibold"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <p className="text-center text-[0.8rem] font-rubik mt-[4rem]">
          &copy; Copyright 2024,
          <br /> All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer
