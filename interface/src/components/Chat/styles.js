import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  left: 23%;
  top: 3%;
  height: 94%;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatScreen = styled.div`
  width: 100%;
  height: 85%;
  background: transparent;
  border-radius: 5px;
  overflow: auto;
  padding: 10px;
`;

export const Message = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  white-space: pre-wrap;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 15px;
  }

  div {
    div {
      strong {
        color: #251f47;
        margin-right: 5px;
      }

      span {
        color: #666;
        font-size: 10px;
      }
    }

    p {
      font-size: 16px;
      color: #666;
      margin-top: 10px;
    }
  }
`;

export const TextArea = styled.div`
  width: 100%;
  height: 15%;
  background: transparent;
  border-radius: 5px;
  display: flex;

  textarea {
    width: 95%;
    height: 100%;
    padding: 10px;
    background: #fff;
    resize: none;
    border: 0;
  }

  button {
    background: #251f47;
    border-radius: 4px;
    color: #fff;
    margin-left: 10px;
    padding: 20px 5px;
    font-weight: bold;
    border: 0;

    &:hover {
      opacity: 0.7;
    }
  }
`;
