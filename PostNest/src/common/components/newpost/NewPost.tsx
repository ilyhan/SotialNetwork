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
    const [files, setFiles] = useState<File[]>([]);

    const handleAddMedia = async (file: File) => {
        setMedia(prev => [...prev, URL.createObjectURL(file)]);
        setFiles(prev => [...prev, file]);
    };

    const handleSetText = (val: string) => {
        setText(val);
    };

    const handlePost = async () => {
        setText('');
        setMedia([]);
        setFiles([]);

        const formData = new FormData();

        files.forEach((file) => {
            formData.append('images', file);
        });

        formData.append('content', text);

        await fetch('http://localhost:3001/api/newpost', {
            method: "POST",
            credentials: 'include',
            body: formData
        });
    }

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
                    onCreate={handlePost}
                />
            </FormPost>
        </NewPostWrapper>
    );
};

export default NewPost;