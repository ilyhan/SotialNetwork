import SearchItem from "@/common/components/search/SearchItem";
import useGetFollowers from "@/common/hooks/useGetFollowers";

interface IFollowerModalProps {
    id: number;
};

const FollowerModal = ({ id }: IFollowerModalProps) => {
    const { data, isLoading } = useGetFollowers(id);

    return (
        isLoading
            ? <p>Loading...</p>
            : data?.map((item) => (
                <SearchItem key={item.id} {...item} />
            ))

    )
};

export default FollowerModal;