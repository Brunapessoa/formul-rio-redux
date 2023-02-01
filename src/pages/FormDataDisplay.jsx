import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      name,
      email,
      cpf,
      address,
      city,
      uf,
      curriculum,
      job,
      description } = this.props;

    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </section>
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
  description: store.professionalReducer.description,
  job: store.professionalReducer.job,
  curriculum: store.professionalReducer.curriculum,
});

FormDataDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
