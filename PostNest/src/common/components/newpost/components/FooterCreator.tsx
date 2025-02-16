import {
    CreateButton,
    FooterCreatorWrapper
} from "@/common/components/newpost/style";
import TypeUpload from "@/common/components/newpost/components/TypeUpload";

interface FooterCreatorProps {
    isActive: boolean;
    onAddMedia: (_: File) => void;
    isPending: boolean;
}

const FooterCreator = ({ isActive, onAddMedia, isPending }: FooterCreatorProps) => {
    return (
        (isActive) && <FooterCreatorWrapper $isActive={isActive}>
            <TypeUpload onAddMedia={onAddMedia} />

            <CreateButton type="submit" disabled={isPending} $isLoading={isPending}>
                Опубликовать
            </CreateButton>
        </FooterCreatorWrapper>
    );
};

export default FooterCreator;