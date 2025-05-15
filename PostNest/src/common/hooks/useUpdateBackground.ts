import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBackground } from "@/common/services/User";

const useUpdateBackground = (): UseMutationResult<void, Error, FormData> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (formdata: FormData) => updateBackground(formdata),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
    });
}

export default useUpdateBackground;