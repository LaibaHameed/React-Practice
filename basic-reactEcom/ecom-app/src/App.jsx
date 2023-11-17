import './App.css'
import { Outlet } from 'react-router-dom'
import WebHeader from './Components/WebHeader';
import { ProductProvider } from './Contexts/ProductContext';


function App() {

  return (
    <>
    <ProductProvider>
    <WebHeader/>
    <Outlet/>
    </ProductProvider>
    </>
  )
}

export default App
