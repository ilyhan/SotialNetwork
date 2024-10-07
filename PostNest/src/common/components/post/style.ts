import { clampText, defaultWrapper } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const PostWrapper = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    ${defaultWrapper}
    padding: 15px 25px;
    width: 100%;
`;

export const SavedButton = styled('div')`
    position: absolute;
    top: 0;
    right: 40px;
`;

export const PostHeader = styled('div')`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const PostContent = styled('div')`
`;

export const PostFooter = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserAvatar = styled('img')`
    height: 50px;
    width: 50px;
    border-radius: ${borders.circle};
`;

export const UserName = styled('span')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
`;

export const MediaContent = styled('img')`
`;

export const TextContent = styled('p')`
    word-wrap: break-word;
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

export const TimeCreated = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    color: ${colors.gray}
`;