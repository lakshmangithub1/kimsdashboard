import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Main from './components/Main';
import PrintDocument from './components/PrintDocument/index'
import './App.css';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<Main/>}/>
      <Route exact path = "/document" element = {<PrintDocument/>}/>
    </Routes>
  </BrowserRouter>
)

  
export default App;
