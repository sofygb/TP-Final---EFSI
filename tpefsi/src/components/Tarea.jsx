import React from "react";
import { useContext } from 'react'
import { useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext'

function Tarea({ children }) {
    const {theme, setTheme} = useContext(ThemeContext)

    const [listaTareas, setListaTareas] = useState([])
    const [contador, setContador] = useState(0)
    const inputRef = useRef()
    var contadorIds = 0

   /* const agregarALista = (id,elemento,fechacreacion,fechaTachado) => {
        let objeto = {
            id: id,
            elemento: elemento,
            fechacreacion: fechacreacion,
            fechaTachado: fechaTachado, //la fecha de tachado de su child <input>
        }
        listaElementos.push(objeto)
    } */

    /*
    const modififcarObjetoLista = (id,elemento,fechacreacion,fechaTachado) => {
    let idObjeto = id

    let objeto = {
        id: parseInt(id),
        elemento: elemento,
        fechacreacion: fechacreacion,
        fechaTachado: fechaTachado,
    }
    listaElementos.forEach(objetos => {
        if(objetos.id === parseInt(idObjeto)){ //id.slice(2,3) corta desde el segundo caracter hasta el tercero. por ejemplo de "li4" guarda "4"
            objetos = objeto
            listaElementos[id] = objetos
        }
    })
    */

    useEffect(() => {
        document.title = contador
    }, [contador])

    useEffect(() => {
        setContador(listaTareas.length)
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas))
    }, [listaTareas])

    const handleClick = () => {

        let nuevaTarea = inputRef.current.value
        setListaTareas([...listaTareas, nuevaTarea])
    }


    return (
        <article>
            <h2>La lista tiene {contador} elementos</h2>
            <h4>Context: {theme}</h4>
            <input type="text" ref={inputRef} />
            {children}
            <button onClick={handleClick}>Button</button>
            <div className='tareas'>
                {
                    listaTareas.map((texto, index) => (
                        <input type='checkbox' key={index} className='tarea'>{texto}</input>
                    ))
                }
            </div>
        </article>
    )
}

export default Tarea