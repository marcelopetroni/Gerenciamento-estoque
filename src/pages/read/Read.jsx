import React from 'react';
import '../read/Read.sass';
import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import Parse from 'parse';
import { useState, useEffect } from 'react';

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';


const Read = () => {
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const Product = Parse.Object.extend('Product');
        const query = new Parse.Query(Product);
        const results = await query.find();
        const productsData = results.map(product => ({
          id: product.id,
          name: product.get('name'),
          code: product.get('code'),
          description: product.get('description'),
          price: product.get('price')
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="read-container">
      <div className="title-container">
        <Link to='/'>
          <IoCaretBackCircle className='back-button' />
        </Link>
        <h3 className='read-title'>Products Menu</h3>
      </div>

      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;