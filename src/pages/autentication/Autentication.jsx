import React from 'react'
import '../autentication/Autentication.sass';

function Autentication({ onLogin }) {

    const handleSubmit = (event) => {
      event.preventDefault();
      // Esse onLogin vai ser chamado para quando a autenticação for feita com sucesso (checar valores no banco)
      onLogin();
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