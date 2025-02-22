import { InfiniteData, UseInfiniteQueryResult, useInfiniteQuery } from "@tanstack/react-query";
import { IGetPostsParams, IPost } from "@/common/interfaces/posts";
import { getInfinityPosts } from "@/common/services/Post";

export function useGetPostsInfinit(): UseInfiniteQueryResult<InfiniteData<IPost[]>> {
    return useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: async ({ pageParam = 1 }) => {
            const params: IGetPostsParams = { page: pageParam, limit: 10 }; 
            return await getInfinityPosts(params); 
        },
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < 10) {
                return undefined; 
            }
            return allPages.length + 1; 
        },
        initialPageParam: 1,
        retry: 0, 
        staleTime: 1000 * 60 * 2,
    });
};
