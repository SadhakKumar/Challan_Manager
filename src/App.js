import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ChallanInfoCard from './components/ChallanInfoCard/ChallanInfoCard'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ChallanInfoCard/>
    </div>
  );
}

export default App;
