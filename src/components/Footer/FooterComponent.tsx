import { Footer } from 'antd/es/layout/layout';
import { FC } from 'react';

export const FooterComponent: FC = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </>
  );
};
