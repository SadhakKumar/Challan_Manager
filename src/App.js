import './App.css';
import { Routes,Route } from 'react-router-dom';
import SearchLayout from './components/SearchLayout/SearchLayout';
import ChallanInfoCard from "./components/ChallanInfoCard/ChallanInfoCard"
import UploadProofCard from './components/UploadProofCard/UploadProofCard';
import ChallanVideoCard from './components/ChallanVideoCard/ChallanVideoCard';

function App() {
  return (
    
      <Routes>
        <Route path = '/' element = {<SearchLayout/>}/>
        <Route path = '/challan' element = {<ChallanInfoCard/>}/>
        <Route path = '/upload' element = {<UploadProofCard/>}/>
        <Route path = '/video' element = {<ChallanVideoCard/>}/>
      </Routes>
    
  );
}

export default App;
