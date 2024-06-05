import { useState } from 'react';
import Header from './components/page structure/Header'; 
import MainContent from './components/page structure/MainContent'; 
import Footer from './components/page structure/Footer'; 
import Autentication from './pages/autentication/Autentication'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
          <MainContent />
          <Footer />
        </>
      ) : (
        <Autentication onLogin={handleLogin} /> 
        /* o onLogin vai ser acionado quando a autentição tiver sucesso no arquivo Autentication, 
        ele muda o estado de autenticação para true e reenderiza a página inicial invés dessa */
      )}
    </>
  );
}

export default App;
