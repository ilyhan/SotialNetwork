import { clampText, defaultWrapper, hoverActiveBackground } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AsideWpapper = styled('aside')`
    position: relative;
`;

export const SideNavWrapper = styled('div')`
    position: sticky;
    top: 80px;
`;

export const NavList = styled('ul')`
    ${defaultWrapper}
    overflow: hidden;
`;

export const NavListItem = styled('li')`
    border-bottom: 1px solid ${colors.backgroundGray};

    &:last-child{
        border: none;
    }
`;


export const NavItemPath = styled('span')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

export const NavItemLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-inline: 20px;
    height: 50px;
    color: ${colors.lightGray};
    ${hoverActiveBackground()}

    &.active {
        color: black;
    }
`;