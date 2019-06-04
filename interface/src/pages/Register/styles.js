import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 35px;
    }

    input {
      width: 100%;
      height: 48px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      padding: 0 20px;
      margin-top: 10px;

      &:hover {
        border: 1px solid #251f47;
      }
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    height: 48px;
    background: #251f47;
    border-radius: 4px;
    font-size: 16px;
    padding: 0 20px;
    margin-top: 10px;
    color: #fff;
    font-weight: bold;
    border: 0;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Back = styled(Link)`
  width: 48%;
  height: 48px;
  background: #251f47;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 20px;
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  border: 0;

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;
