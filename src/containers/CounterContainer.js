import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // **** (1) 불러오기
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/Counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

/* **** bindActionCreators
: actionCreator: (...params) => dispatch(actionCreator(...params) 에 해당하는 작업을 자동으로 해줌

이렇게 여러번 dispatch하는 소스를 
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
}); 

이렇게 간결하게 해준다.
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increment, decrement }, dispatch); // **** (2) bindActionCreators 사용.

*/

// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
``;
