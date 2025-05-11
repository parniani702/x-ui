import Search from "@/components/Search";
import Image from "next/image";

const Jobs = () => {
    return ( 
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex gap-2 text-center">
                <Image src="/icons/logo.svg" alt="" width={40} height={40} />
                <h1 className="text-4xl">Jobs Search</h1>
            </div>
                <div className="mt-7 w-full px-5">
                    <Search />
                </div>
        </div>
     );
}
 
export default Jobs;