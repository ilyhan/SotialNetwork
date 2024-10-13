import {
    CreateButton,
    FooterCreatorWrapper
} from "@/common/components/newpost/style";
import TypeUpload from "@/common/components/newpost/components/TypeUpload";

interface FooterCreatorProps {
    isActive: boolean;
    onAddMedia: (_: File) => void;
}

const FooterCreator = ({ isActive, onAddMedia }: FooterCreatorProps) => {
    return (
        (isActive) && <FooterCreatorWrapper $isActive={isActive}>
            <TypeUpload onAddMedia={onAddMedia} />

            <CreateButton type="submit">
                Опубликовать
            </CreateButton>
        </FooterCreatorWrapper>
    );
};

export default FooterCreator;