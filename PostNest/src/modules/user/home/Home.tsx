import NewPost from "@/common/components/newpost/NewPost";
import Post from "@/common/components/post/Post"
import { HomeWrapper } from "@/modules/user/home/style";
import defaultImg from "/images/default.jpg";
import { useEffect, useState } from "react";

interface IPost {
    id: number;
    user_id: number;
    content: string;
    media_content?: string[];
    likes_count: number;
    created_at: string;
    liked: boolean;
    username: string;
    first_name: string;
    avatar: string;
}

const Home = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('http://localhost:3001/api/posts', {
                credentials: 'include',
            });
            const data = await res.json() as IPost[];
            data.reverse();
            setPosts([...data]);
        }
        getPosts();
    },[]);
    return (
        <HomeWrapper>
            <NewPost />
            <Post
                avatar={defaultImg}
                name="Ilia"
                content="Content"
            />
            {posts.map((post) =>
                <Post
                    id={post.id}
                    key={post.id}
                    avatar={post.avatar}
                    name={post.first_name}
                    content={post.content}
                    liked={post.liked}
                    likesCount={post.likes_count}
                    username={post.username}
                    media={post.media_content}
                />
            )}
        </HomeWrapper>
    );
};

export default Home;