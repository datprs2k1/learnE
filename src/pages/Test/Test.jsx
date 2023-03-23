import React from 'react';
import { FlipCard } from 'components';
import { Button } from 'antd';

function Test(props) {
  const onChange = () => {};
  return (
    <div className="h-80 md:h-[500px] bg-indigo-300 w-full md:w-8/12 mx-auto rounded-md md:rounded-xl">
      <FlipCard />
      <Button>AB</Button>
    </div>
  );
}

export default Test;
