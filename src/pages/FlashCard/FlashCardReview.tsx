import { FC } from 'react';
import { CarouselFlashCard } from 'containers/index';
import { FlashCardReviewHeader } from 'components/index';
interface IFlashCardReviewProps {}

export const FlashCardReview: FC<IFlashCardReviewProps> = (props) => {
  return (
    <>
      <FlashCardReviewHeader />
      <div className="w-full md:w-10/12 m-auto h-2/3">
        <div className="grid grid-cols-2 gap-8 mb-10 text-xl">
          <div className="text-start">
            <span className=" text-orange-600 font-medium mr-2 px-5 py-0.5 rounded-full border-solid border-orange-600">
              11
            </span>
            <span className="font-medium text-2xl">Đang học</span>
          </div>
          <div className="text-right font-semibold">
            <span className=" text-green-600 font-medium mr-2 px-5 py-0.5 rounded-full border-solid border-green-600">
              11
            </span>
            <span className="font-medium text-2xl">Đã biết</span>
          </div>
        </div>
        <CarouselFlashCard />
      </div>
    </>
  );
};
