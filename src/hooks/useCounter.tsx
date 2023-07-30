import React, { useState } from 'react'

export const useCounter = (inicio: number = 0) => {
    const [valor, setValor] = useState(inicio);
    const acumular = (numero:number) => {
        setValor(valor + numero);
    }

    return {valor, acumular}
}
