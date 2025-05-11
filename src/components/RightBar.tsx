import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBarPage = () => {
    return ( 
        <div className="pt-4 flex ml-5 flex-col gap-4 sticky top-0 h-max">
            <Search />
            <PopularTags />
            <Recommendations />
            <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
                <Link href="/">Term of Services</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Cookie Policy</Link>
                <Link href="/">Accessibility</Link>
                <Link href="/">Ads Info</Link>
                <span>2025 L Crop.</span>
            </div>
        </div>
     );
}
 
export default RightBarPage;