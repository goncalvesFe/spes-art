import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultPage  from './DefaultPage' // excluir isso depois

function SpesArtRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/default' element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default SpesArtRoutes
