import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBackground } from "@/common/services/User";
import { IUser } from "../interfaces/user";

const useUpdateBackground = (): UseMutationResult<void, Error, FormData> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (formdata: FormData) => updateBackground(formdata),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
        onSuccess: (data) => {
            client.setQueryData<IUser>(['profile', 'ilyhan17'], (old)=>{
                if(old)
                    old!.background_image = data.background_image;
                return old;
            })
        }
    });
}

export default useUpdateBackground;