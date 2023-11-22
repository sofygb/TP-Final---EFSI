import './Home.css'
import Tarea from '../components/Tarea'
import { ThemeProvider } from '../context/ThemeContext'

const Home = () => {
  return (
    
      <div className="App" style={{margin:'0 auto', textAlign: 'center' }}>
        <h1>My App</h1>
        <Tarea />
      </div>
  )
}

export default Home