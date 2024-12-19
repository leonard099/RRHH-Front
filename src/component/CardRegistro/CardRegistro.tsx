import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from "react";
import {} from './CardRegistro.css'
interface CardRegistroProps {
    DNI: number;
    Nombre: string;
    Apellido: string;
    Area: string;
    Categoria: string;
}


function CardsRegistro(props: CardRegistroProps[],
    handlerOnPresente: (dni: number) => void,
    handlerOnAusente: (dni: number, razon: string | null, justificado: boolean, event: React.MouseEvent<HTMLButtonElement>) => void): JSX.Element {
    const [razon, setRazon] = useState<string | null>(null);
    const [justificado, setJustificado] = useState(false);

    const handlerOcCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setJustificado(true);
        } else {
            setJustificado(false);
        }
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">DNI</th>
                        <th scope="col">Nombre y apellido</th>
                        <th scope="col">Area</th>
                        <th scope="col "></th>
                    </tr>
                </thead>

                {props.map((item) => (
                    <tbody className='p-0 rounded-0' style={{ overflow: "hidden" }} key={item.DNI}>
                        <tr>
                            <th scope="row">{item.DNI}</th>
                            <td>{item.Apellido}, {item.Nombre}</td>
                            <td>{item.Area}</td>
                            <td>
                                <button className="btn boton botonbotonverde btn-success btn-sm col" onClick={() => handlerOnPresente(item.DNI)}>
                                    Presente
                                </button>
                                <button className="btn boton btn-danger btn-sm col" data-bs-toggle="modal" data-bs-target={`#modal-${item.DNI}`}>
                                    Ausente
                                </button>
                            </td>
                        </tr>

                        <div className="modal p-0 p-0 rounded-2" tabIndex={15} style={{ overflow: "hidden" }} id={`modal-${item.DNI}`}>
                            <div className="modal-dialog p-0 rounded-2" style={{ overflow: "hidden" }}>
                                <div className="modal-content p-0 rounded-2" style={{ overflow: "hidden" }}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">Ausente: {item.Apellido} {item.Nombre}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="disabledSelect" className="form-label">Razon</label>
                                                <select id="disabledSelect" className="form-select" onChange={(e) => setRazon(e.target.value)} >
                                                    <option value={"Maternidad"}>Maternidad</option>
                                                    <option value={"Medico"}>Medico</option>
                                                    <option value={"Vacaciones"}>Vacaciones</option>
                                                    <option value={"Incapacidad"}>Incapacidad</option>
                                                    <option value={"Permiso"}>Permiso</option>
                                                    <option value={"Otro"}>Otro</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" checked={justificado} onChange={handlerOcCheck} />
                                                    <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                                        Justificado
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-danger" onClick={(event) => handlerOnAusente(item.DNI, razon, justificado, event)}>Enviar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody>
                ))}

            </table>

        </div>
    );
}
export default CardsRegistro;