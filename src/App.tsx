import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Home from './Pages/Home'
import Store from './Pages/Store'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import { ShoppingCartProvider } from './context/ShopingCartContext'
import StoreDetail from './Pages/StoreDetail'
import CheckOut from './Pages/CheckOut'

function App() {

  return (
    <ShoppingCartProvider>
      {/* <Container className='mb-4'> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/storedetail/:ids" element={<StoreDetail/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
      {/* </Container> */}
    </ShoppingCartProvider>
  )
}

export default App
