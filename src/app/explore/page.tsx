import Search from "@/components/Search";

const Explore = () => {
  const exploreData = [
    {
      id: 1,
      des: "Judge Jeanine Piro Appointed D.C.U.S Attorney After Senate Hurdles",
      time: "21 hours ago"
    },
    {
      id: 2,
      des: "Elon Musk Unveils Neuralink Prototype in Live Demo",
      time: "18 hours ago"
    },
    {
      id: 3,
      des: "UN Calls Emergency Meeting Over Rising Tensions in Eastern Europe",
      time: "16 hours ago"
    },
    {
      id: 4,
      des: "Messi Leads Argentina to Victory in Thrilling Copa Final",
      time: "12 hours ago"
    },
    {
      id: 5,
      des: "New Study Shows Mediterranean Diet Lowers Risk of Heart Disease",
      time: "9 hours ago"
    },
    {
      id: 6,
      des: "Oscar Nominations 2025 Announced: Surprises and Snubs",
      time: "5 hours ago"
    },
    {
      id: 7,
      des: "NASA Confirms Discovery of Earth-Like Planet in Habitable Zone",
      time: "2 hours ago"
    },
  ];


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full p-4">
        <Search />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-textGrayLight">Today s news</h1>
        {exploreData.map((item) => (
          <div
            key={item.id}
            className="flex mt-10 flex-col gap-2 hover:bg-gray-950 p-4 rounded-2xl">
              <h1 className="text-textGrayLight">{item.des}</h1>
              <span className="text-textGray opacity-50">{item.time}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
