import { combineReducers } from 'redux';
import counter from './Counter';
import waiting from './waiting'; // **** 불러오기

// ** combineReducers 로 리듀서 합치기

/* 
리듀서가 여러개일대는 redux 의 내장함수인 combineReducers 를 사용하여 리듀서를 하나로 합치는 작업을 합니다. 
여러개로 나뉘어진 리듀서들을 서브리듀서 라고 부르고, 하나로 합쳐진 리듀서를 루트리듀서 라고 부릅니다.
*/

export default combineReducers({
  counter,
  waiting, // **** 추가
});

/* 
이렇게 리듀서를 합치게 되면, 루트 리듀서의 초깃값은 다음과 같은 구조로 됩니다.

{
  counter: {
    color: 'red',
    number: 0,
  },
  // ... 다른 리듀서에서 사용하는 초깃값들
}
*/
