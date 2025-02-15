import { clampText, hoverActiveBackground } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchItemWrapper = styled('li')`
    width: inherit;
    padding: 15px 100px 15px 30px;
    ${hoverActiveBackground()}
    border-bottom: 1px solid ${colors.backgroundGray};
    cursor: pointer;

    &:last-child {
        border: none;
    }
`;

export const SearchItemLink = styled(Link)`
    display: grid;
    grid-template-columns: 50px auto 30px;
    gap: 25px;
    align-items: center;
`;

export const UserImage = styled('img')`
    height: 50px;
    width: 50px;
    border-radius: ${borders.circle};
`;

export const UserNameWrapper = styled('div')`
    display: flex;
    flex-direction: column;
`;

export const UserName = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)};
    color: ${colors.gray};
`;

export const UserFullName = styled('span')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
`;