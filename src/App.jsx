import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from './pages/Contato/Contato';
import Sobre from './pages/Sobre/Sobre';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro'
import Maracatu from './pages/Conteudo/Maracatu';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Materiais from './pages/Conteudo/Materiais';
import Referencias from './pages/Conteudo/Referências';
import PrivateRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import PainelProfessor from './pages/Professor/Professor';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/maracatu" element={<Maracatu />} />
          <Route path="quiz" element={<PrivateRoutes />}>
            <Route path="/quiz" element={<Quiz />} />
          </Route>
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/professor" element={<PainelProfessor />} />
          <Route path="/referencias" element={<Referencias/>} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
