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
import React, { useState } from "react";
import Slider from "@/common/components/slider/Slider";
import { Link } from "react-router-dom";

interface PostProps {
    id?: number;
    name: string;
    avatar: string;
    content: string;
    media?: string[];
    liked?: boolean;
    likesCount?: number;
    username?: string;
}

const Post = ({ id = 0, name, avatar, content, media, liked = false, likesCount = 0, username = 'ilyhan17' }: PostProps) => {
    const [isLike, setIsLike] = useState(liked);
    console.log(avatar)
    const handleLike = async () => {
        setIsLike(prev => !prev)

        await fetch('http://localhost:3001/api/post/like', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                post_id: id,
            })
        });
    }

    return (
        <PostWrapper>
            <SavedButton>
                <IconButton icon="savedpost" onClick={() => console} />
            </SavedButton>

            <PostHeader>
                <UserAvatar src={avatar} />
                <UserName>
                    <Link to={`/profile/${username}`}>{name}</Link>
                </UserName>
            </PostHeader>

            <PostContent>
                <TextContent>{content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
                </TextContent>

                {!!media?.length &&
                    <Slider content={media} />
                }

            </PostContent>

            <PostFooter>
                <IconButton
                    icon="favorite"
                    onClick={handleLike}
                    size={25}
                    iconStyle={isLike ? { fill: 'red' } : { fill: 'none' }}
                />
                <span>{likesCount}</span>
                <TimeCreated>15 минут назад</TimeCreated>
            </PostFooter>
        </PostWrapper>
    );
};

export default Post;