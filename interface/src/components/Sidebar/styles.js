import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 94%;
  border-radius: 5px;
  overflow: auto;
`;

export const User = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width: 65%;
    strong {
      font-size: 16px;
      color: #666666;
    }
    span {
      font-size: 14px;
      color: #999999;
      margin-top: 5px;
    }
  }
`;
