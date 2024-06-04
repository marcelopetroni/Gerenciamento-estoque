import React from 'react';
import { useState, useEffect } from 'react';
import '../create/Create.sass';
import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";

const Create = () => {
  const [values, setValues] = useState({});// as chaves para representar um objeto

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.code || !values.description || !values.price) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    try {
      // Aqui será inserido a função de criação/ envio de dados

      // Limpa os campos
      setValues({
        name: '',
        code: '',
        description: '',
        price: ''
      });
      alert('Envio com sucesso.');

    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };
  return (
    <div className="create-container">
      <div className="title-container">
        <Link to = '/' > <IoCaretBackCircle className='back-button'/> </Link>
        <h3 className='create-title'>Products Menu</h3>
      </div>

      <div className="fields">

        <form onSubmit={handleSubmit}>
          <div className='create-field'>
            <label className="field-description">Product name:</label>
            <input className = "field" type="text" 
            required
            name='name'
            onChange={handleValues}
            value={values.name}
            />
          </div>

          <div className='create-field'>
            <label className="field-description">Product code:</label>
            <input className = "field" type="text" 
            required
            name='code'
            onChange={handleValues}
            value={values.code}
            />
          </div>

          <div className='create-field'>
            <label className="field-description">Product description:</label>
            <input className = "field" type="text"
            required
            name='description'
            onChange={handleValues}
            value={values.description}
            />
          </div>

          <div className='create-field'>
            <label className="field-description">Product price:</label>
            <input className = "field" type="text"
            required
            name='price'
            onChange={handleValues}
            value={values.price}
            />
            
          </div>

          <button type="submit" // ao utilizar type ="submit" no botão, o formulário é enviado com enter
                className="button" 
                onClick={handleSubmit}> 
              <span className="lable">Enviar</span>
          </button>
        </form>
      </div>

    </div>
  )
}

export default Create