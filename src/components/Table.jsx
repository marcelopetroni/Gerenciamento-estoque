import React from 'react'
import '../styles/Table.sass';
import { useState, useEffect } from 'react';
import Parse from 'parse'; 

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';


const Table = () => {
  const [doneLoading, setDoneLoading] = useState(false);
  
  // Estado para armazenar dados 
  const [products, setProducts] = useState([]);

    // Função para coletar dados
    const displayProducts = async () => {
      try {
        const Product = Parse.Object.extend('Product');
        const query = new Parse.Query(Product);
        const results = await query.find();
        const productsData = results.map(product => ({
          id: product.id,
          code: product.get('code'),
          name: product.get('name'),
          description: product.get('description'),
          price: product.get('price')
        }));
        setProducts(productsData);
        setDoneLoading(true);
      } catch (error) {
        console.error('Erro ao exibir produtos:', error);
      }
    };
  
    useEffect(() => {
      // Chame a função 
      displayProducts();
    }, []);

  return (
    <table>
      { doneLoading ? 
      (<thead>
        <tr className='table-options'>
          <td>Code</td>
          <td>Name</td>
          <td>Description</td>
          <td>Price</td>
        </tr>
      </thead>)
      : null}
      <tbody>
      {products?.map((product, index) => ( // a interrogação garante que não é exibido se 'itens' for undefined
        <tr key = {index}>
          <td>
            <div className="td-content">{product.code}</div>
          </td>
          <td>
            <div className="td-content">{product.name}</div>
          </td>
          <td>
            <div className='td-content'>{product.description}</div>
          </td>
          <td>
            <div className="td-content">{product.price}</div>
            </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table;