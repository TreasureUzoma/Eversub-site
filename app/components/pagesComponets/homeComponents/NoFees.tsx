import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Nofees = () => {
  return (
    <section className="flex_center py-[6rem] bg-lightOrange">
      <div className="my_fixed_width gap-10 md:gap-0 items-center grid md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="tracking-[-1px] text-2xl font-semibold md:text-4xl">
            Say goodbye to transaction any fees.
          </h2>
          <p>
            Make the most of your paymennts with Eversub! We don&#39;t charge
            any transaction fees, so you can pay bills, gift loved ones, and handle subscriptions with
            ease, without any extra costs.
          </p>
          <div>
            <Link
              href="#"
              className="mt-2 px-3 py-1 border border-2 border-myRed rounded-md inline-block hover:bg-myRed hover:dark"
            >
              Learn more
            </Link>
          </div>
        </div>
        <figure className="w-full flex items-center justify-center md:justify-end">
          <Image
            alt="Eversub Mockup"
            width={1000}
            height={1000}
            src="/images/mockups/profilescreenshot.png"
          />
        </figure>
      </div>
    </section>
  );
}

export default Nofees;