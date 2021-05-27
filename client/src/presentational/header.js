/*eslint-disable */
import './header.module.css';
import {ToggleContext} from '../App';
import {useContext} from 'react';

export default function Header(props){
  const {toggle,setToggle} = useContext(ToggleContext);
  return(
    <header>
      <h1> Invoices </h1>
      <select className="header--select form-select form-select-sm mb-3" aria-label=".form-select-sm example">
        <option defaultValue>Filter</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <button type="button" className="btn btn-lg btn-primary" onClick = {() => setToggle(prev => !prev)}>New Invoice</button>
    </header>
)
}
