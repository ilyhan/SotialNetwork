import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";

interface IconButtonProps {
    icon: ImageComponentsTypes;
    onClick: () => void;
    size?: number;
}

const IconButton = ({ icon, onClick, size = 20 }: IconButtonProps) => {
    return (
        <SvgHelper iconName={icon} onClick={onClick} height={size} width={size}/>
    );
};

export default IconButton;
