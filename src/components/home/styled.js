import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const TitleContainer = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    background-size: 350%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0rem 2rem;
    color: ${(props) => props.theme.color_primary};
  }
`;

export const TitleText = styled.h1`
  @media only screen and (max-width: 600px) {
    text-transform: uppercase;
    text-align: center;
    font-size: 2em;
  }
`;
