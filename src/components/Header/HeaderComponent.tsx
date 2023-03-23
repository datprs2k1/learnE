import { Layout, Menu, Button, Drawer, theme } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const { Header } = Layout;

import logo from 'assets/images/logo.png';
import { useState } from 'react';

function HeaderComponent(props: any) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [open, setOpen] = useState(false);

  const menuItem = [
    {
      key: '0',
      label: 'Trang chủ',
    },
    {
      key: '1',
      label: 'Khoá học online',
    },
    {
      key: '2',
      label: 'Đề thi online',
    },
    {
      key: '3',
      label: 'Flashcard',
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header
        style={{ background: colorBgContainer, padding: 0, position: 'sticky', top: 0, zIndex: 1 }}
        className="shadow-md flex justify-between"
      >
        <div className="px-4">
          <img src={logo} alt="logo" className="w-32 h-8 object-fill align-middle" />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          items={menuItem}
          className="hidden md:inline justify-center text-gray-700 text-base font-medium space-x-5 border-b-0"
        />
        <div className="px-4 inline md:hidden">
          <MenuOutlined className="text-xl" onClick={() => showDrawer()} />
          <Drawer placement="right" onClose={onClose} open={open} className="visible md:invisible">
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={['0']}
              items={menuItem}
              className="text-gray-500 font-semibold space-y-5 border-none"
            />
            <div className=" flex flex-col space-y-5 mt-10">
              <Button type="primary" className="rounded-full align-middle font-medium">
                Đăng nhập
              </Button>
              <Button type="primary" danger className="rounded-full align-middle font-medium">
                Đăng ký
              </Button>
            </div>
          </Drawer>
        </div>
        <div className="px-4 hidden md:inline">
          <div className=" flex justify-center items-center align-middle space-x-5 h-full invisible md:visible">
            <Button type="primary" size="large" className="rounded-full align-middle font-medium">
              Đăng nhập
            </Button>
            <Button type="primary" size="large" danger className="rounded-full align-middle font-medium">
              Đăng ký
            </Button>
          </div>
        </div>
      </Header>
    </>
  );
}

export { HeaderComponent };
