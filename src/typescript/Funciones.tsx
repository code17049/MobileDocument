import React from 'react'

export const Funciones = () => {

    const sumar = (a: number, b: number):number => {
        return a + b;
    }
    const restar = (a: number, b: number) => {
        return a - b;
    }
    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(1, 3)} </span>
            <br></br>
            <span>El resultado es: {restar(2, 2)} </span>
        </>
    )
}
