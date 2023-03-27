import { FC, useEffect, useRef, useState } from 'react';
import { FlipCard } from 'components/index';
import { Button, Carousel, Progress } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

export const CarouselFlashCard: FC = () => {
  const carousel = useRef<CarouselRef>(null);

  const [percent, setPercent] = useState<number>(0);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onChange = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  useEffect(() => {
    setPercent((currentSlide + 1) * (100 / 4));
  }, [currentSlide]);

  return (
    <div className="relative h-[320px] md:h-[480px] bg-slate-200 rounded-md md:rounded-xl">
      <div className="absolute w-full top-4 text-xl md:text-2xl">
        <span className="flex justify-center items-center">{currentSlide + 1}/4</span>
      </div>
      <Carousel ref={carousel} dots={false} beforeChange={onChange}>
        <div>
          <FlipCard front="A" back="B" />
        </div>
        <div>
          <FlipCard front="A" back="B" />
        </div>
        <div>
          <FlipCard front="A" back="B" />
        </div>
        <div>
          <FlipCard front="A" back="B" />
        </div>
      </Carousel>
      <div className="grid grid-cols-2 gap-8 mx-8">
        <Button type="primary" size="large" ghost onClick={() => carousel.current?.prev()}>
          Previous
        </Button>
        <Button type="primary" size="large" ghost onClick={() => carousel.current?.next()}>
          Next
        </Button>
      </div>
      <Progress
        className="mt-16 px-8 absolute bottom-0 w-full"
        percent={percent}
        size="small"
        showInfo={false}
        type="line"
      />
    </div>
  );
};
