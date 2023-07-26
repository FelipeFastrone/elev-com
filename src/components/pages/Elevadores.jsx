
import styles from "./Elevadores.module.css";
import Button from "../form/Button";
import Container from "../layout/Container";


import img from "../../assets/fundo2.jpeg"

export default function Elevadores(){
  
  return (
    <Container>
      
      

        <div className={styles.wrapper}>
      <h1 className={styles.title}>Elevadores!</h1>
      <div className={styles.wrapperContent}>
        <div className={styles.info}>
      <h4>Consertos e novas instalações </h4>
      <br></br>
      <ul className={styles.list}>
        <li>Automação de tarefas</li>
        <li>Portões de garagem</li>
        <li>Ventiladores de teto</li>
        <li>Interruptores e tomadas</li>
        <li>Chuveiros</li>
        <li>Alarmes e cameras</li>
      </ul>
      <Button 
       className={styles.btn}
       text="Faça um orçamento"
       />
     </div>

     
        <img className={styles.img} src={img} alt="Elestricista arrumando um poste"></img>
     
     </div>
     </div>
   </Container>
  )
}