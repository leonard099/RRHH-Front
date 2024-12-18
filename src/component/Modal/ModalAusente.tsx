import {} from "./ModalAusente.css"
function ModalAusente() {
    return (
        <div className="modalFondo">
            <div className="modalAusentismo">
                <form className="formulario">
                    <label> Razon </label>
                    <select name="Razon" id="Razon">
                        <option value="Maternidad">Maternidad</option>
                        <option value="Medico">Medico</option>
                        <option value="Vacaciones">Vacaciones</option>
                        <option value="Incapacidad">Incapacidad</option>
                        <option value="Permiso">Permiso</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <label> Justificado </label>
                    <select name="Justificado" id="Justificado">
                        <option value="true">Si</option>
                        <option value="False">No</option>
                    </select>
                    <button className="botonAusente" >Enviar</button>
                </form>
        </div>
        </div>
    )
}
export default ModalAusente