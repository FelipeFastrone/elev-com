
import styles from "./Elevadores.module.css";
import Button from "../btn/Button";
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
     <div className={styles.wrapperCard}>
       <div className={styles.card}>
        <h4>Instalação</h4>
        <p>Todas as nossas instalações são efetuadas de acordo com os procedimentos necessário para o perfeito funcionamento dos aparelhos de ar-condicionado . Realizamos todas as nossas instalações de acordo com o que determina o fabricante. Garantindo perfeito rendimento do aparelho e sem perder a garantia de fábrica.</p>
       </div>
       <div> 
        <img className={styles.img} src={img} alt="Elestricista arrumando um poste"></img>
        </div>
        </div>
      <div className={styles.wrapperCard}>

       <div> 
        <img className={styles.img} src={img} alt="Elestricista arrumando um poste"></img>
        </div>
       <div className={styles.card}><h4>HIGIENIZAÇÃO</h4>
        <p>Efetuamos a higienização química do seu equipamento com ferramentas e produtos de alta qualidade, proporcionando uma limpeza completa no seu aparelho. Garantindo o funcionamento e vida útil do seu equipamento, e melhorando a qualidade de ar que você, sua família ou funcionários respiram.</p></div>
      </div>
        </div>
      </div>
      <Button 
       className={styles.btn}
       text="Faça um orçamento"
       />

     
     
     </div>
   </Container>
  )
}