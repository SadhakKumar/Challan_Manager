import './App.css';
import { Routes,Route } from 'react-router-dom';
import SearchLayout from './components/SearchLayout/SearchLayout';
import ChallanInfoCard from "./components/ChallanInfoCard/ChallanInfoCard"
import UploadProofCard from './components/UploadProofCard/UploadProofCard';
import ChallanVideoCard from './components/ChallanVideoCard/ChallanVideoCard';
import ViewChallanLayout from './components/ViewChallanLayout/ViewChallanLayout';
import ChallengeLayout from './components/ChallengeLayout/ChallengeLayout';

function App() {
  return (
    
      <Routes>
        <Route path = '/' element = {<SearchLayout/>}/>
        <Route path = '/challan' element = {<ChallanInfoCard/>}/>
        <Route path = '/upload' element = {<UploadProofCard/>}/>
        <Route path = '/video' element = {<ChallanVideoCard/>}/>
        <Route path = '/view' element = {<ViewChallanLayout/>}/>
        <Route path = '/challenge' element = {<ChallengeLayout/>}/>
      </Routes>
    
  );
}

export default App;
