import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from './pages/Contato/Contato';
import Sobre from './pages/Sobre/Sobre';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro'
import Maracatu from './pages/Conteudo/Maracatu';
import Recomendacao from './pages/Recomendacao/Recomendacao';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivateRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import PainelAluno from './pages/Aluno/Aluno';
import PainelProfessor from './pages/Professor/Professor';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
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
          <Route path="/painel" element={<PainelAluno />} />
          <Route path="/professor" element={<PainelProfessor />} />

        </Routes>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
