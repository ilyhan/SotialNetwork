import {
    PostWrapper,
    PostHeader,
    PostContent,
    PostFooter,
    UserAvatar,
    UserName,
    TextContent,
    TimeCreated,
    SavedButton
} from "@/common/components/post/style";
import IconButton from "@/common/ui/IconButton";
import React from "react";
import Slider from "@/common/components/slider/Slider";

interface PostProps {
    name: string;
    avatar: string;
    content: string;
}

const Post = ({ name, avatar, content }: PostProps) => {
    return (
        <PostWrapper>
            <SavedButton>
                <IconButton icon="savedpost" onClick={() => console} />
            </SavedButton>

            <PostHeader>
                <UserAvatar src={avatar} />
                <UserName>{name}</UserName>
            </PostHeader>

            <PostContent>
                <TextContent>{content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
                </TextContent>

                <Slider content={["https://loremflickr.com/620/480/city"]} />
            </PostContent>

            <PostFooter>
                <IconButton icon="favorite" onClick={() => console} size={25} />
                <TimeCreated>15 минут назад</TimeCreated>
            </PostFooter>
        </PostWrapper>
    );
};

export default Post;