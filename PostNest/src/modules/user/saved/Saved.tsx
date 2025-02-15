import Post from "@/common/components/post/Post";
import useGetFavoritePosts from "@/common/hooks/useGetFavoritePosts";
import Loader from "@/common/ui/loaders/defaultLoader/DefaultLoader";
import { PostsWrapper, SavedWrapper } from "@/modules/user/saved/style";

const Saved = () => {
    const { data, isLoading, isError } = useGetFavoritePosts();

    return (
        isLoading
            ? <Loader />
            : <SavedWrapper>
                <PostsWrapper>
                    {
                        data?.map((item) => (
                            <Post key={item.id} {...item} liked={true} />
                        ))
                    }
                </PostsWrapper>

                {isError && <p>Ошибка загрузки избранных постов</p>}
            </SavedWrapper>
    );
};

export default Saved;