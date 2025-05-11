import Post from "./Post";

const Feed = () => {
  return (
    <div className="">
      <Post
        id={1}
        name="Elon Musk"
        username="@elonmusk"
        avatar="https://i.pravatar.cc/150?img=1"
        date="2 hours ago"
        text="Just unveiled the Neuralink demo. Super excited about the future of brain-computer interfaces!"
      />

      <Post
        id={2}
        name="Greta Thunberg"
        username="@gretathunberg"
        avatar="https://i.pravatar.cc/150?img=2"
        date="5 hours ago"
        text="Climate crisis is still being ignored by those in power. Keep raising your voices!"
      />

      <Post
        id={3}
        name="Cristiano Ronaldo"
        username="@cr7"
        avatar="https://i.pravatar.cc/150?img=3"
        date="9 hours ago"
        text="Amazing team effort last night. Proud of the victory!"
      />
    </div>
  );
};

export default Feed;
