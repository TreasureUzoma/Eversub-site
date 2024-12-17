import Image from 'next/image';
import Link from 'next/link';

const Section1 = () => {
  return (
    <section className="flex_center py-[6rem] bg-lightOrange">
      <div className="my_fixed_width gap-12 md:gap-0 items-center grid md:grid-cols-2">
        <div className='flex flex-col gap-4'>
          <h2 className="tracking-[-1px] text-2xl font-semibold md:text-4xl">
            Check out your way.
          </h2>
          <p>
            Pay bills and subscriptions with ease on Eversub. Enjoy peace of
            mind knowing you&#39;re protected with our secure payment solutions,
            for all eligible transactions.
          </p>
          <div>
            <Link href="#" className='mt-2 px-3 py-1 border border-2 border-myRed rounded-md inline-block hover:bg-myRed'>Learn more</Link>
          </div>
        </div>
        <figure className="w-full flex items-center justify-center md:justify-end">
          <Image
            alt="Eversub Mockup"
            width={1000}
            height={1000}
            src="/images/mockups/settingscreenshot.png"
          />
        </figure>
      </div>
    </section>
  );
}

export default Section1