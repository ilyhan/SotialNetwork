import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { subscribe } from "@/common/services/User";

const useFollow = (): UseMutationResult<void, Error, number> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => subscribe(id),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
    });
}

export default useFollow;