import Textarea from "@/common/ui/Textarea";
import {
    ActionsWrapper,
    PickerWrapper,
    PreviewCreator,
    TextAreaWrapper,
    UserAvatar
} from "@/common/components/newpost/style";
import IconButton from "@/common/ui/IconButton";
import TypeUpload from "@/common/components/newpost/components/TypeUpload";
import defaultImg from "/images/default.jpg";
import React, { useState } from "react";
const Picker = React.lazy(() => import("@emoji-mart/react"));
const data = React.lazy(() => import("@emoji-mart/react"));

interface PreviewSectionProps {
    text: string;
    onTextChange: (_: string) => void;
    isActive: boolean;
    onAddMedia: (_: File) => void;
}

const PreviewSection = ({ text, onTextChange, isActive, onAddMedia }: PreviewSectionProps) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleAddEmoji = (emoji: { native: string }) => {
        onTextChange(text + emoji.native)
    };

    return (
        <PreviewCreator>
            <UserAvatar src={defaultImg} />

            <TextAreaWrapper>
                <Textarea
                    value={text}
                    onChange={onTextChange}
                    placeholder="Что у вас нового?"
                    rows={1}
                />
            </TextAreaWrapper>

            <ActionsWrapper>
                {isActive
                    ? <div
                        onMouseEnter={() => setShowPicker(true)}
                        onMouseLeave={() => setShowPicker(false)}
                    >
                        <IconButton icon="emoji" size={25} />

                        <PickerWrapper>
                            {showPicker && <Picker dats={data} onEmojiSelect={handleAddEmoji} theme='light' />}
                        </PickerWrapper>
                    </div>
                    : <TypeUpload onAddMedia={onAddMedia} />
                }
            </ActionsWrapper>
        </PreviewCreator>
    )
};

export default PreviewSection;