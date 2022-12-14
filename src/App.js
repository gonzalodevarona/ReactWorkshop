import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Movie from './views/Movie';
import NotFound from './views/NotFound';


function App() {
  
  
  return (
    <div className="App">

      <Header></Header>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route path="/:id" element={<Movie/> } />
          <Route path="*" element={<NotFound/> } />
          
        </Routes>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
