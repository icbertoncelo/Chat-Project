import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '~/store/ducks/login';

import { Container } from './styles';

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { loginRequest } = this.props;
    const data = {
      username,
      password,
    };

    loginRequest(data);
  };

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          <img src="https://zero1.sg/img/accountlogin-icon.png" alt="Login" />
          <input
            placeholder="username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Acessar</button>
          <Link to="/register">Cadastrar</Link>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
