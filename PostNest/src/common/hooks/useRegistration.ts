import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { IUserResponse, IUserRegistration } from "@/common/interfaces/user";
import { registrationUser } from "@/common/services/User";

export const useRegistration = (): UseMutationResult<IUserResponse, Error, IUserRegistration> => {
    return useMutation({
        mutationFn: (data: IUserRegistration) => registrationUser(data),
    });
}