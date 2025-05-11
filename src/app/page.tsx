"use client";
import Feed from "@/components/Feed";
import Modal from "@/components/Modal";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-evenly text-textGray font-bold border-r-[1px] border-borderGray">
        <Link className="pb-3 flex items-center text-gray-300 " href="/">
          ForYou
        </Link>
        <Link className="pb-3 flex items-center" href="/following">
          Following
        </Link>
      </div>
      <div className="z-50">
        <Modal>
          <Share />
        </Modal>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
