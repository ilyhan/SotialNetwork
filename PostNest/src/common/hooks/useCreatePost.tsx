import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { newPost } from "@/common/services/Post";

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
            //TODO сделать добавление поста без повторного запроса 
            client.refetchQueries({queryKey: ['posts']});
        }
    });
}

export default useCreatePost;