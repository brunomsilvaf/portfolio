import { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`

body {
  background-color: ${(props) => props.theme.color_background};
  font-family: ${(props) => props.theme.font_body};
  font-size: ${(props) => props.theme.font_size};
  color: ${(props) => props.theme.color_secondary};
  text-align: justify;
  @media only screen and (max-width: 600px) {
    font-size: ${(props) => props.theme.font_size_mobile}
  }
}

h1, h2, h3, span {
  font-family: ${(props) => props.theme.font_title};
  letter-spacing: 3px;
  @media only screen and (max-width: 600px) {
    letter-spacing: 2px;
  }
}

h4, h5, h6, p {}

header, footer {
  background: ${(props) => props.theme.color_primary};
  color: ${(props) => props.theme.color_secondary};
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  position: relative;
  justify-content: space-between;
}

#root>div:first-of-type {
  padding-top: 75px;
}

ul, li {
  list-style: none;
}

button, a {
  cursor: pointer;
  &:hover {
    transition: 1s;
    opacity: 40%;
  }
}

* {
  margin: 0;
  padding: 0;  
  box-sizing: content-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}
`;

/* Reusable containers and text */
export const PageContainer = styled.div`
  color: ${(props) => props.theme.color_primary};
`;

export const PageTitle = styled.h1`
  text-transform: uppercase;
  padding: 5rem 15% 5rem 15%;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 3em;
  @media only screen and (max-width: 600px) {
    padding: 2rem 5% 2rem 5%;
    font-size: 2em;
  }
`;

export const SectionContainer = styled.div`
  scroll-margin-top: 80px;
  padding: 1rem 20%;
  @media only screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  padding-bottom: 1rem;
`;

export const SubTitle = styled.h5`
  text-transform: uppercase;
  padding: 1rem 0rem;
`;

export const Text = styled.p`
  padding-bottom: 1rem;
`;
