import React from 'react'
import { TiposB } from './typescript/TiposB';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';
import { ContadorHook } from './components/ContadorHook';
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';
import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a React</h1>
      <hr/>
      {/* <TiposB/>
      <ObjetosLiterales/>
      <Funciones/>
      <Contador/>
      <ContadorHook/> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
      
      
    </div>
  )
}

export default App;