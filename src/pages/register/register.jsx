import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import '../register/Register.sass';
import Parse from 'parse'; 
import { useState, useEffect } from 'react';

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';



const Register = () => {
  const [values, setValues] = useState({});

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Cria um novo objeto 'Employee' no Back4App
      const Employee = new Parse.Object('Employee');
      // Define os valores do objeto
      Employee.set('name', values.name);
      Employee.set('id', values.id);
      Employee.set('position', values.position);
      // Salva o objeto no Back4App
      await Employee.save();

      // Limpa os campos após o envio bem-sucedido
      setValues({});
      alert('Registro de funcionário realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar funcionário:', error);
      alert('Erro ao registrar funcionário. Por favor, tente novamente.');
    }
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