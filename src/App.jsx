import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from './pages/Contato/Contato';
import Sobre from './pages/Sobre/Sobre';
import Login from './pages/Login/Login';
import Maracatu from './pages/Conteudo/Maracatu';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { QuizContext } from './contexts/QuizContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/maracatu" element={<Maracatu />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
