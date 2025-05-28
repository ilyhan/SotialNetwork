import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePost } from "@/common/services/Post";

interface IAuth {
    id: number;
    user: string;
}

const useDeletePost = (): UseMutationResult<void, Error, number> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (post_id: number) => deletePost(post_id),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
        onSuccess: () => {
            client.setQueryData<IAuth>(['auth'], (old: IAuth | undefined) => {
                if (old) {
                    client.invalidateQueries({ queryKey: ['profile', `${old.user}`] });
                }
                return old;
            })
        }
    });
}

export default useDeletePost;