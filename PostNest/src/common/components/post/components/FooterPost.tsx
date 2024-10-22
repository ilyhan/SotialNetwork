import IconButton from "@/common/ui/IconButton";
import { PostFooter, TimeCreated, FavoriteInfo } from "@/common/components/post/style";
import { useState } from "react";
import { formatDate } from "@/common/helper/formatDate";

interface FooterPostProps {
    liked: boolean;
    likes_count: number;
    created_at: string;
}

const FooterPost = ({ liked, likes_count, created_at }: FooterPostProps) => {
    const [isLiked, setIsLiked] = useState(liked);
    const [likeCount, setLikeCount] = useState(likes_count);

    const handleLike = () => {
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
        setIsLiked(prev => !prev);
    }

    return (
        <PostFooter>
            <FavoriteInfo>
                <IconButton
                    icon="favorite"
                    onClick={handleLike}
                    size={25}
                    iconStyle={{ fill: isLiked ? 'black' : 'transparent' }}
                />
                {likeCount}
            </FavoriteInfo>
            <TimeCreated>{formatDate(created_at).fullDate}</TimeCreated>
        </PostFooter>
    );
};

export default FooterPost;