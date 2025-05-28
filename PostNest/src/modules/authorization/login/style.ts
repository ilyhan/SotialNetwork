import { clampText, hoverActive } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { Button } from "@/common/ui/Buttons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled('div')`
    min-height: fit-content;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
`;

export const LoginForm = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LoginTitle = styled('h2')`
    margin-bottom: 30px;
`;  

export const LoginButton = styled(Button)`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    padding-block: 10px;
`;

export const Registration = styled(Link)`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    margin: 0 auto;
    ${hoverActive}
`;

export const Line = styled('div')`
    height: 1px;
    background-color: ${colors.lightGray};
    margin-block: 35px;
`;

export const ErrorMes = styled('p')`
    margin-block: 15px -15px;
    color: red;
`;