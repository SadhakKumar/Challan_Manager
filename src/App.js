import './App.css';
import { Routes,Route } from 'react-router-dom';
import SearchLayout from './components/SearchLayout/SearchLayout';
import ChallanInfoCard from "./components/ChallanInfoCard/ChallanInfoCard"

function App() {
  return (
    
      <Routes>
        <Route path = '/' element = {<SearchLayout/>}/>
        <Route path = '/challan' element = {<ChallanInfoCard/>}/>
      </Routes>
    
  );
}

export default App;
