import Image from "next/image";

const PopularTags = () => {
const PopularTagsData = [
  {
    id: 1,
    name: "live along",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eius.",
  },
  {
    id: 2,
    name: "explore the world",
    desc: "Discover new places, cultures, and experiences that will change your life forever.",
  },
  {
    id: 3,
    name: "learn a new language",
    desc: "Learning a new language opens doors to new cultures and enhances cognitive abilities.",
  },
  {
    id: 4,
    name: "read more books",
    desc: "Books broaden your knowledge, improve focus, and are a great source of inspiration.",
  },

];

  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">Whats happening</h1>
      {/* TRENDS */}
      <div className="">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image src="/general/2.jpeg" alt="" width={120} height={120} />
        </div>
        <div className=""></div>
      </div>
      {/* TOPICS */}
      <div className="flex-1 flex flex-col gap-4 justify-between cursor-pointer">
        {
        PopularTagsData.map((item) => (
          <div key={item.id} className="flex flex-col relative transition hover:opacity-65">
            <h2 className="text-textGrayLight">{item.name}</h2>
            <span className="text-sm text-textGray">{item.desc}</span>
            <Image
              src="/icons/infoMore.svg"
              className="hover:bg-sky-200 rounded-full transition absolute right-0"
              alt=""
              width={30}
              height={30}
            />
          </div>
        ))
        }

        {/*  */}
      </div>
    </div>
  );
};

export default PopularTags;
