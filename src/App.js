import './App.css';
import Accordion from './components/Accordion';
import sampleData from './utils/sampleData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Accordion Component</h1>
      </header>
      <div className='main-container'>
        <Accordion items={sampleData} />
      </div>
    </div>
  );
}

export default App;
