import React from 'react';
import '../delete/Delete.sass';
import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import Parse from 'parse'; 
import { useState, useEffect } from 'react';

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';


const Delete = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
      setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!code) {
          alert('Por favor, preencha o código do item a ser deletado.');
          return;
      }

      try {
          const Product = Parse.Object.extend('Product');
          const query = new Parse.Query(Product);
          query.equalTo('code', code);
          const product = await query.first();

          if (!product) {
              alert('Nenhum produto encontrado com o código fornecido.');
              return;
          }

          // Exclui o produto
          await product.destroy();

          // Limpa o campo de codigo depos de excluir
          setCode('');

          alert('Produto excluído com sucesso.');
      } catch (error) {
          console.error('Erro ao excluir produto:', error);
          alert('Erro ao excluir produto. Por favor, tente novamente.');
      }
  };

  return (
      <div className="delete-container">
          <div className="title-container">
              <Link to='/'>
                  <IoCaretBackCircle className='back-button' />
              </Link>
              <h3 className='delete-title'>Products Menu</h3>
          </div>

          <form onSubmit={handleSubmit}>
              <div className='delete-field'>
                  <label className="field-description">Insert product code:</label>
                  <input
                      className="field"
                      type="text"
                      required
                      value={code}
                      onChange={handleChange}
                  />
              </div>

              <button
                  type="submit"
                  className="button"
              >
                  <span className="label">Enviar</span>
              </button>
          </form>
      </div>
  );
}

export default Delete;