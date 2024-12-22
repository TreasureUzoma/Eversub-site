import Image from 'next/image';
import GetStartedBtn from '../../GetStartedBtn';

const Section2 = () => {
  return (
    <section className="flex_center py-[6rem]">
      <div className="my_fixed_width gap-12 md:gap-0 items-center grid md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="tracking-[-1px] text-2xl font-semibold md:text-4xl">
            Receive gifts from loved ones.
          </h2>
          <p>
            Gifting loved ones with Eversub is super easy. Send friends and
            family your Eversub username and get gifts for free without worrying
            about transaction fees from both ends.
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
            src="/images/mockups/transactiondetails.png"
          />
        </figure>
      </div>
    </section>
  );
}

export default Section2