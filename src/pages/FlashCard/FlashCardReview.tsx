import { FC, useState } from 'react';
import { CarouselFlashCard } from 'containers/index';
import { FlashCardReviewHeader } from 'components/index';
interface IFlashCardReviewProps {}

export const FlashCardReview: FC<IFlashCardReviewProps> = (props) => {
  const [learn, setLearn] = useState({
    current: 1,
    total: 10,
  });

  const handleChange = (current: number) => {
    setLearn({
      ...learn,
      current,
    });
  };
  return (
    <>
      <FlashCardReviewHeader learn={learn} />
      <div className="w-full md:w-7/12 m-auto h-2/3 mt-16 md:mt-10 px-4">
        <CarouselFlashCard handleChange={handleChange} />
      </div>
    </>
  );
};
