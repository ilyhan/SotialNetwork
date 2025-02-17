import { clampText, defaultWrapper } from "@/common/styles/mixins";
import { borders, colors, fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ProfileWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;

    &:last-child {
        margin-bottom: 30px;
    }

    @media (max-width: ${screen.mobile}){
        &:last-child {
            margin-bottom: 60px;
        }
    }
`;

export const ProfileContentWrapper = styled('div')`
    ${defaultWrapper}
    overflow: hidden;
    padding-bottom: 20px;
`;

export const BackgroungImgWrapper = styled('div')`
    position: relative;
    height: 230px;
    width: 100%;
    overflow: hidden;
    border-radius: ${borders.defaultRadius};
`;

export const BackgroungImg = styled('img')`
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const ProfileMainInfo = styled('div')`
    position: absolute;
    top: -50px;
    left: 50px;
    display: flex;
    align-items: end;
    gap: 30px;

    @media (max-width: ${screen.mobile}){
        left: 10px;
        gap: 15px;
    }
`;

export const ImageWrapper = styled('div')`
    width: 100px;
    height: 100px;
    border-radius: ${borders.circle};
    border: 5px solid ${colors.white};
    overflow: hidden;
`;

export const ProfileImage = styled('img')`
    width: 100%;
    height: 100%;
`;

export const ProfileName = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    padding-bottom: 10px;
    max-width: 250px;
`;

export const MainInfoWrapper = styled('div')`
    display: flex;
    justify-content: end;
    position: relative;
    height: 70px;
`;

export const ProfileDescription = styled('div')`
    margin-inline: 25px;
`;

export const DescriptionText = styled('p')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    word-wrap: break-word;
`;