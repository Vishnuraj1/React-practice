import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './Components/State';
import { Container } from 'react-bootstrap';

function App() {
  const state = [
    {
      name: "kerala",
      language: "Malayalam",
      population: 1000
    },
    {
      name: "karnataka",
      language: "Kannada",
      population: 2000
    },
    {
      name: "Goa",
      language: "Hindi",
      population: 400
    },
    {
      name: "TamilNadu",
      language: "Tamil",
      population: 2000
    },
  ]
  return (
    <div className='App'>
      <Container>
        {/* <State name={"kerala"} language={"Malayalam"} population={1000} />
        <State name={"karnataka"} language={"Kannada"} population={500} />
        <State name={"TamilNadu"} language={"Tamil"} population={100} /> */}
        <State states={state}/>
      </Container>

    </div>
  );
}

export default App;

