import { Layout, theme } from 'antd';
const { Content } = Layout;
import { Outlet } from 'react-router';
import { Header, Footer } from 'components/index';
import { FC } from 'react';

export const HomeLayout: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="min-h-screen">
        <Header />
        <Content
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="container w-11/12 md:w-10/12 mx-auto mt-8 mb-16">
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};
