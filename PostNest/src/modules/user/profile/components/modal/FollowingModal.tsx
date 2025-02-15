import useGetFollowing from "@/common/hooks/useGetFollowing";
import Loader from "@/common/ui/loaders/defaultLoader/DefaultLoader";
import { UserList, UserListWrapper } from "@/modules/user/profile/components/modal/style";
import UserLink from "@/modules/user/profile/components/userLink/UserLink";

interface IFollowingModalProps {
    id: number;
};

const FollowingModal = ({ id }: IFollowingModalProps) => {
    const { data, isLoading } = useGetFollowing(id);

    return (
        <UserListWrapper>
            {isLoading
                ? <Loader />
                : <UserList>
                    {data?.map((item) => (
                        <UserLink key={item.id} {...item} />
                    ))}
                </UserList>
            }
        </UserListWrapper >
    )
};

export default FollowingModal;