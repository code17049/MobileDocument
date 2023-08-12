import React, { useEffect, useReducer, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes'
import { Usuario, reqResUsuarios } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {  
 const {usuarios, paginaSig, paginaAnt } = useUsuarios();

  const renderItem = ({id, email, first_name, last_name}: Usuario) => {
    return(
     <tr key={id}>   
         <td>{first_name}</td>
         <td>{last_name}</td>
         <td>{email}</td>
     </tr>
    )
   }

  return (
    <>  
          <table className="table">
      <thead>
        <tr>
          
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(renderItem)}
      </tbody>
    </table>
    <button type="button" className="btn btn-outline-primary" onClick={paginaSig}>Siguiente</button>
    <button type="button" className="btn btn-outline-primary" onClick={paginaAnt}>Anterior</button>
   
    </>
  )
}
