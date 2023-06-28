import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import Homepage from './pages/HomePage.js'

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store = {store}>
    <Router>
      <div className='container '>
        
      <HeaderNav />
    
      <Routes>
      
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  </Provider>
  )
}

export default App;