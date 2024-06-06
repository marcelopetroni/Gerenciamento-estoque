import React, { useEffect, useState } from 'react';
import Parse from 'parse';
import '../autentication/Autentication.sass';

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';


 function Autentication({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
     // Esse onLogin vai ser chamado para quando a autenticação for feita com sucesso (checar valores no banco)
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await Parse.User.logIn(username, password);
            onLogin(user);
        } catch (error) {
            setError('Usuário ou senha incorretos');
        }
    };

  return ( 
  <>
    <header className='title-autentication'>
        <div class="title-container">
            <h1>Log-in</h1>
        </div>
            <p>Acesse aqui o sistema:</p>
    </header>
    <main>
        <fieldset>
            <legend>Dados</legend>
            <form action="" class = "form-container" onSubmit={handleSubmit}>
                <div class="campo nome">
                    <label for="nome input">User:</label>
                    <input type="text" id = "nome input" required></input>
                </div>
        
                <div class="campo email">
                    <label for="email input">Password:</label>
                    <input type="password" id = "email input" required></input>
                </div>

                <button type="submit" class="submit-container">Enviar</button>
            </form>
        </fieldset>
    </main>
  </>
  )
}

export default Autentication