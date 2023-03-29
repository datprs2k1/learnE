import { FlashCardItem } from 'components/index';
import { PlusOutlined } from '@ant-design/icons';
import { Card, Col, Row, Pagination } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
interface IFlashCardListProps {
  type?: 'my' | 'learn' | 'discover';
}

export const FlashCardList: FC<IFlashCardListProps> = (props) => {
  const { type = 'my' } = props;

  const renderTitle = () => {
    switch (type) {
      case 'my':
        return 'List từ của tôi';
      case 'learn':
        return 'Đang học';
      case 'discover':
        return 'Khám phá';
      default:
        return 'List từ của tôi';
    }
  };

  const onChange = () => {
    var flashcard = document.getElementById('flashcard');
    flashcard?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <h1>{renderTitle()}</h1>
      <Row gutter={[24, 24]} className="mt-5">
        {type === 'my' && (
          <Col span={12} md={{ span: 6 }}>
            <Link to="create">
              <Card bordered={false} hoverable className="bg-gray-100 h-64 md:h-56 flex justify-center items-center">
                <PlusOutlined className="flex justify-center mb-5 text-2xl" />
                <span className="text-2xl">Tạo từ mới</span>
              </Card>
            </Link>
          </Col>
        )}
        {new Array(11).fill(null).map((_, index) => (
          <FlashCardItem key={index} />
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
