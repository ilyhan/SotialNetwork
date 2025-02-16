import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { setLike } from "@/common/services/Post";
import { IPost } from "@/common/interfaces/posts";

const useLikePost = (): UseMutationResult<void, Error, number> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (post_id: number) => setLike(post_id),
        onError: (error) => {
            if (error.message === 'Unauthorized') {
                client.invalidateQueries({ queryKey: ['auth'] });
            }
        },
        onSuccess: (data) => {
            if (data.is_liked) {
                client.getQueryData<IPost>(['posts']);
                const likedPost = client.getQueryData<IPost[]>(['posts'])?.find(item => item.id == data.post_id);
                
                client.setQueryData<IPost[]>(['posts', 'favorite'], (old: IPost[] | undefined) => {
                    if(old == undefined) return old;
                    if (old) {
                        return [likedPost, ...old];
                    }
                    return Array(1).fill(likedPost);
                })
            }
            else {
                client.setQueryData<IPost[]>(['posts', 'favorite'], (old: IPost[] | undefined) => {
                    return old?.filter((item) => {
                        if (item.id !== data.post_id) {
                            return item
                        }
                    })
                })
            }
        }
    });
}

export default useLikePost;