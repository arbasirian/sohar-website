import React from "react";
import { Menu } from "antd";
import { useRouter } from "next/router";

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
        <Menu.Item key="/about">About</Menu.Item>
        <Menu.Item key="/activities">Our Activities</Menu.Item>
        <Menu.Item key="/contact">Contact</Menu.Item>
      </Menu>
    </>
  );
};

export default MainMenu;
