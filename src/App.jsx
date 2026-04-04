import { Route, Routes } from 'react-router-dom'
import SolicitudCredito from './componentes/solicitar_credito/SolicitudCredito'
import LandingPage from './componentes/landingpage/LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solicitar-credito" element={<SolicitudCredito />} />
      </Routes>
    </>
  )
}

export default App
