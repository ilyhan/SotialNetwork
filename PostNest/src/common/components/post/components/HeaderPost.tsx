import { 
    LinkToPrifile, 
    PostHeader, 
    UserAvatar, 
    UserName,
} from "@/common/components/post/style";
import defaultImg from "/images/default.jpg";

interface HeaderPostProps {
    username: string;
    first_name: string;
    last_name: string;
    avatar?: string;
}

const HeaderPost = ({username, first_name, last_name, avatar} :HeaderPostProps) => {
    return (
        <PostHeader>
            <LinkToPrifile to={`/profile/${username}`}>
                <UserAvatar src={avatar ?? defaultImg} />
                <UserName>{first_name + ' ' + last_name}</UserName>
            </LinkToPrifile>
        </PostHeader>
    );
};

export default HeaderPost;