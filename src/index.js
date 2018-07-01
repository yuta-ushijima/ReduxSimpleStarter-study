import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBvhL2W0I8uA_ZvgVLvFrTnCvPinOsBzJU';

// 新しいコンポーネントを作成する
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// このコンポーネントはHTMLを生成し、DOMによって描画する
ReactDOM.render(<App />, document.querySelector('.container'));