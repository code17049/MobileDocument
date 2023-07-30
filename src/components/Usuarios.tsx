import React, { useEffect } from 'react'
import { reqResApi } from '../api/reqRes'

export const Usuarios = () => {
    useEffect(() => {
      reqResApi.get('/users')
        .then( resp => {
            console.log(resp.data.data)
        })
    }, [])
    
  return (
    <div>Usuarios</div>
  )
}
