import { defaultWrapper } from "@/common/styles/mixins";
import { borders, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const HeaderWrapper = styled('header')`
    position: sticky;
    top: 0;
    width: 100%;
    ${defaultWrapper}
    border-radius: ${borders.extraSmallRadius};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    margin-bottom: 20px;
    z-index: 100;
`;

export const HeaderContent = styled('header')`
    column-gap: 30px;
    max-width: 1034px;
    margin: 0 auto;
    padding-inline: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    @media (max-width: ${screen.tablet}){
        column-gap: 20px;
    }
`;

export const LogoWrapper = styled('div')`
    @media (max-width: ${screen.mobile}){
        display: none;
    }
`;