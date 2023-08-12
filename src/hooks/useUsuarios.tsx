import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { Usuario, reqResUsuarios } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setusUarios] = useState<Usuario[]>([])
    // NOTA: useRef no dispara el recargar la pagina
    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
       }, []);

       const cargarUsuarios = async() => {
        const respuesta = await reqResApi.get<reqResUsuarios>('/users',{
          params: {
            page: paginaRef.current
          }
        })

        if(respuesta.data.data.length > 0){
            setusUarios(respuesta.data.data);
          }else{
            paginaRef.current --;
            alert("No hay datos");
          }
        
      }

      const paginaSig = () => {
        paginaRef.current ++;
        cargarUsuarios();
      }

      const paginaAnt = () => {
        if(paginaRef.current > 1){
            paginaRef.current --;
        }else{
            alert("No hay pagina anterior")
        }
        cargarUsuarios();
      }


      return {usuarios, paginaSig, paginaAnt}
}