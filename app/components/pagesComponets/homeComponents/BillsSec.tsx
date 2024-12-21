import Image from 'next/image';

const BillsSec = () => {
  return (
    <section className="flex_center py-[6rem] bg-myRed">
      <div className="my_fixed_width gap-12 md:gap-0 items-center grid md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="tracking-[-1px] text-2xl font-semibold md:text-4xl">
            Buy airtime and data at discounted prices.
          </h2>
          <p>
            Eversub airtime and data are sold at discounted prices. Recharge and enjoy unbeatable prices.
            Stay connected with our fast and reliable plans.
          </p>
          <div>
            <a
              href="https://eversubapp.vercel.app"
              className="mt-2 px-4 py-1 border border-2 bg-white border-white rounded-lg inline-block hover:bg-gray-100"
            >
              Get Started
            </a>
          </div>
        </div>
        <figure className="w-full flex items-center justify-center md:justify-end">
          <Image
            alt="Buy Airtime and Data with Eversub"
            width={1000}
            height={1000}
            src="/images/mockups/airtimemockup.png"
          />
        </figure>
      </div>
    </section>
  );
}

export default BillsSec