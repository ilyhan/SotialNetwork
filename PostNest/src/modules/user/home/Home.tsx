import NewPost from "@/common/components/newpost/NewPost";
import Post from "@/common/components/post/Post"
import { HomeWrapper } from "@/modules/user/home/style";
import defaultImg from "/images/default.jpg";

const Home = () => {
    return (
        <HomeWrapper>
            <NewPost />
            <Post
                avatar={defaultImg}
                name="Ilia"
                content="Content"
            />
        </HomeWrapper>
    );
};

export default Home;