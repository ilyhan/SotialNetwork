import { defaultWrapper } from "@/common/styles/mixins";
import { borders, colors } from "@/common/styles/styleConstants";
import { Button } from "@/common/ui/Buttons";
import styled from "styled-components";

export const NewPostWrapper = styled('div')`
    ${defaultWrapper}
    padding: 15px 25px;
    overflow: hidden;
`;

export const FormPost = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const UserAvatar = styled('img')`
    border-radius: ${borders.circle};
    height: 50px;
    width: 50px;
`;

export const PreviewCreator = styled('div')`
    display: grid;
    grid-template-columns: 50px auto 70px;
    align-items: center;
    gap: 20px;
`;

export const TextAreaWrapper = styled('div')`   
    padding-top: 10px;
    width: 100%;
`;

export const FooterCreatorWrapper = styled('div')  <{ $isActive: boolean }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${props => props.$isActive && `
        &::before {
            content: "";
            position: absolute;
            width: 150%;
            left: -50px;
            top: -10px;
            height: 1px;
            background-color: ${colors.backgroundGray};
        }
    `} 
`;

export const CreateButton = styled(Button)`
    width: fit-content;
`;

export const UploadWrapper = styled('div')`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ActionsWrapper = styled('div')`
    width: fit-content;
    justify-self: end;
`;