import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "@/common/services/Auth";
import { IUserLoginResponse } from "@/common/interfaces/user";

interface LoginProps {
    name: string;
    password: string;
};

const useLogin = (): UseMutationResult<IUserLoginResponse, Error, LoginProps> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: ({ name, password }: LoginProps) => login(name, password),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token ?? '');
            client.invalidateQueries({ queryKey: ['auth'] });
        }
    });
}

export default useLogin;