import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MOBILE = '820px';

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

export const Brand = styled(Link)`
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: ${(props) => props.theme.color_primary};
  &:hover {
    color: ${(props) => props.theme.color_accent};
  }
`;

export const NavigationItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1.15rem;

  a {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: ${(props) => props.theme.color_primary};
    &:hover {
      color: ${(props) => props.theme.color_accent};
    }
    &.active {
      color: ${(props) => props.theme.color_accent};
      font-weight: 700;
    }
  }

  @media only screen and (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DesktopOnly = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  @media only screen and (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const MobileOnly = styled.div`
  display: none;
  @media only screen and (max-width: ${MOBILE}) {
    display: inline-flex;
    align-items: center;
  }
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
  transition:
    opacity ${(props) => props.theme.transition},
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

export const DrawerContent = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0.5rem;
  background: ${(props) => props.theme.color_surface};
  color: ${(props) => props.theme.color_primary};
  height: 100%;

  a {
    display: block;
    padding: 0.75rem 1rem;
    border-radius: ${(props) => props.theme.radius_sm};
    font-weight: 600;
    color: ${(props) => props.theme.color_primary};
    &:hover {
      background: ${(props) => props.theme.color_surface_alt};
      color: ${(props) => props.theme.color_accent};
    }
  }
`;

export const DrawerLanguages = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  margin-top: auto;
  border-top: 1px solid ${(props) => props.theme.color_border};
`;
