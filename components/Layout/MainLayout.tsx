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
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64, minHeight: "100vh" }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <MainFooter />
      </Footer>
    </Layout>
  );
};

export default MainLayout;
