import { clampText, defaultWrapper, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";


export const UserLoaderWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative; 
    overflow: hidden; 

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            100deg,
            transparent,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 80%
        );
        background-repeat: no-repeat;
        background-size: 300px 530px;
        background-position: -200% 0;
        animation: animloader 1.5s linear infinite;
    }

    @keyframes animloader {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
`;

export const UserLoaderContentWrapper = styled('div')`
    ${defaultWrapper}
    overflow: hidden;
    padding-bottom: 20px;
`;

export const UserLoaderImgWrapper = styled('div')`
    position: relative;
    height: 230px;
    width: 100%;
    overflow: hidden;
    border-radius: ${borders.defaultRadius};
    background-color: lightgray;
`;

export const UserLoaderBackgroungImg = styled('img')`
    position: absolute;
    top: -40%;
    object-fit: cover;
    width: 100%;
`;

export const UserLoaderMainInfo = styled('div')`
    position: absolute;
    top: -50px;
    left: 50px;
    display: flex;
    align-items: end;
    gap: 30px;
`;

export const UserLoaderImageWrapper = styled('div')`
    width: 100px;
    height: 100px;
    border-radius: ${borders.circle};
    border: 5px solid ${colors.white};
    overflow: hidden;
    background-color: lightgray;
`;

export const UserLoaderImage = styled('img')`
    width: 100%;
    height: 100%;
`;

export const UserLoaderName = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    margin-bottom: 7px;
    height: 30px;
    width: 200px;
    border-radius: ${borders.smallRadius};
    background-color: lightgray;
`;

export const UserLoaderMainInfoWrapper = styled('div')`
    display: flex;
    justify-content: end;
    position: relative;
    height: 70px;
`;

export const UserLoaderDescription = styled('div')`
    padding-inline: 25px;
`;

export const UserLoaderDescriptionText = styled('p')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    word-wrap: break-word;
    height: 50px;
    width: 100%;
    border-radius: ${borders.smallRadius};
    background-color: lightgray;
`;

export const UserLoaderSubscribeWrapper = styled('div')`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-inline: 25px;
`;

export const UserLoaderSubscribeInfoBtn = styled('div')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    ${resetButton}
    ${hoverActive}
    height: 50px;
    width: 150px;
    border-radius: ${borders.smallRadius};
    background-color: lightgray;
`;