import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getPosts } from "@/common/services/Post";
import { IPost } from "@/common/interfaces/posts";

const useGetPosts = (): UseQueryResult<IPost[]> => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        retry: 0,
    });
}

export default useGetPosts;