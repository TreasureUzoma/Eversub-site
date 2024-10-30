import Link from "next/link";

const QuickLinks = ({ page='' }) => {
  return (
    <section>
      <h4 className="text-[1rem] my-5 font-semibold">Quick Links</h4>
      <div className="border-l-4 border-myBlack flex flex-col pl-4 py-4 mb-9 text-[0.9rem] space-y-2 font-semibold">
        <Link href="/privacy">
          <span
            className={`${
              page === "privacy" ? "bg-myBlack text-white px-3" : ""
            } inline-flex py-2 rounded-lg`}
          >
            Privacy Policy
          </span>
        </Link>
        <Link href="/terms">
          <span
            className={`${
              page === "terms" ? "bg-myBlack text-white px-3" : ""
            } inline-flex py-2 rounded-lg`}
          >
            Terms & Condition
          </span>
        </Link>
      </div>
    </section>
  );
}

export default QuickLinks