import { useEffect, useState } from "react";
import CardsRegistro from "../component/CardRegistro/CardRegistro";
function registroPresentismo() {
    const [nomina, setData] = useState([{DNI: 0, Nombre: '', Apellido: '', Area: '', Categoria: ''}]);
    
    useEffect(() => {
      fetch('http://localhost:3000/nomina')
        .then((response) => response.json())
        .then((nomina) => {
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
        })
        .catch(() => {
            alert('Error al registrar la asistencia');
        })
    }
    const handlerOnAusente = async (dni: number, razon:string|null, justificado:boolean, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(dni, razon, justificado);
        if (razon === null) {
            alert('Debe seleccionar una razon');
            return;
        }
        await fetch ('http://localhost:3000/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({DNI: dni, estado: 'ausente', razon: razon, justificado: justificado}),
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch(() => {
            alert('Error al registrar la asistencia');
        })
    }
    return (
        <>
            {CardsRegistro(nomina, handlerOnPresente, handlerOnAusente)}
        </>
    );
}
export default registroPresentismo;