import Link from "next/link";
import Icons from "../Icons/Icons";

const QuickLinks = ({ page='' }) => {
  return (
    <section>
      <h4 className="text-[1rem] my-5 font-semibold">Quick Links</h4>
      <div className="border-l-2 border-myBlack flex flex-col pl-4 py-4 mb-9 text-[0.9rem] space-y-2">
        <Link href="/privacy">
          <span
            className={`${
              page === "privacy" ? "bg-myBlack text-white px-3" : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "privacy" ? "1.05rem" : "0.9rem"}
              width={page === "privacy" ? "1.05rem" : "0.9rem"}
              color={page === "privacy" ? "white" : "#332941"}
            />
            <span>Privacy Policy</span>
          </span>
        </Link>
        <Link href="/terms">
          <span
            className={`${
              page === "terms" ? "bg-myBlack text-white px-3" : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "terms" ? "1.05rem" : "0.9rem"}
              width={page === "terms" ? "1.05rem" : "0.9rem"}
              color={page === "terms" ? "white" : "#332941"}
            />
            <span>Terms & Condition</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

export default QuickLinks;