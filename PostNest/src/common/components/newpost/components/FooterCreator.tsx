import {
    CreateButton,
    FooterCreatorWrapper
} from "@/common/components/newpost/style";
import TypeUpload from "@/common/components/newpost/components/TypeUpload";
import Loader from "@/common/ui/loaders/defaultLoader/DefaultLoader";

interface FooterCreatorProps {
    isActive: boolean;
    onAddMedia: (_: File) => void;
    isPending: boolean;
}

const FooterCreator = ({ isActive, onAddMedia, isPending }: FooterCreatorProps) => {
    return (
        (isActive) && <FooterCreatorWrapper $isActive={isActive}>
            <TypeUpload onAddMedia={onAddMedia} />

            <CreateButton type="submit" disabled={isPending}>
                Опубликовать
            </CreateButton>

            {isPending && <Loader style={{position:'fixed', top: '100px', left: '50%'}}/>}
        </FooterCreatorWrapper>
    );
};

export default FooterCreator;