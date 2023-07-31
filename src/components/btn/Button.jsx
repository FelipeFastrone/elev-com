/* eslint-disable react/prop-types */
import styles from './Button.module.css';

import {FaWhatsapp} from "react-icons/fa";


export default function Button({text, type}){
     return (
      <div>
        
        <a href="https://wa.me/5519998467140">
        <button 
        className={styles.btn}
        type={type}>
          {text}
          <FaWhatsapp
          className={styles.item} />
          
        </button>
        </a>
      </div>
     )
}