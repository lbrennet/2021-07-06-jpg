import React from 'react'
import SubmitButton from '../SubmitButton/SubmitButton'
import styles from './Values.module.css';
interface Props {
  values: Array<number>
  addValue: Function,
  deleteValue: Function
}

export const Values: React.FunctionComponent<Props> = props => {

  return <>
    <div className={styles.ValuesForm} data-testid="ValuesFrom">
      <form onSubmit={(evt:React.SyntheticEvent) => {
        evt.preventDefault()
        console.log(evt)
        const target = evt.target as typeof evt.target & {
          inputValueToAdd: { value: number };
        };
        props.addValue(target.inputValueToAdd.value)
      }}>
        <input type="number" name="inputValueToAdd" />
        {/* <button type="submit">Ajouter valeur</button> */}
        <SubmitButton><img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678092-sign-add-256.png" style={{width:'32px'}}/>Ajouter</SubmitButton>
      </form>
    </div>
    <div className={styles.ValuesViewer} data-testid="ValuesViewer">
      <h2>Resultats</h2>
      <table>
        <thead>
          <tr><td>Value</td><td>actions</td></tr>
        </thead>
        <tbody data-testid={`tab-body`}>
          {
            props.values.map((value, index) => {
              return <tr data-testid={`tab-val-${index}`} key={`tab-val-${index}`}><td>{value}</td><td>delete</td></tr>
            })
          }
        </tbody>
      </table>
    </div>
  </>
};