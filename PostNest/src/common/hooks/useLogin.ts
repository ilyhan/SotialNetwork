import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "@/common/services/Auth";

interface LoginProps {
    name: string;
    password: string;
};

const useLogin = (): UseMutationResult<void, Error, LoginProps> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: ({name, password}: LoginProps) => login(name, password),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['auth'] })
        }
    });
}

export default useLogin;