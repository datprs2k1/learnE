import { FC } from 'react';
import { FlashCardList } from './FlashCardList';

export const FlashCard: FC = () => {
  return (
    <>
      <h1 className="text-4xl text-center" id="flashcard">
        Flash Card
      </h1>
      <FlashCardList />
    </>
  );
};
