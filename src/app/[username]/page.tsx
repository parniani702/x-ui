"use client";
import Image from "next/image";
import Link from "next/link";

const Username = () => {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="">
        <Link href="/">
          <Image src="/icons/back.svg" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* INFO */}
      <div className="">
        {/* cover avatar container */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <Image src="/general/3.jpeg" width={600} height={200} alt="" />
          </div>
          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image
              src="/general/avatar.png"
              className="w-full h-full"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* USER FOLLOW & MORE & SEARCH AND MESSAGE  */}
        <div className="flex w-full items-center justify-end ga-2 p-2">
          <div className="w-9 h-9 flex items-center">
            <Image src="/icons/more.svg" alt="" width={20} height={20} />
          </div>

          <div className="w-9 h-9 flex items-center">
            <Image src="/icons/explore.svg" alt="" width={20} height={20} />
          </div>

          <div className="w-9 h-9 flex items-center">
            <Image src="/icons/message.svg" alt="" width={20} height={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
          <div className="p-4 flex flex-col gap-2">
            <div className="">
              <h1>Arash Parniani</h1>
              <span className="text-textGray text-sm">how</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Username;
