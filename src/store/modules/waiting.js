import { createAction, handleActions } from 'redux-actions'; // **** (2) createAction 불러오기

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

// **** FSA 규칙을 따르는 액션 생성 함수 정의

/* 
FSA 에선 다음 조건들을 필수적으로 갖추고있어야 합니다.

- 순수 자바스크립트 객체이며,
- type 값이 있어야 합니다.

그리고 다음 사항들은 선택적으로 필요합니다.

- error 값이 있음
- payload 값이 있음
- meta 값이 있음
*/

// **** (1) createAction 으로 액션 만들기 전
/* export const changeInput = (text) => ({ type: CHANGE_INPUT, payload: text });
export const create = (text) => ({ type: CREATE, payload: text });
export const enter = (id) => ({ type: ENTER, payload: id });
export const leave = (id) => ({ type: LEAVE, payload: id }); */

let id = 3; // **** (4) 데이터를 새로 생성 할 때마다 고유 id 값을 주기위해 액션 생성함수 수정
// **** (3) createAction 으로 액션 만들기
/* export const changeInput = createAction(CHANGE_INPUT, (text) => text);
export const create = createAction(CREATE, (text) => text);
export const enter = createAction(ENTER, (id) => id);
export const leave = createAction(LEAVE, (id) => id); */

// (5) createAction 으로 액션 생성함수 정의
export const changeInput = createAction(CHANGE_INPUT, (text) => text);
export const create = createAction(CREATE, (text) => ({ text, id: id++ }));
export const enter = createAction(ENTER, (id) => id);
export const leave = createAction(LEAVE, (id) => id);

// **** (6) 초기 상태 정의
const initialState = {
  input: '',
  list: [
    {
      id: 0,
      name: '홍길동',
      entered: true,
    },
    {
      id: 1,
      name: '콩쥐',
      entered: false,
    },
    {
      id: 2,
      name: '팥쥐',
      entered: false,
    },
  ],
};

// **** (7) handleActions 로 리듀서 함수 작성
export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [CREATE]: (state, action) => ({
      ...state,
      list: state.list.concat({
        id: action.payload.id,
        name: action.payload.text,
        entered: false,
      }),
    }),
    [ENTER]: (state, action) => ({
      ...state,
      list: state.list.map((item) =>
        item.id === action.payload ? { ...item, entered: !item.entered } : item
      ),
    }),
    [LEAVE]: (state, action) => ({
      ...state,
      list: state.list.filter((item) => item.id !== action.payload),
    }),
  },
  initialState
);
