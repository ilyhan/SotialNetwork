import { ISearchUser } from "@/common/interfaces/user";
import { 
    SearchItemLink, 
    SearchItemWrapper, 
    UserImage, 
    UserNameWrapper,
    UserName,
    UserFullName,
} from "@/modules/user/profile/components/userLink/style";
import { useNavigate } from "react-router-dom";

const UserLink = ({
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

            </SearchItemLink>
        </SearchItemWrapper>
    );
};

export default UserLink;