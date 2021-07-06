
import './App.css';
import ElementStyle from './components/element-style/element-style';
import ExerciceUn from './exercice-un/exercice-un';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
    <Welcome name="patrick"/>

<ElementStyle />
<ElementStyle nb1={20} nb2={1} />
<ElementStyle nb1="55" nb2="999" />
<ExerciceUn nomfamille="pve" />


    </div>
  );
}

export default App;
