const Waitlist = () => {
  return (
    <main className="flex justify-center text-center md:items-center md:min-h-[55vh] lg:min-h-[80vh]">
      <div className="my_fixed_width lg:max-w-[750px]">
        <h2 className="text-[1.5rem] font-semibold">Join our waitlist!</h2>
        <p className="text-[0.9rem] my-2 mb-[2rem] font-rubik">
          Signup for our waitlist, be among the first to signup when Eversub
          minimum viable product is available.
        </p>
        <form>
          <div className="mb-5">
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Enter your email"
              className="rounded-xl p-3 text-[0.8rem] outline-none border focus:border-myRed w-full max-w-[330px] md:max-w-[500px]"
            />
          </div>
          <button className="py-2 px-8 bg-myRed rounded-2xl font-semibold text-white text-[0.8rem]">
            Join Now
          </button>
        </form>
      </div>
    </main>
  );
}

export default Waitlist
