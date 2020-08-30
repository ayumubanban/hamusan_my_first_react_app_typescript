import React from 'react';
import Counter from './Counter'

interface AppProps {
  message?: string;
}

// propsの中身の型制約を宣言
// const App = ({ message }: { message: string }) => {
// const App = ({ message }: AppProps) => {
// こっちの型制約の宣言の方が、defaultPropsに対する制限がきついので良いっぽい
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  // console.log(props);
  // const { message } = props;
  // return <div>React Starter Kit in TypeScript</div>;
  // return <div>{message}</div>;
  return (
    <div>
      <Counter />
    </div>
  );
};

// デフォルトのpropsを設定できる
App.defaultProps = {
  message: 'Hello, defaultProps!',
  // description: 'This is App Component.',
}

export default App;
