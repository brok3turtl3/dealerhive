import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='container '>
      <HeaderNav />
    
      <LandingPage />
      <Footer />
    </div>
  </Router>);
}

export default App;
