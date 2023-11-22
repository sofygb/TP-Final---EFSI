import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import { ThemeContext } from '../context/ThemeContext'

function Layout() {
    const { layout, setLayout } = useContext(ThemeContext)

    const cambiarFondo = () => {
      let nuevoFondo = 'blue'
      if (layout === 'blue') nuevoFondo = 'white'
      setLayout(nuevoFondo)
    }
    return (
      <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/instrucciones'>Instrucciones</Link>
        </nav>
        <Outlet />
        <footer>
          Footer
          <button onClick={cambiarFondo}>Cambiar fondo</button>
        </footer>
      </>
    )
  }
  
  export default Layout