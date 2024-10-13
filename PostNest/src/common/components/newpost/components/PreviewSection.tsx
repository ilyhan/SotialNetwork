import Textarea from "@/common/ui/Textarea";
import { 
    ActionsWrapper, 
    PreviewCreator, 
    TextAreaWrapper, 
    UserAvatar 
} from "@/common/components/newpost/style";
import IconButton from "@/common/ui/IconButton";
import TypeUpload from "@/common/components/newpost/components/TypeUpload";
import defaultImg from "/images/default.jpg";

interface PreviewSectionProps {
    text: string;
    onTextChange: (_: string) => void;
    isActive: boolean;
    onAddMedia: (_: File) => void;
}

const PreviewSection = ({ text, onTextChange, isActive, onAddMedia }: PreviewSectionProps) => (
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
            {isActive ?
                <IconButton icon="emoji" onClick={() => console.log('Emoji')} size={25} />
                :
                <TypeUpload onAddMedia={onAddMedia} />
            }
        </ActionsWrapper>
    </PreviewCreator>
);

export default PreviewSection;