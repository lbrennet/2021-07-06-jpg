import React from 'react'
import { Values } from './components/Values/Values';
import * as RGUI from 'react-graphical-ui'; // Prefix le component par RGUI comme un 'package'

interface Props { }
interface State {
  values: Array<number>
}

export default class App extends React.Component<Props, {}> {
  state: State
  constructor(props: Props) {
    super(props);
    this.state = { values: [15, 12, 80, 7, 70] }
  }
  render() {
    return <div className="App">
      <Values values={this.state.values}
        addValue={(index: number) => {
          console.log('add value' + index);
          // on ne mute pas le state, on passe un nouveau tableau constitué de l'ancien + nouvel element
          // on ne fait pas de state = qqchose non plus
          this.setState({ values: [...this.state.values, Number(index)] }) // on caste en number parce que le submit envoie du texte
        }}
        deleteValue={(index: number) => {
          console.log('delete value')
        }}
      />
      <hr />
      <RGUI.CloudPoints values={this.state.values}></RGUI.CloudPoints>

      {JSON.stringify(this.state)}
    </div>
  }
}