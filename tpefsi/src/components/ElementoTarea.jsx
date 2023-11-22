import React from "react";

const ElementoTarea = (props) => {
    return (
            <div class="tarea">
                <p>Texto: <span>{props.nombre}</span></p>
            </div>
    )
}

export default ElementoTarea;