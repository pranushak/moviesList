import styles from './names.module.css';
import { useState } from 'react';
export default function  MovieName(props) {
    
    const [change,setChange] = useState("start");
    const [status,setStatus] = useState(false);
    const handleChange =() =>{
        setChange("watched");
        setStatus(true);
    }
    
    return <div className={styles.divStyle}>
        <label>{props.name}</label>
        <button className={styles.button} onClick = {handleChange}>{change}</button>
        { status ? <p>&#10004;</p> : <p>&#10062;</p> }
    </div>
}