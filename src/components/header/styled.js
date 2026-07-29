import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => props.theme.header_height};
  padding: 0.5rem clamp(1rem, 4vw, 2rem);
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: ${(props) => props.theme.content_width};
`;

export const NavigationItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;

  a {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: ${(props) => props.theme.color_primary};
    &:hover {
      color: ${(props) => props.theme.color_accent};
    }
  }
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LanguagesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const LanguageItem = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0.65;
  transition: opacity ${(props) => props.theme.transition},
    transform ${(props) => props.theme.transition};

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  img {
    width: 26px;
    height: auto;
    display: block;
  }
`;
