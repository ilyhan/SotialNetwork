import { clampText, hoverActive } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import { Button } from "@/common/ui/Buttons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegistrationWrapper = styled('div')`
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

export const RegistrationTitle = styled('h2')`
    margin-bottom: 30px;
`;

export const RegistrationForm = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const RegistrationBtn = styled(Button)`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    padding-block: 10px;
`;

export const PrivacyAccept = styled('div')`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
`;

export const PrivacyLink = styled(Link)`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    ${hoverActive}
    text-align: left;
`;

export const CheckboxWrapper = styled('div')`
    padding-top: 5px;
`;

export const RegLoader = styled('div')`
    min-height: 50px;
    width: 50px;
    margin: 10px 50% 0px;
    translate: -50%;
`;

export const ErrorMes = styled('p')`
    margin-block: 15px -15px;
    color: red;
`;