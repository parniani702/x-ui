import Image from "next/image";
import Link from "next/link";

const Messages = () => {
  return (
    <div className="">
      <Link href="/">
        <Image
          className="ml-2 my-2"
          src="icons/back.svg"
          alt=""
          width={24}
          height={24}
        />
      </Link>
      <div className="p-3">
        <h1 className="text-2xl text-textGrayLight">Messages</h1>
      </div>
      <div className="flex flex-col h-[60vh] md:h-screen justify-center items-center text-center gap-4">
        <h1 className="text-4xl max-w-[280px]">Welcome to your inbox</h1>
        <p className="text-sm max-w-[360px] text-gray-500">
          Drop a line , share posts and more width privet conversitions between
          you and other on x
        </p>
        <button className="bg-sky-500 px-6  py-4 rounded-2xl text-white">
          Write a message
        </button>
      </div>
    </div>
  );
};

export default Messages;
