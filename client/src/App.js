import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import HeaderNav from './components/HeaderNav';

import Homepage from './pages/HomePage.js';
import UsersPage from './pages/UsersPage.js';
import UserPage from './pages/UserPage.js';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store = {store}>
    <Router>
      <div className='container '>
        
      <HeaderNav />
    
      <Routes>
      <Route path='/users/:id' element={<UserPage />} />  
      <Route path='/users' element={<UsersPage />} />
      
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/' element={<LandingPage />} />
      </Routes>
      
    </div>
  </Router>
  </Provider>
  )
}

export default App;