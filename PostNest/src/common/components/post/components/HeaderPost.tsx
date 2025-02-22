import {
    LinkToPrifile,
    PostHeader,
    UserAvatar,
    UserName,
} from "@/common/components/post/style";
import defaultImg from "/images/default.jpg";
import useDeletePost from "@/common/hooks/useDeletePost";
import IconButton from "@/common/ui/IconButton";
import Loader from "@/common/ui/loaders/defaultLoader/DefaultLoader";

interface HeaderPostProps {
    username: string;
    first_name: string;
    last_name: string;
    avatar?: string;
    isMy?: boolean;
    post_id: number;
}

const HeaderPost = ({ username, first_name, last_name, avatar, isMy = false, post_id }: HeaderPostProps) => {
    const { mutate, isPending } = useDeletePost();

    return (
        <>
            {isPending && <Loader style={{position: 'fixed', top: '80px', left: '50%', translate: '-50%', zIndex: 100}}/>}

            <PostHeader>
                <LinkToPrifile to={`/profile/${username}`}>
                    <UserAvatar src={avatar ?? defaultImg} />
                    <UserName>{first_name + ' ' + last_name}</UserName>
                </LinkToPrifile>

                {isMy && <IconButton icon="trash" size={17} onClick={() => mutate(post_id)} style={{ color: 'red' }} />}
            </PostHeader>
        </>
    );
};

export default HeaderPost;