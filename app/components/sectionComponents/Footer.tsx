import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-8 flex justify-center py-[3rem] md:mt-0">
      <div className="my_fixed_width">
        <h3 className="text-base font-bold font-grotesk">Eversub</h3>
        <div className="grid gap-3 place-items-center grid-cols-2 my-6">
            <Link className="text-[0.8rem] underline font-rubik font-semibold" href="/about">About</Link>
            <Link className="text-[0.8rem] underline font-rubik font-semibold" href="/privacy">Privacy Policy</Link>
        </div>
        <p className="text-center text-[0.8rem] font-rubik mt-[5rem]">&copy; Copyright 2024,<br /> All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer
