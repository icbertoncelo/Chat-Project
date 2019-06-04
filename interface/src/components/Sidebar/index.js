import React from 'react';

import { Container, User } from './styles';

const UserList = () => (
  <Container>
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

export default UserList;
