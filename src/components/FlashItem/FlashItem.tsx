import { FC } from 'react';
import { Image } from 'antd';
import { useSpeechSynthesis } from 'react-speech-kit';
import { SoundOutlined } from '@ant-design/icons';

export const FlashItem: FC = () => {
  const { speak } = useSpeechSynthesis();

  const getTextToSpeech = (text: string) => {
    const textToSpeech = text.replace(/\(.*\)/gm, '');
    return textToSpeech;
  };

  return (
    <>
      <div className="relative w-full h-64 md:h-32 bg-slate-200 rounded-md md:rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full text-base">
          <span className="flex justify-center items-center">Spectator (n)</span>
          <span className="flex justify-center items-center col-span-2">/spekˈteɪ.t̬ɚ/ người xem thể thao</span>

          <div className="flex justify-center items-center">
            <Image
              src="https://farm1.staticflickr.com/6/10835124_3e93a151e0.jpg"
              className="object-fill w-full md:w-3/4 rounded-3xl"
              height={104}
              width={104}
            />
          </div>
          <span
            className="absolute md:block right-0 flex justify-center items-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              speak({ text: getTextToSpeech('Spectator (v,n)') });
            }}
          >
            <SoundOutlined />
          </span>
        </div>
      </div>
    </>
  );
};
