import Post from "@/common/components/post/Post";
import { useGetPostsInfinit } from "@/common/hooks/useGetPostInfinity";
import PostLoader from "@/common/ui/loaders/postLoader/PostLoader";
import React, { useEffect } from "react";
import { HomeWrapper } from "./style";
import NewPost from "@/common/components/newpost/NewPost";

const Home = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useGetPostsInfinit();

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight - 500
        ) {
            if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasNextPage, isFetchingNextPage]);

    if (isError) {
        return <div>Произошла ошибка при загрузке данных.</div>;
    }

    return (
        <HomeWrapper>
            <NewPost />
            {isLoading
                ? Array(10).fill('').map(() => <PostLoader />)
                : data?.pages.map((page, pageIndex) => (
                    <React.Fragment key={pageIndex}>
                        {page.map((post) => (
                            <Post key={post.id} {...post} />
                        ))}
                    </React.Fragment>
                ))}
                
            {!hasNextPage && <div>Больше нет постов</div>}
        </HomeWrapper>
    );
};

export default Home;