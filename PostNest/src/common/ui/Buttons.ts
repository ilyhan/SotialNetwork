import styled from "styled-components";
import { hoverActiveMove, resetButton } from "@/common/styles/mixins";
import { borders, colors } from "@/common/styles/styleConstants";

export const Button = styled('button')`
    ${resetButton}
    background-color: ${colors.black};
    color: ${colors.white};
    border-radius: ${borders.extraSmallRadius};
    padding: 9px 15px;
    text-align: center;
    width: 100%;

    &:not(:disabled){
        ${hoverActiveMove}
    }
`;