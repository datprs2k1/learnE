import { FC } from 'react';
import { CarouselFlashCard, FlashCardForm } from 'containers/index';
import { FlashItem } from 'components/index';

const Test: FC = () => {
  return (
    <>
      {/* <div className="w-full md:w-10/12 lg:8/12 mx-auto ">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl md:text-3xl">Flash Card</h1>
        </div>
        <CarouselFlashCard />
        <div className="mt-16 flex justify-center ">
          <FlashItem />
        </div>
      </div> */}
      <div className="w-full md:w-10/12 mx-auto">
        <div className="flex justify-center items-center">
          <FlashCardForm />
        </div>
      </div>
    </>
  );
};

export default Test;
