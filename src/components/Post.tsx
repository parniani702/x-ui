import Image from "next/image";
import PostInfo from "./PostInfo";
import PostInterAction from "./PostInterAction";

interface PostProp {
    id: number;
    avatar: string;
    name: string;
    username: string;
    date: string;
    text: string;
}

const Post: React.FC<PostProp> = ({
    id,
    avatar,
    name,
    username,
    date,
    text
}) => {
    return ( 
        <div className="p-4 border-y-[1px] border-borderGray">
            {/* POST T */}
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                <span>devlope</span>
            </div>
            {/* POST CONTENT */}
            <div className="flex flex-1 flex-col gap-4">
                <div className="rounded-full relative w-10 h-10 overflow-hidden">
                    <Image src={avatar}  alt="a" width={40} height={40} />
                </div>
                <div className="">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="opacity-75">{name}</h1>
                        <span className="opacity-60">{username}</span>
                        <span className="opacity-45 text-sm">{date}</span>
                    </div>
                    <PostInfo />
                {/* TEXT MEDIA  */}
                <p className="">
                    {
                        text
                    }
                </p>
                <Image src={`/general/${id}.jpeg`} alt="" width={600} height={600} />
                <PostInterAction />
                </div>
            </div>
        </div>
     );
}
 
export default Post;