
import styles from "./Elevadores.module.css";
import Button from "../btn/Button";
import Container from "../layout/Container";


import imgElevator from "../../assets/acessibilidade.jpeg";
import imgCargaElevator from "../../assets/cargaElevator.jpg";


export default function Elevadores(){
  
  return (
    <Container>
      
      

        <div className={styles.wrapper}>
      <h1 className={styles.title}>Elevadores</h1>
         <div className={styles.wrapperContent}>
         <div className={styles.info}>
        <h3>Consertos e novas instalações </h3>
     <div className={styles.wrapperCard}>
       <div className={styles.card}>
        <h4>Elevador de carga/Monta Carga</h4>
        <ul>
          <li>

          Elevador de Carga (NBR14712): <br></br>
          Para cargas desde 350kg até 30.000kg. <br></br>
          Utiliza o acionamento hidráulico.  <br></br>
          Transporte de cargas e passageiros.  <br></br>
          Aplicação em fábricas, hospitais e centros comerciais.

</li>
<hr></hr>
<li>
  

          Monta Carga (NBR 14712): <br></br>
          Para Cargas até até 300Kg. <br></br>
          Utiliza o acionamento eletromecânico. <br></br>
          Transporte apenas de cargas. <br></br>
          Aplicação em fábricas, hospitais e centros comerciais.
  
          </li>
        </ul>
       </div>
       <div> 
        <img className={styles.img} src={imgCargaElevator} alt="
        Imagem elevador de carga"></img>
        </div>
        </div>
      <div className={styles.wrapperCard}>

       <div> 
        </div>
       <div className={styles.card}>
        <h4>Acessibilidade</h4>
        <ul className={styles.cardAcess}>
          <li>Plataforma Hidráulica de Acessibilidade</li>
          <li>Plataforma Hidráulica Residencial</li> 
          <li>Elevador Hidráulico Residencial</li>
          <li>Soluções para Escola, Clubes, Academias e Agências Bancárias</li>
        </ul>
        </div>
        <img className={styles.img} src={imgElevator} alt="Imagem de uma deficiente fisíca na cadeira de rodas"></img>

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