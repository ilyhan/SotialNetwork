import { screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const SavedWrapper = styled('div')`
    
`;

export const PostsWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;

    &:last-child {
        margin-bottom: 30px;
    }

    @media (max-width: ${screen.mobile}){
        &:last-child {
            margin-bottom: 60px;
        }
    }
`;