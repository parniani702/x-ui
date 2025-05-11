
import Feed from "@/components/Feed";
import Link from "next/link";

const Following = () => {
  return (
    <div className="">
      <div className="px-4 pt-4 flex justify-evenly text-textGray font-bold border-r-[1px] border-borderGray">
        <Link className="pb-3 flex items-center" href="/">
          ForYou
        </Link>
        <Link className="pb-3 flex items-center text-gray-300" href="/following">
          Following
        </Link>
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
};

export default Following;
