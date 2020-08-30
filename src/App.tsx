import React from 'react';

interface AppProps {
  message: string;
}

// propsの中身の型制約を宣言
// const App = ({ message }: { message: string }) => {
const App = ({ message }: AppProps) => {
  // console.log(props);
  // const { message } = props;
  // return <div>React Starter Kit in TypeScript</div>;
  return <div>{message}</div>;
};

export default App;
