import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { updateAvatar } from "@/common/services/User";

const useUpdateAvatar = (): UseMutationResult<void, Error, FormData> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (formdata: FormData) => updateAvatar(formdata),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
    });
}

export default useUpdateAvatar;