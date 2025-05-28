import {
    NewPostWrapper,
    FormPost,
} from "@/common/components/newpost/style";
import { FormEvent, useEffect, useState } from "react";
import Slider from "@/common/components/slider/Slider";
import FooterCreator from "@/common/components/newpost/components/FooterCreator";
import PreviewSection from "@/common/components/newpost/components/PreviewSection";
import useCreatePost from "@/common/hooks/useCreatePost";

const NewPost = () => {
    const [text, setText] = useState<string>('');
    const [media, setMedia] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);

    const { mutate: create, isSuccess, isPending } = useCreatePost();

    useEffect(() => {
        if (isSuccess) {
            setText('');
            setMedia([]);
            setFiles([]);
        }
    }, [isSuccess]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newFormData = new FormData();

        files.forEach(file => {
            if (file.size < 5 * 1024 * 1024) {
                newFormData.append('images', file);
            }
        });

        newFormData.append('content', text);

        create(newFormData);
    };

    const handleAddMedia = (file: File) => {
        setMedia(prev => prev.length < 5 ? [...prev, URL.createObjectURL(file)] : prev);
        setFiles(prev => prev.length < 5 ? [...prev, file] : prev);
    };

    const handleSetText = (val: string) => {
        setText(val);
    };

    const handleDelete = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        setMedia((prevMedia) => prevMedia.filter((_, i) => i !== index));
    };

    return (
        <NewPostWrapper>
            <FormPost onSubmit={handleSubmit}>
                <PreviewSection
                    text={text}
                    onTextChange={handleSetText}
                    isActive={!!text.length || !!media.length}
                    onAddMedia={handleAddMedia}
                />

                {!!media.length && <Slider content={media} onEdit={handleDelete} />}

                <FooterCreator
                    isActive={!!text.length || !!media.length}
                    onAddMedia={handleAddMedia}
                    isPending={isPending}
                />
            </FormPost>
        </NewPostWrapper>
    );
};

export default NewPost;