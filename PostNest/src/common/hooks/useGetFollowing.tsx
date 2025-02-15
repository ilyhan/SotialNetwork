import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getFollowing } from "@/common/services/User";
import { ISearchUser } from "@/common/interfaces/user";

const useGetFollowing = (user_id: number): UseQueryResult<ISearchUser[]> => {
    return useQuery({
        queryKey: ['following', `${user_id}`],
        queryFn: () => getFollowing(user_id),
        retry: 0,
        staleTime: 1000 * 60 * 2,
    });
}

export default useGetFollowing;