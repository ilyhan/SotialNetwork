import styled, { createGlobalStyle } from "styled-components";
import {
  colors,
  transitions,
} from "@/common/styles/styleConstants";
import { resetLink } from "@/common/styles/mixins";

export const Container = styled('main')`
  display: grid;
  grid-template-columns: 300px minmax(300px, 804px);
  column-gap: 30px;
  max-width: 1134px;
  margin: 0 auto;
  padding-inline: 12px;
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  :where(ul, ol):where([class]) {
    padding-left: 0;
  } 
  body,
  :where(blockquote, figure):where([class]) {
    margin: 0;
  } 
  :where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
    margin-block: 0;
  } 
  :where(dd[class]) {
    margin-left: 0;
  } 
  :where(fieldset[class]) {
    margin-left: 0;
    padding: 0;
    border: none;
  } 
  :where(ul[class]) {
    list-style: none;
  } 
  p {
    margin-block: 0;
  } 
  p:where(:not([class]):not(:last-child)) {
    margin-bottom: var(--paragraphMarginBottom);
  } 
  img {
    display: block;
    max-width: 100%;
  } 
  input,
  textarea,
  select,
  button {
    font: inherit;
  } 
  html {
    height: 100%;
    scroll-behavior: smooth;
    scrollbar-gutter: stable;
  }

  body {
    height: 100%;
    line-height: 1.5;
  } 
  body::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  body::-webkit-scrollbar-track {
    background: white;
    border-radius: 4px;
  }
  body::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 4px;
  }
  svg *[fill] {
    fill: currentColor;
  }
  svg *[stroke] {
    stroke: currentColor;
  } 
  svg * {
    transition-property: fill, stroke;
  } 

  body {
    font-family: "Montserrat", sans-serif;
    background-color: ${colors.backgroundGray};
    color: ${colors.black};
  } 

  a:hover,
  button:hover {
    cursor: pointer;
  } 

  a,
  button,
  input,
  textarea,
  svg * {
    user-select: none;
    transition: ${transitions.fastTransition};
  }
  a {
    ${resetLink};
    color: ${colors.black};
  }
`;
