import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

const Bookmarks = () => {
  return (
    <div className="">
      <Link href="/">
        <Image className="ml-2 my-2" src="icons/back.svg" alt="" width={24} height={24} />
      </Link>
      <div className="p-4">
        <Search />
      </div>
      <div className="flex justify-center flex-col items-center mt-7">
        <h1 className="font-bold text-4xl">Save posts for later</h1>
        <span className="max-w-[300px] text-textGray">
          Bookmark posts to easily find them again in the future
        </span>
      </div>
    </div>
  );
};

export default Bookmarks;
