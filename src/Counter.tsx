import React, { useState } from 'react';

// // type SetStateAction<S> = S | ((prevState: S) => S);
// type MySetStateAction = number | ((prevState: number) => number);
// type Dispatch = (value: MySetStateAction) => void;

const Counter: React.FC<{}> = () => {
  // const value = 0;
  const initialValue: any = 0;
  // const [value, setValue] = useState(0);
  // const [value, setValue] = useState(initialValue);
  const [value, setValue] = useState<number>(initialValue);
  // const [value, setValue] = useState<string>(initialValue);

  const increment = () => {
    // setValue(value + 1);
    setValue((prevState) => prevState + 1);
  }
  const decrement = () => {
    // setValue(value - 1);
    setValue((prevState) => prevState - 1);
  }

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;