import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-8 flex justify-center py-[3rem] md:mt-0">
      <div className="my_fixed_width">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold font-grotesk">Eversub</h3>
          <div className="flex justify-between items-center gap-3">
            <a
              href="#"
              target="_blank"
              className=" bg-myRed bg-opacity-100 w-7 h-7 hover:bg-orange-500 rounded-full text-white flex justify-center items-center text-sm"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className=" bg-myRed bg-opacity-100 w-7 h-7 hover:bg-orange-500 rounded-full text-white flex justify-center items-center text-sm"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className=" bg-myRed bg-opacity-100 w-7 h-7 hover:bg-orange-500 rounded-full text-white flex justify-center items-center text-sm"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <p className="text-[0.95rem] py-6">
          Eversub is a cutting-edge platform designed to simplify and streamline
          subsicription payments for individuals and businesses. Our innovative
          solution consolidates and ventralizes subscription services, providing
          a seamless and intuitive experience.
        </p>
        <div className="grid gap-3 grid-cols-2 mt-4">
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-[1.05rem]">Company</p>
            <Link className="text-[0.95rem] font-rubik" href="/about">
              About Us
            </Link>
            <Link className="text-[0.95rem] font-rubik" href="/faq">
              FAQ
            </Link>
            <Link className="text-[0.95rem] font-rubik" href="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-[1.05rem]">Legal</p>
            <Link className="text-[0.95rem] font-rubik" href="/privacy">
              Privacy
            </Link>
            <Link className="text-[0.95rem] font-rubik" href="/terms">
              Terms
            </Link>
          </div>
        </div>
        <p className="text-center text-[0.95rem] font-rubik mt-[4rem]">
          &copy; Copyright 2024,
          <br /> All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer
