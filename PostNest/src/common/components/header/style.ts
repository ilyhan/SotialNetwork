import { Container } from "@/common/styles/GlobalStyle";
import { defaultWrapper } from "@/common/styles/mixins";
import styled from "styled-components";

export const HeaderWrapper = styled('header')`
    position: sticky;
    top: 0;
    width: 100%;
    ${defaultWrapper}
    border-radius: 0px;
    margin-bottom: 20px;
    z-index: 100;
`;

export const HeaderContent = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
`;