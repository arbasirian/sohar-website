import React from "react";
import { Menu } from "antd";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

const MainMenu = () => {
  const router = useRouter();
  const handleChangeRoute = (event: any) => router.push(event.key);

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        onClick={handleChangeRoute}
      >
        <Menu.Item key="/">Home</Menu.Item>
        <SubMenu key="about" title="About">
          <Menu.Item key="/about/philosophy">Philosophy</Menu.Item>
          <Menu.Item key="/foundation/guidance-commodity-trading-sector/">
            Guidance for The Commodity Trading Sector
          </Menu.Item>
          <Menu.Item key="/about/experience">Our Experience</Menu.Item>
        </SubMenu>
        <SubMenu key="activities" title="Activities">
          <Menu.Item key="/activities/operations">Our Operations</Menu.Item>
          <Menu.Item key="/activities/bunkering">Bunkering</Menu.Item>
          <Menu.Item key="/activities/trading">Trading</Menu.Item>
          <Menu.Item key="/activities/green-energy/">Green Energy</Menu.Item>
        </SubMenu>
        <SubMenu key="foundation" title="Foundation">
          <Menu.Item key="/foundation/mission">Mission</Menu.Item>
          <Menu.Item key="/projects">Projects</Menu.Item>
          <Menu.Item key="/submit ">Submit a Project</Menu.Item>
        </SubMenu>
        <Menu.Item key="/contact">Contact</Menu.Item>
      </Menu>
    </>
  );
};

export default MainMenu;
