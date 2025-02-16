import styled from "styled-components";

export const UserListWrapper = styled('div')`
    padding-block: 35px 15px;
    width: 360px;
    height: fit-content;
`;

export const LoaderWrapper = styled('div')`
    height: 70px;
    display: flex; 
    justify-content: center;
`;

export const UserList = styled('ul')`
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    max-height: 50vh;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;