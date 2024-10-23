import NewPost from "@/common/components/newpost/NewPost";
import Post from "@/common/components/post/Post"
import { HomeWrapper } from "@/modules/user/home/style";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useGetPosts from "@/common/hooks/useGetPosts";

const Home = () => {
    const { data, isError, error } = useGetPosts();
    const client = useQueryClient();

    useEffect(() => {
        if (isError) {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] })
            }
        }
    }, [error, isError]);

    return (
        <HomeWrapper>
            <NewPost />
            {data?.map(post => (
                <Post
                    key={post.id}
                    {...post}
                />
            ))}
        </HomeWrapper>
    );
};

export default Home;