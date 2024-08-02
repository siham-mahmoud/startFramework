import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayOut from './components/LayOut/LayOut'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';



function App() {
  const [count, setCount] = useState(0)
    let x= createBrowserRouter([
      {path:"", element:<LayOut/>,children:[
        { index:true ,element:<Home/>},
        { path:"/about" ,element:<About/>},
        { path:"/contact" ,element:<Contact/>},
        { path:"/portfolio" ,element:<Portfolio/>}

      ]
      },
      
     ])
  return (
    <RouterProvider router={x}>
      
     
    </RouterProvider>
  )
}

export default App
