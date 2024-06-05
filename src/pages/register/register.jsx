import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import * as Firebase from '../../services/CrudFirebase';
import '../register/register.sass';

const Register = () => {
  const [values, setValues] = useState({});

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados de registro
    console.log('Valores enviados:', values);
    // Limpar os campos após o envio
    setValues({});
  };

  return (
    <div className="register-container">
      <div className="title-container">
        <Link to='/'>
          <IoCaretBackCircle className='back-button' />
        </Link>
        <h3 className='register-title'>Register Employee</h3>
      </div>

      <div className="fields">
        <form onSubmit={handleSubmit}>
          <div className='register-field'>
            <label className="field-description">Employee Name:</label>
            <input
              className="field"
              type="text"
              required
              name='name'
              onChange={handleValues}
              value={values.name || ''}
            />
          </div>

          <div className='register-field'>
            <label className="field-description">Employee ID:</label>
            <input
              className="field"
              type="text"
              required
              name='id'
              onChange={handleValues}
              value={values.id || ''}
            />
          </div>

          <div className='register-field'>
            <label className="field-description">Employee Position:</label>
            <input
              className="field"
              type="text"
              required
              name='position'
              onChange={handleValues}
              value={values.position || ''}
            />
          </div>

          <button
            type="submit"
            className="button"
          >
            <span className="label">Register</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
