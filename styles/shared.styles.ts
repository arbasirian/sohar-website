import { createGlobalStyle, css } from "styled-components";

export const BodyStyles = css`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif !important;
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

export const AntdSharedStyles = css`
  .ant-layout {
    font-family: "Poppins", sans-serif !important;
  }
  .ant-layout-header {
    height: auto;
    padding: 0;
  }
  .ant-layout-content {
    background-color: #fff;
  }

  .ant-menu.ant-menu-dark {
    background-color: transparent;
  }

  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected,
  .ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: #999;
  }

  .ant-menu.ant-menu-dark,
  .ant-menu-dark .ant-menu-sub,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background-color: #2d2421;
  }

  .ant-layout-footer {
    padding: 0;
  }
  .ant-breadcrumb-link {
    text-transform: capitalize;
  }
  .ant-breadcrumb a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  .ant-input {
    margin-bottom: 20px;
    border: 1px solid #b3b3b3;
    padding: 16px 12px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 26px;
  }

  .ant-btn.submit-form {
    font-size: 16px;
    line-height: 21px;
    display: inline-block;
    box-sizing: border-box;
    min-width: 130px;
    padding: 16px 35px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border-radius: 50px;
    background: #a97e4b;
    height: auto;
    &:hover {
      background-color: #936c42;
      color: #fff;
    }
  }
`;
export default createGlobalStyle`
    ${BodyStyles} 
    ${AntdSharedStyles} 
`;
