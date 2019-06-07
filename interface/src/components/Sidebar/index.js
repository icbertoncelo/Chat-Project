import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { Container, User } from './styles';

const UserList = ({ logOut }) => (
  <Container>
    <button type="button" onClick={logOut}>
      Sair
    </button>
    <ul>
      <li>
        <User>
          <img src="http://clipart-library.com/img/1745489.png" alt="user" />
          <div>
            <strong>username</strong>
            <span>email</span>
          </div>
        </User>
      </li>
    </ul>
  </Container>
);

UserList.propTypes = {
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(UserList);
