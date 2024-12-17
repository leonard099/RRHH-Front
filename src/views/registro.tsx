import { useEffect, useState } from "react";
import cardsRegistro from "../component/CardRegistro";

function registroPresentismo() {
    const [nomina, setData] = useState([{DNI: 0, Nombre: '', Apellido: '', Area: '', Categoria: ''}]);

    useEffect(() => {
      fetch('http://localhost:3000/nomina')
        .then((response) => response.json())
        .then((nomina) => {
          console.log(nomina);
          setData(nomina);
        });
    }, []);
    
    const handlerOnPresente = async (dni: number) => {
        await fetch ('http://localhost:3000/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({DNI: dni, estado: 'presente'}),
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    }
    return (
        cardsRegistro(nomina, handlerOnPresente)
    );
}
export default registroPresentismo;