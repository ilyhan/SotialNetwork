import {
    PostLoaderAvatar,
    PostLoaderHeader,
    PostLoaderName,
    PostLoaderWrapper,
    PostLoaderContent,
    PostLoaderFooter,
    PostLoaderLike,
    PostLoaderTime,
} from "./style";

const PostLoader = () => {
    return (
        <PostLoaderWrapper>
            <PostLoaderHeader>
                <PostLoaderAvatar />
                <PostLoaderName />
            </PostLoaderHeader>

            <PostLoaderContent />

            <PostLoaderFooter>
                <PostLoaderLike />
                <PostLoaderTime />
            </PostLoaderFooter>
        </PostLoaderWrapper>
    )
};

export default PostLoader;