import { 
    PostWrapper,
    PostHeader,
    PostContent,
    PostFooter,
    UserAvatar,
    UserName,
    TextContent,
    MediaContent,
    TimeCreated,
    SavedButton
} from "@/common/components/post/style";
import defaultImg from "/images/default.jpg"
import IconButton from "@/common/ui/IconButton";

const Post = () => {
    return (
        <PostWrapper>
            <SavedButton>
                <IconButton icon="savedpost" onClick={()=>console} />
            </SavedButton>

            <PostHeader>
                <UserAvatar src={defaultImg}/>
                <UserName>User Name</UserName>
            </PostHeader>

            <PostContent>
                <TextContent>Здесь будет располагаться контент, который будет создан пользователем, отправлен на бэк, проверен ИИ и показан другим пользователям</TextContent>
                <MediaContent/>
            </PostContent>

            <PostFooter>
                <IconButton icon="favorite" onClick={()=>console} size={25}/>
                <TimeCreated>15 минут назад</TimeCreated>
            </PostFooter>
        </PostWrapper>
    );
};

export default Post;