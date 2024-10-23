import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { setLike } from "@/common/services/Post";

const useLikePost = (): UseMutationResult<void, Error, number> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (post_id: number) => setLike(post_id),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
    });
}

export default useLikePost;