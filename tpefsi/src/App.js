import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './views/Home.jsx'
import Instrucciones from './views/Instrucciones.jsx'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='instrucciones' element={<Instrucciones />} />
            </Route>
        </Routes>
    </BrowserRouter>
</ThemeProvider>
  );
}

export default App;
