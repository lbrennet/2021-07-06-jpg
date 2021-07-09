import React from 'react';
import styles from './Values.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'


interface Props {
  values: Array<number>
  addValue: Function
  deleteValue: Function
}

export const Values: React.FunctionComponent<Props> = props => {
  return <>  {/* balise vide react utilisee pour wrapper tout le flux en dessous dans une seule balise */}
    <div className={styles.ValuesForm} data-testid="ValuesForm">
      
      <form onSubmit={(evt) => {
        evt.preventDefault()
        console.log(evt)
        const target = evt.target as typeof evt.target & {
          inputValueToAdd: { value: number }
        };
        props.addValue(target.inputValueToAdd.value);
      }}>
        <input type="number" name="inputValueToAdd" />
        {/* <button type="submit">Ajouter valeur</button> */}
        <SubmitButton backColor="red"><img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678092-sign-add-256.png" alt="icon+" style={{width:'32px'}}/>Ajouter</SubmitButton>
      </form>
    </div>
    <div className={styles.ValuesViewer} data-testid="ValuesViewer">
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

