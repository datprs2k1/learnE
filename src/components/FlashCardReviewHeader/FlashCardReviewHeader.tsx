import logo from 'assets/images/logo.png';
import { Button, Layout } from 'antd';
import { FC, useMemo } from 'react';
interface IFlashCardReviewHeaderProps {
  learn: {
    current: number;
    total: number;
  };
}

export const FlashCardReviewHeader: FC<IFlashCardReviewHeaderProps> = ({ learn }) => {
  return (
    <>
      <div className="shadow-md grid grid-cols-3 bg-white py-3.5 sticky top-0 z-0 px-4">
        <div className="flex justify-start items-center">
          <img src={logo} alt="logo" className="w-32 h-8 object-fill" />
        </div>
        <div className="grid grid-rows-1 md:grid-rows-2 gap-2 text-xl text-center align-middle h-full">
          <span className="">
            {learn.current}/{learn.total}
          </span>
          <span className="hidden md:block">BÀI 8.2 TỪ VỰNG ĐỘNG TỪ</span>
        </div>
        <div className="flex justify-end items-center">
          <Button type="primary" className="w-16" size="large">
            X
          </Button>
        </div>
      </div>
    </>
  );
};
