import { useEffect, useState } from "react";
import {} from './CardRegistro.css'
function cardsRegistro(props:{DNI: number, Nombre: string, Apellido: string, Area: string, Categoria: string}[], handlerOnPresente: (dni: number) => void) {
  return (
    props.map((item) => (
        <div className="card container text-center " key={item.DNI}>
            <div className="fila row">
                <div className="col"> {item.DNI} </div> 
                <div className="col"> {item.Apellido}, {item.Nombre}</div>
                <div className="col"> {item.Area}</div>   
                <div className="contenedorBotones col">
                    <button className="btn boton botonbotonverde btn-success btn-sm col" onClick={() => handlerOnPresente(item.DNI)}>
                         Presente
                    </button>
                    <button className="btn boton btn-danger btn-sm col">
                         Ausente
                    </button>
                </div>
            </div> 
        </div>
             
    )
    ))
}
export default cardsRegistro;