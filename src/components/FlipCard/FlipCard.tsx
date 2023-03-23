import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { SoundOutlined } from '@ant-design/icons';
import { Image } from 'antd';

interface card {
  front: string;
  back: string;
}

function FlipCard(props: card) {
  const [open, setOpen] = useState(false);
  const { speak } = useSpeechSynthesis();

  return (
    <div className="flex flex-col justify-center items-center text-center h-64 md:h-[450px] bg-indigo-300 w-full md:w-8/12 mx-auto rounded-md md:rounded-xl">
      <div
        className={`h-full w-full relative transition-all duration-500 [transform-style:preserve-3d] flex justify-center items-center cursor-pointer ${
          open ? '[transform:rotateX(180deg)]' : ''
        }`}
        onClick={(e) => setOpen(!open)}
      >
        <div className="absolute [backface-visibility:hidden] h-full w-full flex justify-center items-center">
          <div>
            <div className="top-4 left-4 absolute text-xl">
              <span className="text-bold">Thuật ngữ</span>
              <span
                className="ml-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  speak({ text: 'Spectator' });
                }}
              >
                <SoundOutlined />
              </span>
            </div>
            <h1>Spectator (n)</h1>
          </div>
        </div>
        <div className="absolute [transform:rotateX(180deg)] [backface-visibility:hidden] h-full w-full flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 mx-5">
            <span className="top-4 left-4 absolute text-xl text-bold">Định nghĩa</span>
            <h1 className="flex justify-center items-center break-words">/spekˈteɪ.t̬ɚ/ người xem thể thao</h1>
            <div className="flex justify-center items-center">
              <Image
                src="https://farm1.staticflickr.com/6/10835124_3e93a151e0.jpg"
                className="object-fill w-full md:w-3/4 h-full md:h-4/6 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FlipCard };
