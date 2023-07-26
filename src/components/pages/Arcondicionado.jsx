
import styles from "./Arcondicionado.module.css";
import Button from "../form/Button";
import Container from "../layout/Container";


import img from "../../assets/fundo2.jpeg"

export default function arCondicionado(){
  
  return (
    <Container>
      

        <div className={styles.wrapper}>
      <h1 className={styles.title}>Ar Condicionados!</h1>
      <div className={styles.wrapperContent}>
      
        <div className={styles.info}>
      <h4>Conheça nossas soluções</h4>
      <br></br>
      <div className={styles.wrapperCard}>
       <div className={styles.card}></div>
       <div className={styles.card}></div>
       <div className={styles.card}></div>
       <div className={styles.card}></div>
      </div>
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