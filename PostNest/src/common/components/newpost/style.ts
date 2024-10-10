import { defaultWrapper } from "@/common/styles/mixins";
import { borders } from "@/common/styles/styleConstants";
import { Button } from "@/common/ui/Buttons";
import styled from "styled-components";

export const NewPostWrapper = styled('div')`
    ${defaultWrapper}
    padding: 15px 25px;
`;

export const FormPost = styled('form')`

`;

export const UserAvatar = styled('img')`
    border-radius: ${borders.circle};
    height: 50px;
    width: 50px;
`;

export const PreviewCreator = styled('div')`
    display: grid;
    grid-template-columns: 50px auto 30px;
    align-items: center;
    gap: 20px;
`;

export const TextAreaWrapper = styled('div')`
    width: 100%;
`;

export const FooterCreator = styled('div')`
    margin-top: 10px;
    text-align: right;
`;

export const CreateButton = styled(Button)`
    width: fit-content;
`;