import { ISearchUser } from "@/common/interfaces/user";
import { 
    SearchItemLink, 
    SearchItemWrapper, 
    UserImage, 
    UserNameWrapper,
    UserName,
    UserFullName,
} from "@/common/components/search/style";
import IconButton from "@/common/ui/IconButton";
import { useNavigate } from "react-router-dom";

const SearchItem = ({
    first_name,
    last_name,
    username,
    avatar,
}: ISearchUser) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/profile/${username}`);
    };

    return (
        <SearchItemWrapper>
            <SearchItemLink to={`/profile/${username}`} onMouseDown={handleClick}>
                <UserImage src={avatar} />

                <UserNameWrapper>
                    <UserFullName>{first_name + "  " + last_name}</UserFullName>
                    <UserName>{username}</UserName>
                </UserNameWrapper>

                <IconButton icon="subscribe" onClick={() => console} size={22} />
            </SearchItemLink>
        </SearchItemWrapper>
    );
};

export default SearchItem;