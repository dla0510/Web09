import styled from 'styled-components';

const SendMessageContainer = styled.div`
  width: calc(90% - 2rem);
  height: 2rem;
  background-color: ${(props) => props.theme.palette.main};
  border-radius: 2.5rem;
  padding: 1rem;

  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MessageFormWrap = styled.div`
  width: calc(85% - 1.5rem);
  height: 2.5rem;
  background-color: ${(props) => props.theme.palette.inner};
  border-radius: 1.25rem;
  padding: 0px 0.75rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    width: 80%;
    background-color: transparent;
    border: none;

    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    &::placeholder {
      color: #9b9b9b;
    }
  }
`;

const SendBtn = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  background-color: transparent;
  border: none;
  padding: 0px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export { SendMessageContainer, MessageFormWrap, SendBtn };
