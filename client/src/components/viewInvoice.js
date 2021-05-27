/*eslint-disable */
import { invoiceData } from "../data.js";
import {useState, useEffect} from 'react';

export default function ViewInvoice(){
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(invoiceData);
  },[])
  return(
      <ul className="invoice-container">
        {data.map((item)=>(
          <li key = {item.id.toString()}>
            {item.id}
          </li>
        ))}
      </ul>
  )
}
