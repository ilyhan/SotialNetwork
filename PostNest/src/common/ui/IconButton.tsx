import { ImageComponentsTypes } from "@/common/svg-helper";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import styled from "styled-components";
import { hoverActiveBackground, resetButton } from "@/common/styles/mixins";
import { borders } from "@/common/styles/styleConstants";

interface IconButtonProps {
    icon: ImageComponentsTypes;
    onClick: () => void;
    size?: number;
    iconStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    type?: "button" | "reset" | "submit";
};

const StyleButton = styled('button') <{ $size: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${resetButton}
    border-radius: ${borders.circle};
    height: ${props => props.$size}px;
    width: ${props => props.$size}px;

    ${hoverActiveBackground()}
`;

const StyleIcon = styled(SvgHelper) <{ $size: number }>`
    height: ${props => props.$size}px;
    width: ${props => props.$size}px;
`;

const IconButton = ({ icon, onClick, size = 20, iconStyle, style, type = 'button' }: IconButtonProps) => {
    return (
        <StyleButton onClick={onClick} $size={size + 12} type={type} style={style}>
            <StyleIcon iconName={icon} $size={size} style={iconStyle} />
        </StyleButton>
    );
};

export default IconButton;
