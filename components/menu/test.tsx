import React, { useState } from 'react';

const CCC: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [name] = useState('Star');

  const countPlusThree = () => {
    setCount(count + 1);
    setCount(count + 2);
    debugger;
    setCount(count + 3);
  };

  return (
    <div className="App">
      <p>
        {name} Has Clicked <strong>{count}</strong> Times
      </p>
      <button onClick={countPlusThree}>Click *3</button>
    </div>
  );
};

export default CCC;
