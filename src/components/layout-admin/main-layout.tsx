import React from "react";
import { Avatar, Layout, Menu, Row } from "antd";
import { observer } from "mobx-react-lite";
import { RouteProps, useHistory } from "react-router";
import { IMenuConfig, MENU } from "constants/layout";
import { PAGE_ROUTE } from "constants/route";
import userIcon from "assets/icons/ic_user.png";
import categoryIcon from "assets/icons/ic_category.png";
import productIcon from "assets/icons/ic_product.png";
import logoutIcon from "assets/icons/ic_logout.png";
const { Header, Content, Sider } = Layout;

interface IProps extends RouteProps {
  children: React.ReactNode;
}
const MainLayout = observer(({ children }: IProps) => {
  const history = useHistory();

  const MENU_MAP: { [key in MENU]?: IMenuConfig } = {
    [MENU.MANAGE_USER]: {
      text: MENU.MANAGE_USER,
      icon: categoryIcon,
      onClick: () => {
        history.push(PAGE_ROUTE.MANAGE_CATEGORY);
      },
    },
    [MENU.MANAGE_SALARY]: {
      text: MENU.MANAGE_SALARY,
      icon: productIcon,
      onClick: () => {
        history.push(PAGE_ROUTE.MANAGE_SALARY);
      },
    },
    [MENU.MANAGE_ROOM]: {
      text: MENU.MANAGE_ROOM,
      icon: productIcon,
      onClick: () => {
        history.push(PAGE_ROUTE.MANAGE_ROOM);
      },
    },
    [MENU.MANAGE_CHECKIN]: {
      text: MENU.MANAGE_CHECKIN,
      icon: productIcon,
      onClick: () => {
        history.push(PAGE_ROUTE.MANAGE_CHECKIN);
      },
    },
    [MENU.MANAGE_MODE]: {
      text: MENU.MANAGE_MODE,
      icon: productIcon,
      onClick: () => {
        history.push(PAGE_ROUTE.MANAGE_MODE);
      },
    },
    [MENU.MANAGE_SENSE]: {
      text: MENU.MANAGE_SENSE,
      icon: productIcon,
      onClick: () => {
        history.push(PAGE_ROUTE.MANAGE_SENSE);
      },
    },
    [MENU.LOGOUT]: {
      text: MENU.LOGOUT,
      icon: logoutIcon,
      onClick: () => {
        history.push(PAGE_ROUTE.HOME);
      },
    },
  };
  const renderMenu = (menuMap: { [key in MENU]?: IMenuConfig }) => {
    return Object.values(MENU).map((value) => {
      const menuItem = menuMap[value];
      if (!menuItem) {
        return;
      }

      const menuRender = (
        <Menu.Item
          className="menu-item"
          key={value}
          icon={<img srcSet={menuItem.icon} />}
          onClick={menuItem.onClick}
        >
          {menuItem.text}
        </Menu.Item>
      );

      return menuRender;
    });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider className="sider-main-layout" collapsible>
        <div className="logo" />

        <Menu theme="dark" mode="inline">
          {renderMenu(MENU_MAP)}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row className="avatar" justify="end">
            <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
});
export default MainLayout;
