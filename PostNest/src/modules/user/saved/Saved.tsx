import Post from "@/common/components/post/Post";
import useGetFavoritePosts from "@/common/hooks/useGetFavoritePosts";
import { SavedWrapper } from "@/modules/user/saved/style";

const Saved = () => {
    const { data, isLoading, isError } = useGetFavoritePosts();

    return (
        isLoading
            ? <p>Loading...</p>
            : <SavedWrapper>
                {
                    data?.map((item) => (
                        <Post key={item.id} {...item} liked={true} />
                    ))
                }

                {isError && <p>Ошибка загрузки избранных постов</p>}
            </SavedWrapper>
    );
};

export default Saved;