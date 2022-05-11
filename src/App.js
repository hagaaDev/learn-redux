import React, { Component } from 'react';

import './App.css';
//import Counter from './components/Counter';
import WaitingList from './components/WaitingList';
import PaletteContainer from './containers/PaletteContainer'; // **** (1) 불러오기
import CounterContainer from './containers/CounterContainer'; // **** (3) 불러오기
import WaitingListContainer from './containers/WaitingListContainer'; // **** (5) 불러오기

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer /> {/* **** (2) 대체하기 */}
        <CounterContainer /> {/* **** (4) 대체하기 */}
        {/* <Counter value={0} color="red" /> */}
        <WaitingListContainer /> {/* **** (6) 교체하기 */}
        {/* <WaitingList /> */}
      </div>
    );
  }
}

export default App;
