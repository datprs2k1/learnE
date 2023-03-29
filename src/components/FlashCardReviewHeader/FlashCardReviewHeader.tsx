import logo from 'assets/images/logo.png';
import { Button, Drawer, Layout, Menu, theme } from 'antd';
import { FC, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
const { Header } = Layout;

interface IFlashCardReviewHeaderProps {}

export const FlashCardReviewHeader: FC<IFlashCardReviewHeaderProps> = (props) => {
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

  return (
    <>
      <div className="shadow-md flex justify-between items-center bg-white py-3.5 sticky top-0 z-0 px-4">
        <img src={logo} alt="logo" className="w-32 h-8 object-fill" />
        <div className="grid grid-rows-1 md:grid-rows-2 gap-2 text-xl text-center align-middle h-full">
          <span clasName="">9/10</span>
          <span className="hidden md:block">BÀI 8.2 TỪ VỰNG ĐỘNG TỪ</span>
        </div>
        <Button type="primary">X</Button>
      </div>
    </>
  );
};
