import './App.css';
import { Routes,Route } from 'react-router-dom';
import SearchLayout from './components/SearchLayout/SearchLayout';

function App() {
  return (
    
      <Routes>
        <Route path = '/' element = {<SearchLayout/>}/>
      </Routes>
    
  );
}

export default App;
