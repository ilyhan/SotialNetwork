import { hoverActiveBackground, resetButton } from "@/common/styles/mixins";
import { borders, colors, transitions } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const SliderWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 500px; 
    width: 100%;
    overflow: hidden;
`;

export const ContentWrapper = styled('div') <{ $image: string; $translate: number }>`
    position: relative;
    height: 100%; 
    width: inherit;
    overflow: hidden;
    background-image: url(${props => props.$image});
    background-size: cover;
    background-position: center;
    border-radius: ${borders.extraSmallRadius};
    z-index: 1;
    transition: ${transitions.mediumTransition};
    flex-shrink: 0;
    flex-grow: 0;
    translate: ${props => -100 * props.$translate}%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit; 
        filter:  blur(10px) brightness(.9) contrast(1.2);
        z-index: 0;
    } 

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit; 
        filter:  blur(10px) brightness(.9) contrast(1.2);
        z-index: 0;
    } 
`;

export const SliderContent = styled('img')`
    position: relative;
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
    transition: ${transitions.mediumTransition};
    z-index: 3;
`;

export const ButtonNext = styled('button')`
    ${resetButton}  
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 38px;
    bottom: 50%;
    right: 20px;
    translate: 0px 50%;
    background-color: ${colors.grayTransparent};
    border-radius: ${borders.circle};
    ${hoverActiveBackground(colors.gray)}
    rotate: 180deg;
    z-index: 5;
    animation: showsArrow .5s;

    @keyframes showsArrow {
        from{
            opacity: .3;
        }
        to{
            opacity: 1;
        }
    }
`;

export const ButtonPrev = styled(ButtonNext)`
    right: auto;
    left:  20px;
    rotate: 360deg;
`;