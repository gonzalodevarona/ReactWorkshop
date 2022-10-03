import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import NotFound from './views/NotFound';


function App() {
  
  
  return (
    <div className="App">

      <Header></Header>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route path="/:id" element={<Home/> } />
          <Route path="*" element={<NotFound/> } />
          
        </Routes>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
