import Link from "next/link";

const Hero = () => {
  return (
    <header className="my-[4rem] flex items-center min-h-[45vh] w-full md:min-h-[70vh] md:max-h-[600px] lg:min-h-[100vh]">
        <div className="md:px-[3.7rem] flex items-center justify-center md:w-full md:text-center">
            <div className="my_fixed_width lg:w-[800px]">
                <h1 className="text-[1.95rem] font-semibold">Pay bills, <span className="text-myRed bg-myRed px-2 rounded-2xl bg-opacity-10">effortlessly</span>
                </h1>
                <p className="text-[0.9rem] my-2 mb-7 font-rubik">Experience the benefits of effortlessly bill payments with Eversub. Save time, reduce stress and gain financial clarity. <span className="hidden md:inline">Our platform streamlines your expenses, allowing you to focus on what matters most.</span></p>
                <Link className="bg-myRed rounded-2xl py-2 px-6 text-white font-semibold text-center text-[0.77rem]" href="/about">Learn more!</Link>
            </div>
        </div>
    </header>
  )
}

export default Hero;
