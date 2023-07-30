import React from 'react'

export const TiposB = () => {
    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo:boolean = true;
    const poderes: (string|number)[] = ['volar', 'morder']; // 'Velocidad','Volar','Respirar en el agua'
    const poderes2: string[] = ['volar1', 'morder2']; // 'Velocidad','Volar','Respirar en el agua'
    
    return (
        
        <>
            <h3>Tipos Basicos</h3>
            { nombre }, {edad}, { (estaActivo) ? 'Activo' : 'Inactivo' }
            <br/>
            {poderes.join(', ')}
            <br/>
            {poderes2.join(', ')}
        </>
  )
}
