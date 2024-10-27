import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { ISearchUser } from "@/common/interfaces/user";
import { serachUser } from "../services/User";

const useSearch = (value: string): UseQueryResult<ISearchUser[]> => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => serachUser(value),
        retry: 2,
        enabled: !!value.length,
    });
}

export default useSearch;