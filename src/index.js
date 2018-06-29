import React from 'react';
import ReactDOM from 'react-dom';

// 新しいコンポーネントを作成する
const App = () => {
  return <div>Hi!</div>;
}
// このコンポーネントはHTMLを生成し、DOMによって描画する
ReactDOM.render(<App />, document.querySelector('.container'));