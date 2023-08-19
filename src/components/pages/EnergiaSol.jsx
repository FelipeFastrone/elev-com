
import styles from "./EnergiaSol.module.css";
import Button from "../btn/Button";
import Container from "../layout/Container";


import img from "../../assets/Solar.jpg"

export default function EnergiaSol(){
  
  return (
    <Container>
     


        <div className={styles.wrapper}>
      <h1 className={styles.title}>Você quer reduzir sua despesa com conta de Luz?</h1>
      <h3 >Energia Solar</h3>
      <div className={styles.wrapperContent}>
      
        <div className={styles.info}>
      <br></br>
      <p>Invista em painéis solares para sua residência ou empresa e começe a economizar em suas contas de luz a partir de agora!</p>
      <section className={styles.list}>
        <article>Se você deseja economizar dinheiro na sua conta de luz, os painéis solares são a solução ideal. Esses painéis convertem a energia da luz solar em eletricidade de maneira limpa e sustentável, sem produzir poluentes que afetem o ar e a água.
         </article>
      <br></br>
      <br></br>

        <article>A instalação dos painéis solares é fácil e pode ser realizada em telhados de casas e prédios, em terrenos abertos ou em grandes usinas solares. Além disso, os painéis solares são duráveis e requerem pouca manutenção, garantindo uma fonte confiável de energia por décadas.</article>
      <br></br>
      <br></br>
      <img className={styles.img} src={img} alt="placas solares"></img>
        <article className={styles.list}>
      <br></br>
          Não perca a oportunidade de fazer a sua parte para proteger o meio ambiente e economizar na sua conta de luz. Considere a instalação de painéis solares em sua casa ou empresa e comece a desfrutar dos benefícios imediatamente.
        </article>
      </section>
      
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