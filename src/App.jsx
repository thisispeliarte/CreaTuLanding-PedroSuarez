import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemList from './componentes/ItemList/ItemList'

function App() {
const [user, setUser]= useState("Peli")

const handlClick=()=>{
  setUser("Manuel")
}
  return (
    <>
   <NavBar/>

   <section className='heroSection'>

    <h1 className='heroTittle'>
      Cynaborgs Shop
    </h1>
   </section>

   <ItemList/>
   <section></section>

  
    </>
  )

  
}

export default App
