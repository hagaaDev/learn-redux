import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/Counter';

class PaletteContainer extends Component {
  handleSelect = (color) => {
    const { changeColor } = this.props;
    console.log('what');
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Palette onSelect={this.handleSelect} selected={color} />;
  }
}

// props 로 넣어줄 스토어 상태값
// mapStateToProps 가 스토어 안에 들어있는 값을 props로 전달
const mapStateToProps = (state) => ({
  color: state.counter.color,
});

// props 로 넣어줄 액션 생성함수
// mapDispatchToProps 가 액션 생성함수들을 props로 전달
// 호출한다고 해서 상태에 변화가 일어나는것이 아닙니다. 그 대신에, 액션 객체를 생성해내죠.
// 그 액션 객체를 스토어한테 전달해주어야 상태에 변화가 발생합니다.
// color 를 파라미터로 받아와서, 그 값을 가지고 CHANGE_COLOR 액션 객체를 생성한다음에 스토어한테 디스패치 하는 함수를, 컴포넌트의 props 로 전달해주는 것
const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => dispatch(changeColor(color)),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);
