import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { professionalInfo } from '../redux/actions';

class ProfessionalForm extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     curriculum: '',
  //     job: '',
  //     description: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // } não estamos mais usando.

  handleChange({ target }) {
    const { name, value } = target;
    const { dispatch } = this.props;
    dispatch(professionalInfo(name, value));
  }

  render() {
    const { curriculum, job, description } = this.props;
    return (
      <form
        onSubmit={ () => console.log('Envia as informações para a store') }
      >
        <h1 className="title">Informações Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ (e) => this.handleChange(e) }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ (e) => this.handleChange(e) }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ (e) => this.handleChange(e) }
          value={ description }
          required
        />
        <Link to="/formdisplay">
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
  description: store.professionalReducer.description,
  job: store.professionalReducer.job,
  curriculum: store.professionalReducer.curriculum,
});

ProfessionalForm.propTypes = {
  description: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ProfessionalForm);
