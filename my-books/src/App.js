import './App.css';
import Logo from'./component/Logo/index.js'
import perfil from './img/perfil.svg'
import sacola from './img/sacola.svg'


const textoOpecoes = ["CATEGORIA", "MINHA ESTANTE", "FAVORITOS"];
const icones = [[perfil , "perfil"] , [sacola , "sacola"]];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo></Logo>
        
      <ul className="opcoes">
        {textoOpecoes.map(
          (texto) => (<li className='opcao'><p>{texto}</p></li>)
        )}
      </ul>

      <ul className="icones">
        {icones.map(
          (icone) => (<li className="icone"><img src={icone[0]} alt={icone[1]}></img></li>)  
        )}
      </ul>

      </header>
    </div>
  );
}

export default App;
