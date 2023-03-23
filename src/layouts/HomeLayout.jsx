import { Layout, theme } from 'antd';
const { Content } = Layout;
import { Outlet } from 'react-router';
import { Header, Footer } from 'components';

function HomeLayout(props) {
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
          <div className="container w-11/12 md:w-9/12 mx-auto mt-16 mb-16">
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default HomeLayout;
