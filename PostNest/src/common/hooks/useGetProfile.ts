import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { userProfile } from "@/common/services/User";
import { IUser } from "@/common/interfaces/user";

const useGetProfile = (username: string): UseQueryResult<IUser> => {
    return useQuery({
        queryKey: ['profile', `${username}`],
        queryFn: () => userProfile(username),
    });
}

export default useGetProfile;