import { FaBolt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../btn/Button.jsx";


import styles from "./Home.module.css";
export default function Home(){
  return (

    <div className={styles.container}>
    <h1>Elev<span>.com</span><FaBolt
/></h1>
    <div className={styles.wrapper}>
    
    <div className={styles.wrapperImg}>
             <h2>Energia Solar</h2>
    
         <Link to="/EnergiaSol">
         <div className={styles.solarImg}>

         </div>

         </Link>
     </div>
    
   <div className={styles.wrapperImg}>
          <h2>Elétrica Residencial</h2>
    
        <Link 
        to="/EletricaResi">
            <div className={styles.lampadaImg}>
          </div>
       </Link>

   </div>
   <div className={styles.wrapperImg}>
          <h2>Ar Condicionados</h2>
    
        <Link 
        to="/ArCondicionado">
            <div className={styles.arCondicionadoImg}>
          </div>
       </Link>

   </div>
   <div className={styles.wrapperImg}>
          <h2>Elevadores</h2>
    
        <Link 
        to="/Elevadores">
            <div className={styles.elevadorImg}>
          </div>
       </Link>

   </div>
        
    </div>
      
     <Button
     text="Fale conosco"
     type="button"
     
    >
    </Button>
    </div>
  )
}