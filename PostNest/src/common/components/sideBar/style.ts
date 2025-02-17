import { clampText, defaultWrapper, hoverActiveBackground } from "@/common/styles/mixins";
import { borders, colors, fonts, screen } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AsideWpapper = styled('aside')`
    position: relative;
    width: 100%;

    @media (max-width: ${screen.tablet}){
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
`;

export const SideNavWrapper = styled('div')`
    position: sticky;
    top: 80px;

    @media (max-width: ${screen.tablet}){
        position: relative;
        top: 0;
    }
`;

export const NavList = styled('ul')`
    ${defaultWrapper}
    overflow: hidden;

    @media (max-width: ${screen.tablet}){
        display: flex;
        justify-content: space-between;
        border-radius: ${borders.extraSmallRadius};
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        padding-block: 3px;
    }
`;

export const NavListItem = styled('li')`
    border-bottom: 1px solid ${colors.backgroundGray};

    &:last-child{
        border: none;
    }
`;


export const NavItemPath = styled('span')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}

    @media (max-width: ${screen.mobile}){
        display: none;
    }
`;

export const NavItemLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-inline: 20px;
    height: 50px;
    color: ${colors.lightGray};
    ${hoverActiveBackground()}
    border-radius: ${borders.extraSmallRadius};

    &.active {
        color: ${colors.black};
    }

    @media (max-width: ${screen.tablet}){
        gap: 10px;
        padding-inline: 13px;
    }
`;