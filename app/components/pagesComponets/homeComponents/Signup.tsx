import React from 'react'
import Image from 'next/image';
import GetStartedBtn from '../../GetStartedBtn';

const Signup = () => {
  return (
    <section className="flex_center py-[6rem]">
      <div className="my_fixed_width items-center gap-12 md:gap-0 grid md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="tracking-[-1px] text-2xl font-semibold md:text-4xl">
            Join Eversub Now!
          </h2>
          <p>
            You still have&#39;t joined yet? Sign up now and experience the convenience of easy bill payments and subscriptions with Eversub!
          </p>
          <div>
            <GetStartedBtn />
          </div>
        </div>
        <figure className="w-full flex items-center justify-center md:justify-end">
          <Image
            alt="Eversub Mockup"
            width={1000}
            height={1000}
            src="/images/mockups/walletscreenshot.png"
          />
        </figure>
      </div>
    </section>
  );
}

export default Signup;