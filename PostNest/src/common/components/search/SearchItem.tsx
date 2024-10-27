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

const SearchItem = ({
    first_name,
    last_name,
    username,
    avatar,
}: ISearchUser) => {
    return (
        <SearchItemWrapper>
            <SearchItemLink to={`/profile/${username}`}>
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