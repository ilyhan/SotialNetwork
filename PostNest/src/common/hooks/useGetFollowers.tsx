import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getFollowers } from "@/common/services/User";
import { ISearchUser } from "@/common/interfaces/user";

const useGetFollowers = (user_id: number): UseQueryResult<ISearchUser[]> => {
    return useQuery({
        queryKey: ['followers', `${user_id}`],
        queryFn: () => getFollowers(user_id),
        retry: 0,
    });
}

export default useGetFollowers;