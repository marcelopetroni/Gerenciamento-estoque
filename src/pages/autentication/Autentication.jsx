import React, { useEffect, useState } from 'react';
import Parse from 'parse';
import '../autentication/Autentication.sass';

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';

function Authentication({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!username || !password) {
        setError('Por favor, preencha todos os campos.');
        return;
      }
  
      try {
        await onLogin(username, password);
      } catch (error) {
        setError('Usuário ou senha incorretos.');
      }
    };
    return (
      <>
        <header className='header-autentication'>
          <div className="title-authentication">
            <h1>Log-in</h1>
            <p>Acesse aqui o sistema:</p>
          </div>
        </header>
        <main>
          <fieldset>
            <legend>Dados</legend>
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="campo nome">
                <label htmlFor="nome input">User:</label>
                <input
                  type="text"
                  id="nome input"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
  
              <div className="campo email">
                <label htmlFor="email input">Password:</label>
                <input
                  type="password"
                  id="email input"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
  
              <button type="submit" className="submit-container">Enviar</button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </fieldset>
        </main>
      </>
    );
  }
  
  export default Authentication;