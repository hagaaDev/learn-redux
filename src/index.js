import React from 'react';
import ReactDOM from 'react-dom';
// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules/Index';
// **** (4) Provider 불러오기
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// **** (2) 스토어를 만들고 현재 값 확인해보기
// const store = createStore(rootReducer);
// console.log(store.getState());

// **** (3) 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

// **** (5) Provider 렌더링해서 기존의 App 감싸주기
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
