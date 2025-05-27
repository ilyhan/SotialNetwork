import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { newPost } from "@/common/services/Post";

interface IAuth {
    id: number;
    user: string;
}

const useCreatePost = (): UseMutationResult<void, Error, FormData> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (formdata: FormData) => newPost(formdata),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['posts'] });

            client.setQueryData<IAuth>(['auth'], (old: IAuth | undefined) => {
                if (old) {
                    client.resetQueries({ queryKey: ['profile', `${old.user}`] });
                }
                return old;
            })
        }
    });
}

export default useCreatePost;