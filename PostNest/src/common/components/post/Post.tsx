import {
    PostWrapper,
} from "@/common/components/post/style";
import { IPost } from "@/common/interfaces/posts";
import HeaderPost from "@/common/components/post/components/HeaderPost";
import ContentPost from "@/common/components/post/components/ContentPost";
import FooterPost from "./components/FooterPost";

const Post = (post: IPost) => {

    return (
        <PostWrapper>
            <HeaderPost
                username={post.username}
                first_name={post.first_name}
                last_name={post.last_name}
                avatar={post.avatar}
            />

            <ContentPost 
                content={post.content}
                media_content={post.media_content}
            />

            <FooterPost 
                postId={post.id}
                liked={post.liked}
                likes_count={post.likes_count}
                created_at={post.created_at}
            />
        </PostWrapper>
    );
};

export default Post;