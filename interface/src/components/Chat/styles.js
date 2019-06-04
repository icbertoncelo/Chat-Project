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
`;

export const Message = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  background: #736d94;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;

  p {
    font-size: 16px;
    color: #fff;
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
