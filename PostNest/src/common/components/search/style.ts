import { clampText, defaultWrapper, hoverActiveBackground } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SiteSearchWrapper = styled('div')`
    position: relative;
`;

export const SearchResult = styled('div') <{ $show: boolean }>`
    position: absolute;
    top: 55px;
    left: -20%;
    width: 140%;
    ${defaultWrapper}
    overflow: hidden;
    max-height: 500px;
    overflow-y: auto;
    
    transition: all 0.3s ease;
    opacity: ${props => props.$show ? '0' : '1'};
    transform: ${props => props.$show ? 'translateY(-30px)' : 'translateY(0)'};
`;

export const SearchList = styled('ul')`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SearchItemWrapper = styled('li')`
    width: inherit;
    padding: 15px;
    ${hoverActiveBackground()}
    border-bottom: 1px solid ${colors.backgroundGray};

    &:last-child {
        border: none;
    }
`;

export const SearchItemLink = styled(Link)`
    display: grid;
    grid-template-columns: 50px auto 30px;
    gap: 20px;
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