import {
    CreateButton,
    FooterCreatorWrapper
} from "@/common/components/newpost/style";
import TypeUpload from "@/common/components/newpost/components/TypeUpload";

interface FooterCreatorProps {
    isActive: boolean;
    onAddMedia: (_: File) => void;
    onCreate: () => void;
}

const FooterCreator = ({ isActive, onAddMedia, onCreate }: FooterCreatorProps) => {
    return (
        (isActive) && <FooterCreatorWrapper $isActive={isActive}>
            <TypeUpload onAddMedia={onAddMedia} />

            <CreateButton type="button" onClick={onCreate}>
                Опубликовать
            </CreateButton>
        </FooterCreatorWrapper>
    );
};

export default FooterCreator;