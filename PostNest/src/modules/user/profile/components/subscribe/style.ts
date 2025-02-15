import { clampText, hoverActive, resetButton } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const SubscribeWrapper = styled('div')`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const SubscribeInfoBtn = styled('button')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    ${resetButton}
    ${hoverActive}
`;