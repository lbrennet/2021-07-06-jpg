import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import ValuesViewer from './components/ValuesViewer/ValuesViewer';
import * as RGU from 'react-graphical-ui';
class App extends React.Component {
  state:{values : number[]}
  constructor(props:any){
    super(props);
    this.state={values:[20,30,12,54,85,72,42,41]};
  }
  render() {
    return (
      <div className="App">
        <ValuesViewer values={this.state.values}></ValuesViewer>
        <Button text="colored button" bgcolor="tomato" />
        <Button text="colored button" bgcolor="skyblue" />
        <hr/>
      <RGU.Histogram values={this.state.values} max={100} notAllreadyFull={false}  gridDivisionCount={10} display="inline" />
      <RGU.CloudPoints values={this.state.values} max={100} notAllreadyFull={false}  gridDivisionCount={10} display="inline" />

      </div>
    );
  }
}

export default App;
