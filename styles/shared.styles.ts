import { createGlobalStyle, css } from "styled-components";

export const BodyStyles = css`
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .has-cursor {
    cursor: pointer;
  }
  .name-icon {
    background-color: #ff9458;
    padding: 10px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 5px;
    width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }
  .provider-name {
    background: transparent !important;
    text-decoration-line: underline;
    letter-spacing: 0.02em;
  }
  .ant-picker-time-panel-column {
    &::-webkit-scrollbar {
      width: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #5a8dee;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;

export default createGlobalStyle`
    ${BodyStyles} 
`;
