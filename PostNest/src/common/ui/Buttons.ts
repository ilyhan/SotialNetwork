import styled from "styled-components";
import { hoverActiveMove, resetButton } from "@/common/styles/mixins";
import { borders, colors } from "@/common/styles/styleConstants";

export const Button = styled('button') <{ $isLoading?: boolean }>`
 ${resetButton}
    background-color: ${colors.black};
    color: ${colors.white};
    border-radius: ${borders.extraSmallRadius};
    padding: 9px 15px;
    text-align: center;
    width: 100%;
    position: relative; 
    overflow: hidden; 

    &:not(:disabled) {
        ${hoverActiveMove}
    }

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
        background-size: 75px 130px;
        background-position: -150% 0;
        ${props => props.$isLoading && 'animation: animloader 1.2s linear infinite'};
    }

    @keyframes animloader {
        0% {
            background-position: -150% 0;
        }
        100% {
            background-position: 150% 0;
        }
    }
`;