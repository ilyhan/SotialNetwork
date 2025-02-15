import SearchItem from "@/common/components/search/SearchItem";
import useGetFollowers from "@/common/hooks/useGetFollowers";

interface IFollowingModalProps {
    id: number;
};

const FollowingModal = ({ id }: IFollowingModalProps) => {
    const { data, isLoading } = useGetFollowers(id);

    return (
        isLoading
            ? <p>Loading...</p>
            : data?.map((item) => (
                <SearchItem key={item.id} {...item} />
            ))

    )
};

export default FollowingModal;