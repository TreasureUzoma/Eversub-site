import Link from "next/link";
import Icons from "../Icons/Icons";

const QuickLinksTwo = ({ page='' }) => {
  return (
    <section>
      <h4 className="text-[1rem] my-5 font-semibold">Quick Links</h4>
      <div className="border-l-2 border-myBlack flex flex-col pl-4 py-4 mb-9 text-[0.9rem] space-y-2">
        <Link href="/about">
          <span
            className={`${
              page === "about" ? "bg-myBlack text-white px-3" : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "about" ? "1.05rem" : "0.9rem"}
              width={page === "about" ? "1.05rem" : "0.9rem"}
              color={page === "about" ? "white" : "#332941"}
            />
            <span>About Us</span>
          </span>
        </Link>
        <Link href="/faq">
          <span
            className={`${
              page === "faq" ? "bg-myBlack text-white px-3" : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "faq" ? "1.05rem" : "0.9rem"}
              width={page === "faq" ? "1.05rem" : "0.9rem"}
              color={page === "faq" ? "white" : "#332941"}
            />
            <span>Frequently Asked Questions</span>
          </span>
        </Link>
        <Link href="/faq">
          <span
            className={`${
              page === "contact" ? "bg-myBlack text-white px-3" : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "contact" ? "1.05rem" : "0.9rem"}
              width={page === "contact" ? "1.05rem" : "0.9rem"}
              color={page === "contact" ? "white" : "#332941"}
            />
            <span>Contact Us</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

export default QuickLinksTwo;