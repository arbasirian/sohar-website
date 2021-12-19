import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import themeVariables from "theme/variables";
import { MainLayout } from "components";
React.useLayoutEffect = React.useEffect;

import "styles/globals.css";
import GlobalStyle from "styles/shared.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeVariables("light", "en")}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
