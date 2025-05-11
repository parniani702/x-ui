import Image from "next/image";
import Link from "next/link";

const Notification = () => {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-evenly text-textGray font-bold border-r-[1px] border-borderGray">
        <Link className="pb-3 flex items-center" href="/notification">
          ALL
        </Link>
        <Link className="pb-3 flex items-center" href="/notification">
          Verify
        </Link>
        <Link className="pb-3 flex items-center" href="/notification">
          Mention
        </Link>
      </div>
      <div className="flex gap-2 justify-start mt-6 items-center bg-slate-800 mx-5 rounded-xl">
        <svg
        className="ml-3"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z"
            stroke="red"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9V13"
            stroke="red"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 17.0195V17"
            stroke="red"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="p-3 text-center text-lg text-gray-500">There is no post to show yet.</h1>

      </div>
    </div>
  );
};

export default Notification;
