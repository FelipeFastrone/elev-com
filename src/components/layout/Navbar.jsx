import {Link} from "react-router-dom";

import {FaBolt}  from 'react-icons/fa';

import  Container from './Container';
import styles from "./Navbar.module.css";

export default function Navbar(){
  return (
    <nav className={styles.navbar}>
      <Container>
         <Link to="/" className={styles.logo}>
           <h1 className={styles.logo}>Elev<span>.com</span><FaBolt/></h1>
          </Link>
        </Container>
        <Container>
         <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
       <li className={styles.item}>
        <Link to="/EnergiaSol">Energia Solar</Link>
      </li>
       <li className={styles.item}>
        <Link to="/EletricaResi">Residencial</Link>
      </li>
      <li className={styles.item}>
        <Link to="/Arcondicionado">Ar Condicionado</Link>
      </li>
      <li className={styles.item}>
        <Link to="/Elevadores">Elevadores</Link>
      </li>
    </ul>
   </Container>
    </nav>
  )
}