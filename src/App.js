import './App.css';
import Accordion from './components/Accordion';
import Navbar from './components/Navbar';
import sampleData from './utils/sampleData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>GitHub's frequently asked questions</h1>
        <button className='header-btn'>Contact us</button>
      </header>
      <div className='main-container'>
        <Accordion items={sampleData} />
      </div>
    </div>
  );
}

export default App;
