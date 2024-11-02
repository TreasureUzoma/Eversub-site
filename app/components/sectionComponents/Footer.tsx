import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 flex justify-center py-[3rem] md:mt-0 bg-myRed bg-opacity-10">
      <div className="my_fixed_width">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold font-grotesk">Eversub</h3>
          <div className="flex justify-between items-center gap-3">
            <a
              href="#"
              target="_blank"
              className="bg-myRed bg-opacity-10 w-8 h-8 hover:bg-orange-500 hover:text-white rounded-full text-myRed flex justify-center items-center text-sm"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-myRed bg-opacity-10 w-8 h-8 hover:bg-orange-500 hover:text-white rounded-full text-myRed flex justify-center items-center text-sm"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-myRed bg-opacity-10 w-8 h-8 hover:bg-orange-500 hover:text-white rounded-full text-myRed flex justify-center items-center text-sm"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <p className="text-[0.9rem] py-6">
          Eversub is a cutting-edge platform designed to simplify and streamline
          subsicription payments for individuals and businesses.
        </p>
        <div className="grid gap-3 grid-cols-2 mt-4">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-[1.05rem]">Company</p>
            <Link className="text-[0.9rem]" href="/about">
              About Us
            </Link>
            <Link className="text-[0.9rem]" href="/faq">
              FAQs
            </Link>
            <Link className="text-[0.9rem]" href="/contact">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-[1.05rem]">Legal</p>
            <Link className="text-[0.9rem]" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-[0.9rem]" href="/terms">
              Terms and Conditions
            </Link>
          </div>
        </div>
        <p className="text-center text-[0.95rem] mt-[4rem]">
          &copy; Copyright 2024,
          <br /> All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer
