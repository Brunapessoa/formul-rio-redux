import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { personalInfo } from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class PersonalForm extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     name: '',
  //     email: '',
  //     cpf: '',
  //     address: '',
  //     city: '',
  //     uf: '',
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // } esta parte não está fazendo nada. Não está mais usando.

  // handleChange(e) {
  //   console.log(e);
  //   const { name, value } = e.target; // o name refere-se ầ chave de cada item. Ex name:email, name: cpf...
  //   console.log(e.target);
  //   const { dispatch } = this.props;
  //   dispatch(personalInfo(name, value));
  // }

  handleChange({ target }) {
    const { name, value } = target;
    const { dispatch } = this.props;
    dispatch(personalInfo(name, value));
  }

  render() {
    const { name, email, cpf, address, city, uf } = this.props;

    return (
      <form
        onSubmit={ () => console.log('Ao clicar, envie a informação do formulário') }
      >
        <h1 className="title">Informações Pessoais</h1>
        <Input
          label="Nome: "
          type="text"
          onChange={ (e) => this.handleChange(e) }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ (e) => this.handleChange(e) }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ (e) => this.handleChange(e) }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ (e) => this.handleChange(e) }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ (e) => this.handleChange(e) }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ (e) => this.handleChange(e) }
          value={ uf }
          label="Estado: "
          name="uf"
          options={ UF_LIST }
        />
        <Link to="/professionalform">
          <Button
            type="submit"
            label="Enviar"
            moreClasses="is-fullwidth is-info"
          />
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (store) => ({
  name: store.personalReducer.name,
  email: store.personalReducer.email,
  cpf: store.personalReducer.cpf,
  address: store.personalReducer.address,
  city: store.personalReducer.city,
  uf: store.personalReducer.uf,
});

PersonalForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PersonalForm);
