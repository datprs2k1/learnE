import { FlashList } from '@/containers';
import { Button } from 'antd';
import { FC } from 'react';
interface IFlashCardViewProps {}

export const FlashCardView: FC<IFlashCardViewProps> = (props) => {
  return (
    <>
      <h1 className="text-4xl mb-10" id="flashcard">
        Flashcards: Từ vựng tiếng Anh văn phòng
      </h1>
      <Button type="primary" size="large" className="w-full mb-10 py-10">
        Luyện tập flashcards
      </Button>
      <FlashList />
    </>
  );
};
