import {
    NewPostWrapper,
    UserAvatar,
    PreviewCreator,
    TextAreaWrapper,
    FooterCreator,
    CreateButton,
    FormPost
} from "@/common/components/newpost/style";
import Textarea from "@/common/ui/Textarea";
import { useEffect, useState } from "react";
import defaultImg from "/images/default.jpg";
import DragAndDropUpload from "@/common/helper/DragAndDropUpload";
import IconButton from "@/common/ui/IconButton";

const NewPost = () => {
    const [isActive, setIsActive] = useState(false);
    const [text, setText] = useState('');

    const handleSetText = (val: string) => {
        setText(val);
    };

    useEffect(() => {
        if (text) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [text]);

    return (
        <NewPostWrapper>
            <FormPost>
                <PreviewCreator>
                    <UserAvatar src={defaultImg} />

                    <TextAreaWrapper>
                        <Textarea
                            value={text}
                            onChange={handleSetText}
                            placeholder="Что у вас нового?"
                            rows={1}
                        />
                    </TextAreaWrapper>

                    <DragAndDropUpload onFile={() => console}>
                        <IconButton icon="pin" onClick={() => console} size={25} />
                    </DragAndDropUpload>
                </PreviewCreator>

                {isActive &&
                    <FooterCreator>
                        <CreateButton>
                            Опубликовать
                        </CreateButton>
                    </FooterCreator>
                }
            </FormPost>
        </NewPostWrapper>
    );
};

export default NewPost;