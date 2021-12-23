import React from "react";
import { Layout, Breadcrumb } from "antd";
import { Box, Container, MainFooter, MainMenu } from "components";
import Image from "next/image";

const { Header, Content, Footer } = Layout;

type Props = {
  children: any;
};
const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Header style={{ width: "100%", backgroundColor: "white" }}>
        <Container>
          <Image src="/logo.svg" alt="me" width="286" height="150" />
        </Container>
        <Box className="main-menu-wrapper">
          <Container>
            <MainMenu />
          </Container>
        </Box>
      </Header>
      <Content className="site-layout" style={{ minHeight: "100vh" }}>
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <MainFooter />
      </Footer>
    </Layout>
  );
};

export default MainLayout;
