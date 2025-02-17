import { defaultWrapper } from "@/common/styles/mixins";
import { borders } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const PostLoaderWrapper = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    ${defaultWrapper}
    padding: 15px 25px;
    width: 100%;

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
            rgba(255, 255, 255, 0.01) 20%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 80%
        );
        background-repeat: no-repeat;
        background-size: 200px 430px;
        background-position: -300% 0;
        animation: animloader 1.5s linear infinite;
    }

    @keyframes animloader {
        0% {
            background-position: -300% 0;
        }
        100% {
            background-position: 300% 0;
        }
    }
`;

export const PostLoaderHeader = styled('div')`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const PostLoaderAvatar = styled('div')`
    height: 50px;
    width: 50px;
    border-radius: ${borders.circle};
    background-color: lightgray;
`;

export const PostLoaderName = styled('div')`
    height: 30px;
    width: 200px;
    border-radius: ${borders.smallRadius};
    background-color: lightgray;

`;

export const PostLoaderContent = styled('div')`
    height: 100px;
    width: 100%;
    border-radius: ${borders.smallRadius};
    background-color: lightgray;
`;

export const PostLoaderFooter = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PostLoaderLike = styled('div')`
    height: 30px;
    width: 100px;
    border-radius: ${borders.smallRadius};
    background-color: lightgray;

`;

export const PostLoaderTime = styled('div')`
    height: 30px;
    width: 100px;
    border-radius: ${borders.smallRadius};
    background-color: lightgray;


`;