import styled from 'styled-components';

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

    img {
      height: 80px;
      width: 80px;

      &:hover {
        opacity: 0.9;
      }
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
    button {
      width: 100%;
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

    a {
      margin-top: 10px;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      font-size: 16px;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
