import {
    PostWrapper,
} from "@/common/components/post/style";
import { IPost } from "@/common/interfaces/posts";
import HeaderPost from "@/common/components/post/components/HeaderPost";
import ContentPost from "@/common/components/post/components/ContentPost";
import FooterPost from "@/common/components/post/components/FooterPost";

interface IPostProps extends IPost {
    isMy?: boolean;
};

const Post = ({ isMy = false, ...post }: IPostProps) => {
    return (
        <PostWrapper>
            <HeaderPost
                username={post.username}
                first_name={post.first_name}
                last_name={post.last_name}
                avatar={post.avatar}
                isMy={isMy}
                post_id={post.id}
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