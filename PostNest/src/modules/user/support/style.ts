import { clampText, defaultWrapper } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { Button } from "@/common/ui/Buttons";
import styled from "styled-components";

export const SupportWrapper  = styled('div')`
    ${defaultWrapper}
    height: fit-content;
    padding: 15px 20px;
    overflow: hidden;
`;

export const HeaderSupport = styled('div')`
    position: relative;
    text-align: center;
    margin-bottom: 20px;

    &::after{
        content: "";
        position: absolute;
        height: 1px;
        width: 150%;
        left: -30px;
        bottom: -7px;
        background-color: ${colors.backgroundGray};
    }
`;

export const SupportTitle = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
`;

export const SupportFormWrapper = styled('form')`
    width: 100%;
`;

export const SentButton = styled(Button)`
    margin-top: 10px;
    width: fit-content;
`;