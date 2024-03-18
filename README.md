import Pai from "./components/00Atividade/atividade01/questao01/01Pai";
import MeuPc from "./components/00Atividade/atividade01/02MeuPc";
import  { World, Arena } from "./components/00Atividade/atividade01/03Batalha";
function App(){

  return(
    <div> 
      <h1>Questão 01</h1>
      <hr />
      <h2>Calculo de IMC</h2>
      <hr />
      <Pai />
      <h1>Questão 02</h1>
      <MeuPc />
      <hr />
      <h1>Questão 03</h1>
      <World>
      <Arena arena="A" />
      <Arena arena="B"/>
      <Arena arena="C"/>
      </World>
      
    </div>
  )
}
