import { PostContent, TextContent } from "@/common/components/post/style";
import React from "react";
import Slider from "@/common/components/slider/Slider";

interface ContentPostProps {
    content?: string;
    media_content?: string[];
}

const ContentPost = ({ content, media_content }: ContentPostProps) => {
    return (
        <PostContent>
            <TextContent>{content?.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
            </TextContent>

            {media_content && <Slider content={media_content} />}
        </PostContent>
    );
};

export default ContentPost;