import { Button } from "antd";
import styled from "styled-components";

export const LinkButton = styled(Button)`
  margin-top: 40px;
  font-size: 16px;
  min-width: 130px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
  background: #a97e4b;
  border: none;
  &:hover {
    background-color: #936c42;
    color: #fff;
  }
`;
