import React, { useState } from 'react';
import '../update/Update.sass';
import '../create/Create.sass';
import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import Parse from 'parse'; 

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Update = () => {
  const [productCode, setProductCode] = useState(''); 
  const [values, setValues] = useState({}); 
  const [productFound, setProductFound] = useState(false); 

  const handleCode = async (e) => {
    e.preventDefault();

    if (!productCode) {
      alert('Por favor, preencha o código do item a ser atualizado.');
      return;
    }

    try {
      const Product = Parse.Object.extend('Product');
      const query = new Parse.Query(Product);
      query.equalTo('code', productCode);
      const product = await query.first();

      if (product) {
        setValues({
          name: product.get('name'),
          code: product.get('code'),
          description: product.get('description'),
          price: product.get('price'),
        });
        setProductFound(true);
      } else {
        alert('Nenhum produto encontrado com o código fornecido.');
        setProductFound(false);
      }
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      alert('Erro ao buscar produto. Por favor, tente novamente.');
    }
  };

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.code || !values.description || !values.price) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const Product = Parse.Object.extend('Product');
      const query = new Parse.Query(Product);
      query.equalTo('code', productCode);
      const product = await query.first();

      if (!product) {
        alert('Nenhum produto encontrado com o código fornecido.');
        return;
      }

      product.set('name', values.name);
      product.set('code', values.code);
      product.set('description', values.description);
      product.set('price', parseFloat(values.price));

      await product.save();

      // Limpa os valores após a atualização bem-sucedida
      setValues({});
      alert('Produto atualizado com sucesso.');
      setProductFound(false);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao atualizar produto. Por favor, tente novamente.');
    }
  };

  return (
    <div className="update-container">
      <div className="title-container">
        <Link to='/'>
          <IoCaretBackCircle className='back-button' />
        </Link>
        <h3 className='update-title'>Products Menu</h3>
      </div>

      <form onSubmit={handleCode}>
        <div className='update-field'>
          <label className="field-description">Insert product code:</label>
          <input
            className="field"
            type="text"
            required
            name='code'
            onChange={(e) => setProductCode(e.target.value)}
            value={productCode}
          />
        </div>

        <button type="submit" className="button">
          <span className="label">Enviar</span>
        </button>
      </form>

      {productFound && (
        <div className="create-container">
          <div className="fields">
            <form onSubmit={handleSubmit}>
              <div className='create-field'>
                <label className="field-description">Product name:</label>
                <input
                  className="field"
                  type="text"
                  required
                  name='name'
                  onChange={handleValues}
                  value={values.name || ''}
                />
              </div>

              <div className='create-field'>
                <label className="field-description">Product code:</label>
                <input
                  className="field"
                  type="text"
                  required
                  name='code'
                  onChange={handleValues}
                  value={values.code || ''}
                />
              </div>

              <div className='create-field'>
                <label className="field-description">Product description:</label>
                <input
                  className="field"
                  type="text"
                  required
                  name='description'
                  onChange={handleValues}
                  value={values.description || ''}
                />
              </div>

              <div className='create-field'>
                <label className="field-description">Product price:</label>
                <input
                  className="field"
                  type="text"
                  required
                  name='price'
                  onChange={handleValues}
                  value={values.price || ''}
                />
              </div>

              <button type="submit" className="button">
                <span className="label">Enviar</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;
