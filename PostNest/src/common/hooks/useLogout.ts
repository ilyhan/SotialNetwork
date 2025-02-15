import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { logout } from "@/common/services/User";

const useLogout = (): UseMutationResult<void, Error, void> => {
    return useMutation({
        mutationFn: () => logout(),
    });
}

export default useLogout;