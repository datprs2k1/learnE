import { FlashCardForm as Form } from '@/containers';
import { FC } from 'react';
interface IFlashCardFormProps {}

export const FlashCardForm: FC<IFlashCardFormProps> = (props) => {
  return (
    <>
      <h1 className="text-4xl text-center" id="flashcard">
        Flash Card
      </h1>

      <Form />
    </>
  );
};
