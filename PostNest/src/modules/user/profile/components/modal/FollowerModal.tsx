import useGetFollowers from "@/common/hooks/useGetFollowers";
import UserLink from "@/modules/user/profile/components/userLink/UserLink";
import { UserList, UserListWrapper } from "@/modules/user/profile/components/modal/style";
import Loader from "@/common/ui/loaders/defaultLoader/DefaultLoader";

interface IFollowerModalProps {
    id: number;
};

const FollowerModal = ({ id }: IFollowerModalProps) => {
    const { data, isLoading } = useGetFollowers(id);

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

export default FollowerModal;