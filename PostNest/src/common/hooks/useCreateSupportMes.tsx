
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { newSupportMessage } from "@/common/services/support";

const useCreateSupportMes = (): UseMutationResult<void, Error, string> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (message: string) => newSupportMessage(message),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.refetchQueries({ queryKey: ['auth'] });
            }
        }
    });
}

export default useCreateSupportMes;