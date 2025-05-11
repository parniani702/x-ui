import Image from "next/image";
import Link from "next/link";


const Recommendations = () => {
  const recommendationsData = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/150?img=40",
      fullname: "roya ahmadi",
      username: "@roya",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/150?img=2",
      fullname: "Ali akbari",
      username: "@ali_akbari",
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc/150?img=3",
      fullname: "Reza Asgarian",
      username: "@reza_asgarian91",
    },
  ];


  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* USER CARD */}
      {recommendationsData.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative rounded-full overflow-hidden w-10 h-10">
              <Image src={item.avatar} alt="" width={100} height={100} />
            </div>
            <div className="">
              <h1 className="text-md font-bold">{item.fullname}</h1>
              <span className="text-textGray text-sm">{item.username}</span>
            </div>
          </div>
          <button className="py-1 px-4 font-semibold bg-white text-black rounded-full transition hover:opacity-60">
            Follow
          </button>
        </div>
      ))}

      <Link href="/" className="text-iconBlue hover:opacity-55">
        show more
      </Link>
    </div>
  );
};

export default Recommendations;
