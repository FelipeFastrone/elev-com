 import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';


export default function Footer(){
    return (
      <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}><Link><FaInstagram className={styles.icon}/></Link></li>
        <li className={styles.item}><Link><FaFacebook className={styles.icon}/></Link></li>
        <li className={styles.item}><Link><FaWhatsapp className={styles.icon}/></Link></li>

      </ul>
      
      <p className={styles.copy}><span>Site</span>&copy; 2023</p>
 </footer>
    )
} 

