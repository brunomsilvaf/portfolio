import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 10px 30px;
  height: 50px;
  width: 100vw;
  position: fixed;
  align-items: center;
  justify-content: center;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavigationItems = styled.ul`
  display: flex;
  width: 100%;
  a {
    padding-right: 20px;
  }
`;

export const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 50%;
    cursor: pointer;
  }
`;

export const LanguageItem = styled.div``;
