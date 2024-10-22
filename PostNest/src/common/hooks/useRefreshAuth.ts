import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { refresh } from "@/common/services/Auth";

const useRefreshAuth = (): UseQueryResult => {
    return useQuery({
        queryFn: refresh,
        queryKey: ['auth'],
        staleTime: 1000 * 60 * 60,
    });
}

export default useRefreshAuth;