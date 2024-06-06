import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import '../register/Register.sass';
import Parse from 'parse'; 
import { useState } from 'react';

Parse.initialize('ribBIuffH5NpAtm2U8kw3IUZuhtYEePn494gVNpW', 'Hmm4p1Bp6NaKzl0hgnENaCivbgMtgVm2oPt3H8uE');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Register = ({ currentUser }) => {
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

    if (!values.name || !values.id || !values.position || !values.username || !values.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const user = new Parse.User();
      user.set('username', values.username.toString());
      user.set('password', values.password.toString());
      user.set('name', values.name);
      user.set('employeeId', values.id);
      user.set('position', values.position);
      user.set('visualizarPassword', values.password); 


      await user.signUp();

      // Limpar os campos
      setValues({
        name: '',
        id: '',
        position: '',
        username: '',
        password: ''
      });

      alert('Funcionário adicionado com sucesso.');
    } catch (error) {
      console.error('Erro ao adicionar funcionário:', error);
      alert('Erro ao adicionar funcionário. Por favor, tente novamente.');
    }
  };


  return (
    <div className="register-container">
      <div className="title-container">
        <Link to='/'>
          <IoCaretBackCircle className='back-button' />
        </Link>
        <h3 className='register-title'>Cadastrar Funcionário</h3>
      </div>

      <div className="fields">
        <form onSubmit={handleSubmit}>
          <div className='register-field'>
            <label className="field-description">Nome do Funcionário:</label>
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
            <label className="field-description">Funcionário ID:</label>
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
            <label className="field-description">Funcionário Posição:</label>
            <input
              className="field"
              type="text"
              required
              name='position'
              onChange={handleValues}
              value={values.position || ''}
            />
          </div>

          <div className='register-field'>
            <label className="field-description">Username:</label>
            <input
              className="field"
              type="text"
              required
              name='username'
              onChange={handleValues}
              value={values.username || ''}
            />
          </div>

          <div className='register-field'>
            <label className="field-description">Password:</label>
            <input
              className="field"
              type="password"
              required
              name='password'
              onChange={handleValues}
              value={values.password || ''}
            />
          </div>

          <button
            type="submit"
            className="button"
          >
            <span className="label">Cadastrar</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
