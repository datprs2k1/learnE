import { FileWordOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Tag, Button, Pagination, TabsProps, Tabs } from 'antd';
import { FC, useRef } from 'react';

export const FlashCardList: FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `List từ của tôi`,
      children: <FlashCardList />,
    },
    {
      key: '2',
      label: `Đang học`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Khám phá`,
      children: `Content of Tab Pane 3`,
    },
  ];

  const onChange = () => {
    var flashcard = document.getElementById('flashcard');
    flashcard?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} centered size="large" tabBarGutter={150} />
      <h1 className="text-2xl mt-5 ">List từ đã tạo</h1>
      <Row gutter={[24, 24]} className="mt-5">
        <Col span={12} md={{ span: 6 }}>
          <Card bordered={false} hoverable className="bg-gray-100 h-64 md:h-56 flex justify-center items-center">
            <PlusOutlined className="flex justify-center mb-5 text-2xl" />
            <span className="text-2xl">Tạo từ mới</span>
          </Card>
        </Col>
        {new Array(11).fill(null).map((_, index) => (
          <Col span={12} md={{ span: 6 }} key={index}>
            <Card bordered={false} hoverable className="bg-gray-100 h-64 md:h-56">
              <p className="text-base font-bold">C17 IELTS listening test 1</p>
              <p>
                <FileWordOutlined /> 40 từ vựng
              </p>
              <Space size={[0, 8]} wrap>
                <Tag color="success">processing</Tag>
                <Tag color="processing">processing</Tag>
              </Space>
              <div className="flex justify-between items-center mt-8">
                <Button type="primary" className="w-full">
                  Truy cập
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[24, 24]} className="mt-10" justify="end">
        <Pagination
          defaultCurrent={1}
          total={100}
          pageSize={8}
          showSizeChanger={false}
          showQuickJumper
          onChange={onChange}
        />
      </Row>
    </>
  );
};
