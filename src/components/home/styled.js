import styled from 'styled-components';

export const WarningContainer = styled.div`
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 10%;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    max-width: 200px;
    width: auto;
    height: auto;
    border-radius: 30%;
  }
`;

export const IntroTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkContainer = styled.div`
  padding: 1rem 0;
`;
