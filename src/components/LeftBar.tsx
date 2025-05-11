"use client";
import Image from "next/image";
import Link from "next/link";
import { useModalStore } from "@/store/modalStore";


const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/explore",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/notification",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/messages",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/bookmark",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/jobs",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "group",
    link: "/group",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/1",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBarPage = () => {
  const open = useModalStore((state => state.open))
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
              key={item.id}
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href="/"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image src="icons/post.svg" alt="new post" width={24} height={24} />
        </Link>
        <button
          onClick={open}
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </button>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src="/general/avatar.png"
              alt="lama dev"
              width={100}
              height={100}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Arash Parnini</span>
            <span className="text-sm text-textGray">@parnini702</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBarPage;
