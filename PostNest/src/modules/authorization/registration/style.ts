import { clampText, hoverActive } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import { Button } from "@/common/ui/Buttons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegistrationWrapper = styled('div')`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 25vh;
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

export const CheckboxWrapper =  styled('div')`
    padding-top: 5px;
`;