import React from 'react';
import Button from '../Button/Button';

interface Props {
  values: Array<number>
  addValue: Function
  deleteValue: Function
}

export const Values: React.FunctionComponent<Props> = props => {
  return <>  {/* balise vide react utilisee pour wrapper tout le flux en dessous dans une seule balise */}
    <div>
      <form onSubmit={(evt) => {
        console.log(evt)
        props.addValue(0)
      }}>
        <input type="number" />
        <button type="submit">Ajouter valeur</button>
      </form>
    </div>
    <div>
      <h2>Resultats</h2>
      <table>
        <thead>
          <tr>
            <td>Value</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {
            props.values.map((value, index, array) => {
              return <tr key={`tab-val-${index}`}><td>{value}</td><td>delete</td></tr>
            })
          }
        </tbody>
      </table>
    </div>
  </>
};

