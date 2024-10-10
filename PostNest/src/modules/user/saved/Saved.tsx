import Post from "@/common/components/post/Post";
import defaultImg from "/images/default.jpg";
import { SavedWrapper } from "@/modules/user/saved/style";

const Saved = () => {
    return (
        <SavedWrapper>
            <Post
                avatar={defaultImg}
                name="Ilia"
                content="Content"
            />
        </SavedWrapper>
    );
};

export default Saved;