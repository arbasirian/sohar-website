import React from "react";
import { Layout, Breadcrumb } from "antd";
import { MainFooter, MainMenu } from "components";

const { Header, Content, Footer } = Layout;

type Props = {
  children: any;
};
const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Header style={{ width: "100%" }}>
        <MainMenu />
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
