import DragAndDropUpload from "@/common/helper/DragAndDropUpload";
import { UploadWrapper } from "@/common/components/newpost/style";
import IconButton from "@/common/ui/IconButton";

interface TypeUploadProps {
    onAddMedia: (_: File) => void;
}

const TypeUpload = ({ onAddMedia }: TypeUploadProps) => {
    return (
        <UploadWrapper>
            <DragAndDropUpload onFile={onAddMedia} accept=".jpg, .jpeg, .png" multiple={true} >
                <IconButton icon="camera" onClick={() => console} size={25} />
            </DragAndDropUpload>

            <DragAndDropUpload onFile={onAddMedia} accept=".jpg, .jpeg, .png" multiple={true}>
                <IconButton icon="video" onClick={() => console} size={25} />
            </DragAndDropUpload>
        </UploadWrapper>
    );
};

export default TypeUpload;