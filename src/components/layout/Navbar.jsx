import {Link} from "react-router-dom";
import { useRef, useState } from "react";
import {FaBolt}  from 'react-icons/fa';
import {RxHamburgerMenu} from 'react-icons/rx'

import  Container from './Container';
import styles from "./Navbar.module.css";



export default function Navbar(){
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => {
  setIsActive(!isActive)
}  
console.log(isActive);
  return (
    <Container>
      <div  className={styles.navbar}>
         <Link to="/elev-com" className={styles.logo}>
           <h1 className={styles.logo}>Elev<span>.com</span><FaBolt/></h1>
          </Link>
          <button className={styles.menuButton}
          onClick={onClick}>
            <span>
            <RxHamburgerMenu/>
            </span>
          </button>
        <nav ref={dropDownRef}className={isActive ? styles.active : styles.inactive}>
         <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/elev-com"
        onClick={() => {
          setIsActive(false)
        }}>Home</Link>
      </li>
       <li className={styles.item}>
        <Link to="/EnergiaSol"
        onClick={() => {
          setIsActive(false)
        }}
        >Energia Solar</Link>
      </li>
       <li className={styles.item}>
        <Link to="/EletricaResi"
        onClick={() => {
          setIsActive(false)
        }}>Residencial</Link>
      </li>
      <li className={styles.item}>
        <Link to="/Arcondicionado"
        onClick={() => {
          setIsActive(false)
        }}>Ar Condicionado</Link>
      </li>
      <li className={styles.item}>
        <Link to="/Elevadores"
        onClick={() => {
          setIsActive(false)
        }}>Elevadores</Link>
      </li>
    </ul>
       </nav>
       </div>
    </Container>
  )
}