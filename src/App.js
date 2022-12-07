import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
