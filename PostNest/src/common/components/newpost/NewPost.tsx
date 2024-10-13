import {
    NewPostWrapper,
    FormPost,
} from "@/common/components/newpost/style";
import { useState } from "react";
import Slider from "@/common/components/slider/Slider";
import FooterCreator from "@/common/components/newpost/components/FooterCreator";
import PreviewSection from "@/common/components/newpost/components/PreviewSection";

const NewPost = () => {
    const [text, setText] = useState('');
    const [media, setMedia] = useState<string[]>([]);

    const handleAddMedia = (file: File) => {
        setMedia(prev => [...prev, URL.createObjectURL(file)])
    };

    const handleSetText = (val: string) => {
        setText(val);
    };

    return (
        <NewPostWrapper>
            <FormPost>
                <PreviewSection
                    text={text}
                    onTextChange={handleSetText}
                    isActive={!!text.length || !!media.length}
                    onAddMedia={handleAddMedia}
                />

                {!!media.length && <Slider content={media} />}

                <FooterCreator
                    isActive={!!text.length || !!media.length}
                    onAddMedia={handleAddMedia}
                />
            </FormPost>
        </NewPostWrapper>
    );
};

export default NewPost;