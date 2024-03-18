//import Helloworld from "./components/01HelloWorld/HelloWorld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Loja from "./components/03Props/Loja";
//import Curso from "./components/03Props/Curso";
//import './components/atividade00/estilos.css';
//import {MeusDados1 as Md, MeusDados2 as Md2} from "./components/00Atividade/atividade00/MeusDados1";
//import MeusDados2 from "./components/00Atividade/atividade00/MeusDados2";
//import Temperatura from "./components/00Atividade/atividade00/Temperatura";
//import SistemaSolar from "./components/04Children/SistemaSolar";
//import Planetas from "./components/04Children/Planetas";
//import Galaxia from "./components/04Children/Galaxia";
//import Pai from "./components/04Children/Pai";
//import Estado from "./components/06Estados/Estado";
//import Pokemon from "./components/06Estados/Pokemon";
//import { CompA } from "./components/06Estados/07PropDrilling/PropDrilling";
//import { CompA } from "./components/08Contexto/Contexto";
//import PokemonPrincipal from "./components/09PokemonContexto/PokemonPrincipal";
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





 