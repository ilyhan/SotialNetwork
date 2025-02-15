import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getFavoritePosts } from "@/common/services/Post";
import { IPost } from "@/common/interfaces/posts";

const useGetFavoritePosts = (): UseQueryResult<IPost[]> => {
    return useQuery({
        queryKey: ['posts', 'favorite'],
        queryFn: getFavoritePosts,
        retry: 0,
        staleTime: 1000 * 60 * 2,
    });
}

export default useGetFavoritePosts;