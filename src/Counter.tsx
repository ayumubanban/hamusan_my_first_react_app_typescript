import React, { useEffect, useRef, useState } from 'react';

// const array: Array<number> = [1, 2, 3];
// const readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 11;
// readOnlyArray[0] = 11;

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

  const renderTimes = useRef<number>(0);
  // renderするたびに実行される（この場合は+-ボタン押した場合とかリロード時に）
  useEffect(() => {
    console.log('render was done.');
    renderTimes.current = renderTimes.current + 1;
  });
  const ref = useRef<HTMLInputElement>(null!);
  // 該当のinput要素にfocusする
  const focusInput = () => {
    // const current = ref.current;
    // if (current != null) current.focus();

    // nullの時はfocus()を実行しないよと
    // ref.current?.focus();

    // null!にするとエラー出なくなる。 !: Non-Null Assertion Operator
    ref.current.focus();
  }

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text"/>
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
