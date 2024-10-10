import NewPost from "@/common/components/newpost/NewPost";
import Post from "@/common/components/post/Post"
import { HomeWrapper } from "@/modules/user/home/style";

const Home = () => {
    return (
        <HomeWrapper>
            <NewPost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </HomeWrapper>
    );
};

export default Home;