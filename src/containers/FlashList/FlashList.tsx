import { FC } from 'react';
import { FlashItem } from 'components/index';
import { Col, Row } from 'antd';
interface IFlashListProps {}

export const FlashList: FC<IFlashListProps> = (props) => {
  return (
    <>
      <Row gutter={[16, 16]} justify="center" align="middle">
        {new Array(11).fill(null).map((_, index) => (
          <Col span={24}>
            <FlashItem key={index} />
          </Col>
        ))}
      </Row>
    </>
  );
};
