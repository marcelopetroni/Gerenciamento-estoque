import React from 'react'
import '../styles/Table.sass';
import { useState, useEffect } from 'react';

const Table = () => {
  const [doneLoading, setDoneLoading] = useState(false);
  

  // Estado para armazenar dados 
  const [products, setProducts] = useState([]);

    // Função para coletar dados
    const displayProducts = async () => {
      try {
        // Lógica para obter a lista de produtos aqui
       
        setProducts(/* os dados eu irei botar aqui */);
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