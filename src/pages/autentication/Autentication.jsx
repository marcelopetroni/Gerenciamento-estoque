import React from 'react'
import '../autentication/Autentication.sass';

const Autentication = () => {
  return ( 
  <>
    <header>
        <div class="title-container">
            <h1>Log-in</h1>
        </div>
            <p>Acesse aqui o sistema:</p>
    </header>
    <main>
        <fieldset>
            <legend>Dados</legend>
            <form action="" class = "form-container">
                <div class="campo nome">
                    <label for="nome input">User:</label>
                    <input type="text" id = "nome input"></input>
                </div>
        
                <div class="campo email">
                    <label for="email input">Password:</label>
                    <input type="password" id = "email input"></input>
                </div>

                <input type="submit" value="Enviar" class="submit-container"></input>
            </form>
        </fieldset>
    </main>
  </>
  )
}

export default Autentication