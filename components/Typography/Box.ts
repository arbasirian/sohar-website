import styled from "styled-components";
import { BoxProps } from "types/components";

export const Box = styled.div<BoxProps>`
  /* DIRECTION */
  direction: ${(props) => (props.theme.language === "fa" ? "rtl" : "ltr")};

  /* COLOR */
  color: ${(props) =>
    !!props.color && !!props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.theme.colors.primary};

  /* FONT_FAMILY */
  font-family: ${(props) => {
    if (props.fontFamily) return props.fontFamily;
    return "Poppins";
  }};

  /* WIDTH */
  width: ${(props) => (props?.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};

  /* OVERFLOW */
  overflow: ${(props) => (props.overflow ? props.overflow : "")};
  overflow-x: ${(props) => (props.overflowx ? props.overflowx : "")};
  overflow-y: ${(props) => (props.overflowy ? props.overflowy : "")};

  /* HEIGHT */
  height: ${(props) => (props.height ? props.height : "")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "")};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};

  /* MARGIN */
  margin: ${(props) => (props.margin ? props.margin : "")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
  margin-inline-start: ${(props) =>
    props.marginRight ? props.marginRight : ""};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
  margin-inline-end: ${(props) => (props.marginLeft ? props.marginLeft : "")};

  /* PADDING */
  padding: ${(props) => (props.padding ? props.padding : "")};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "")};
  padding-inline-end: ${(props) =>
    props.paddingRight ? props.paddingRight : ""};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : ""};
  padding-inline-start: ${(props) =>
    props.paddingLeft ? props.paddingLeft : ""};

  /* DISPLAY */
  display: ${(props) => (props.display ? props.display : "")};

  /* BACKGROUND */
  background: ${(props) =>
    props.background
      ? props.theme.colors[props.background] || props.background
      : ""};

  /* BORDERRADIUS */
  border-radius: ${(props) => props.borderRadius || ""};

  /* TEXT ALIGN */
  text-align: ${(props) => (props.align ? props.align : "")};

  /* BORDER */
  border: ${(props) => (props.border ? props.border : "")};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "")};
  border-top: ${(props) => (props.borderTop ? props.borderTop : "")};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : "")};
  border-right: ${(props) => (props.borderRight ? props.borderRight : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  border-color: ${(props) =>
    (props.borderColor && props.theme.colors[props.borderColor]) ||
    props.borderColor};

  /* POSITION */
  position: ${(props) => (props.position ? props.position : "")};
  right: ${(props) => (props.right ? props.right : "")};
  left: ${(props) => (props.left ? props.left : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  top: ${(props) => (props.top ? props.top : "")};

  /* VERTICAL ALIGN */
  vertical-align: ${(props) =>
    props.verticalAlign ? props.verticalAlign : ""};
`;
