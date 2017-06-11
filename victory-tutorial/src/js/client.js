import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';

class Main extends React.Component {
  render() {
    const data = [
      {quarter: 1, earnings: 13000},
      {quarter: 2, earnings: 16500},
      {quarter: 3, earnings: 14250},
      {quarter: 4, earnings: 19000},
    ];
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
