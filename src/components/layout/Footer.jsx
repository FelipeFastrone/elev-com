 import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import styles from "./Footer.module.css";


export default function Footer(){
    return (
      <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a 
          target="_blank" 
          rel="noreferrer"
          href="https://instagram.com/eletr_roger">
            <FaInstagram className={styles.icon}/></a></li>
        <li className={styles.item}><a
          target="_blank" 
          rel="noreferrer"
          href="https://facebook.com/Elev.com">
            <FaFacebook className={styles.icon}/></a></li>
        <li className={styles.item}>
          <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/5519998467140">
          <FaWhatsapp className={styles.icon}/></a></li>

      </ul>
      
      <p className={styles.copy}><span>FelipeFastrone</span>&copy; 2023</p>
 </footer>
    )
} 

