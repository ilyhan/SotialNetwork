import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { logout } from "@/common/services/User";

const useLogout = (): UseMutationResult<void, Error, void> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: () => logout(),
        onSuccess: ()=>{
            client.invalidateQueries({ queryKey: ['auth'] });
        }
    });
}

export default useLogout;