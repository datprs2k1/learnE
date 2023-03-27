import { Badge, Button, Image } from 'antd';

import { FC } from 'react';

export const LearnCard: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mx-auto rounded-md md:rounded-xl">
        <div className={`h-full w-full relative flex justify-center items-center`}>
          <div className="h-full w-full flex justify-center items-center mx-8">
            <div className="absolute h-full w-full">
              <div className="w-full">
                <span className="top-4 left-8 absolute md:text-xl text-bold">Định nghĩa</span>
                <div className="mt-12 md:mt-16 grid grid-cols-2 gap-8 mx-8 ">
                  <span className="flex justify-start break-words text-xl">/spekˈteɪ.t̬ɚ/ người xem thể thao</span>
                  <div className="flex justify-end">
                    <Image
                      src="https://farm1.staticflickr.com/6/10835124_3e93a151e0.jpg"
                      className="object-fill w-full md:w-3/4 rounded-3xl"
                      height={104}
                      width={104}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-16 mx-8">
                <span className="flex justify-start">Chọn thuật ngữ đúng</span>
                <div className="mt-4 flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:mx-4 w-full">
                    <Button
                      type="primary"
                      ghost
                      size="large"
                      className="rounded-md p-4 text-left"
                      style={{ color: 'black' }}
                    >
                      <Badge count={1} className="mr-4" color={'blue'} />
                      /spekˈteɪ.t̬ɚ/
                    </Button>
                    <Button
                      type="primary"
                      ghost
                      size="large"
                      className="rounded-md p-4 text-left"
                      style={{ color: 'black' }}
                    >
                      <Badge count={1} className="mr-4" color={'blue'} />
                      /spekˈteɪ.t̬ɚ/
                    </Button>
                    <Button
                      type="primary"
                      ghost
                      size="large"
                      className="rounded-md p-4 text-left"
                      style={{ color: 'black' }}
                    >
                      <Badge count={1} className="mr-4" color={'blue'} />
                      /spekˈteɪ.t̬ɚ/
                    </Button>
                    <Button
                      type="primary"
                      ghost
                      size="large"
                      className="rounded-md p-4 text-left"
                      style={{ color: 'black' }}
                    >
                      <Badge count={1} className="mr-4" color={'blue'} />
                      /spekˈteɪ.t̬ɚ/
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
