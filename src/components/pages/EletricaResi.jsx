
import styles from "./EletricaResi.module.css";
import Button from "../btn/Button";
import Container from "../layout/Container";


import img from "../../assets/fundo2.jpeg"

export default function EletricaResi(){
  
  return (
    <Container>
      

     
        <div className={styles.wrapper}>
      <h1 className={styles.title}>Elétrica Residencial</h1>
      <div className={styles.wrapperContent}>
    
          <h4>Precisando de reparos ou de uma de uma nova instalação em casa?  </h4>
        <div className={styles.info}>
      <br></br>
      <ul className={styles.list}>
        <li>Automação de tarefas</li>
        <li>Portões de garagem</li>
        <li>Ventiladores de teto</li>
        <li>Interruptores e tomadas</li>
        <li>Chuveiros</li>
        <li>Alarmes e cameras</li>
      </ul>
      <img className={styles.img} src={img} alt="Elestricista arrumando um poste"></img>
      </div>
      <Button 
       className={styles.btn}
       text="Faça um orçamento"
       />

     
     
     </div>
       </div>

   </Container>
  )
}