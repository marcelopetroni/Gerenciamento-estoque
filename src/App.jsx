import Header from './components/page structure/Header'; 
import MainContent from './components/page structure/MainContent'; 
import Footer from './components/page structure/Footer'; 
import Autentication from './pages/autentication/Autentication'; 
import Parse from 'parse'; 
import React, { useEffect, useState } from 'react';

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      await Parse.User.logIn(String(username), String(password));
      setIsAuthenticated(true);
    } catch (error) {
      alert('Erro ao fazer login: Usuário ou Senha não válidos');
    }
  };
   const handleLogout = () => {
    Parse.User.logOut().then(() => {
      setIsAuthenticated(false); 
    });
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header onLogOut={handleLogout}/>
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
	