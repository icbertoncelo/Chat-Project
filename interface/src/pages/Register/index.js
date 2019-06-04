import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RegisterActions } from '../../store/ducks/register';

import { Container, Actions, Back } from './styles';

class Register extends Component {
  static propTypes = {
    registerRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const { registerRequest } = this.props;
    const data = {
      username,
      email,
      password,
    };

    registerRequest(data);
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          <h1>Cadastro</h1>
          <input
            placeholder="username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Actions>
            <Back to="/">Voltar</Back>
            <button type="submit">Salvar</button>
          </Actions>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  register: state.register,
});

const mapDispatchToProps = dispatch => bindActionCreators(RegisterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
