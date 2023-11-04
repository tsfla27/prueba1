import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C02contador from './componentes/C02contador';
import C03contadordoble from './componentes/C03contadordoble';
import C06matriz from './componentes/C06matriz';
import C07matrizoperaciones from './componentes/C07matrizoperaciones';
import Variable from './componentes/C04variable';
import C05operador from './componentes/C05operador';


function App() {
  return (
    <div className="App">
      <h1>Prácticas... React</h1>
      <C01componente/>
      <hr/> 
      <C02contador/>
      <hr/>
      <C03contadordoble/>
      <hr/>
      <Variable xVariable="Hola mundo"/>    
      <hr/>
      <C05operador xEdad= "20"/>
      <hr/>
      <C06matriz/>
      <hr/>
      <C07matrizoperaciones/>
      <hr/>
        
    </div>
  );
}

export default App;
