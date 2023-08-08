
import styles from "./Arcondicionado.module.css";
import Button from "../btn/Button";
import Container from "../layout/Container";



export default function arCondicionado(){
  
  return (
    <Container>
      

        <div className={styles.wrapper}>
      <h1 className={styles.title}>Ar Condicionados</h1>
      <div className={styles.wrapperContent}>
      
        <div className={styles.info}>
      <h4>Conheça nossas soluções</h4>
      <br></br>
      <div className={styles.wrapperCard}>
       <div className={styles.card}>
        <h4>Instalação</h4>
        <p>Todas as nossas instalações são efetuadas de acordo com os procedimentos necessário para o perfeito funcionamento dos aparelhos de ar-condicionado . Realizamos todas as nossas instalações de acordo com o que determina o fabricante. Garantindo perfeito rendimento do aparelho e sem perder a garantia de fábrica.</p>
       </div>
       <div className={styles.card}><h4>MANUTENÇÃO CORRETIVA E CONSERTOS</h4>
        <p>Contamos com uma equipe técnica altamente qualificada e devidamente treinada para melhor atender os nossos clientes. Garantindo assim uma análise precisa na hora de identificar o defeito do equipamento e na execução do serviço.</p></div>
        </div>
      <div className={styles.wrapperCard}>

       <div className={styles.card}><h4>IMPLANTAÇÂO DE PMOC</h4>
        <p>Trabalhamos com a implantação do PMOC para sua empresa. (PMOC: plano de manutenção operação e controle). Oferecendo todo o plano de manutenção e todos os laudos e documentos necessários de acordo com a lei. Junto com a implantação do PMOC oferecemos toda a assistência técnica com equipe altamente treinada e qualificada com todos os treinamentos e certificados necessários para atender a sua empresa. Proporcionando maior vida útil as peças e equipamentos de climatização da sua empresa, reduzindo custos com manutenções corretivas e consumo de energia .Trazendo também qualidade de ar para os seus funcionários. E evitando possíveis problemas com fiscalizações.

       </p></div>
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