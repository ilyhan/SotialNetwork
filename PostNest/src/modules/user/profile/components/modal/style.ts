import styled from "styled-components";

export const UserListWrapper = styled('div')`
    padding-block: 35px 15px;
    min-width: 200px;
    min-height: 80px;
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