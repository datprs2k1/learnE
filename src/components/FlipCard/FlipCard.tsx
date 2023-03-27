import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { SoundOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { FC } from 'react';

interface IFlipCardProps {
  front: string;
  back: string;
}

export const FlipCard: FC<IFlipCardProps> = (props) => {
  const [open, setOpen] = useState(false);
  const { speak } = useSpeechSynthesis();

  const getTextToSpeech = (text: string) => {
    const textToSpeech = text.replace(/\(.*\)/gm, '');
    return textToSpeech;
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-[250px] md:h-[400px] mx-auto rounded-md md:rounded-xl">
      <div
        className={`h-full w-full relative transition-all duration-500 [transform-style:preserve-3d] flex justify-center items-center cursor-pointer ${
          open ? '[transform:rotateX(180deg)]' : ''
        }`}
        onClick={(e) => setOpen(!open)}
      >
        <div className="absolute [backface-visibility:hidden] h-full w-full flex justify-center items-center">
          <div>
            <div className="top-4 left-4 absolute md:text-xl">
              <span className="text-bold">Thuật ngữ</span>
              <span
                className="ml-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  speak({ text: getTextToSpeech('Spectator (v,n)') });
                }}
              >
                <SoundOutlined />
              </span>
            </div>
            <span className="text-xl md:text-2xl lg:text-4xl">Spectator (n)</span>
          </div>
        </div>
        <div className="absolute [transform:rotateX(180deg)] [backface-visibility:hidden] h-full w-full flex justify-center items-center">
          <div className="grid grid-cols-2 gap-8 mx-10">
            <span className="top-4 left-4 absolute md:text-xl text-bold">Định nghĩa</span>
            <span className="flex justify-center items-center break-words text-xl md:text-2xl lg:text-4xl">
              /spekˈteɪ.t̬ɚ/ người xem thể thao
            </span>
            <div className="flex justify-center items-center">
              <Image
                src="https://farm1.staticflickr.com/6/10835124_3e93a151e0.jpg"
                className="object-fill w-full md:w-full h-full md:h-4/6 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
