import styled from 'styled-components';

export const FooterContainer = styled.footer`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 20% 2rem 20%;
  scroll-margin-top: 80px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding: 2.5rem 2rem;
  }
`;

export const FooterHeading = styled.h3`
  margin-bottom: 0.25rem;
`;

export const FooterText = styled.p`
  text-align: center;
  max-width: 520px;
  opacity: 0.85;
`;

export const FooterLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  opacity: 0.85;
`;

export const FooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterCopyright = styled.small`
  margin-top: 1rem;
  opacity: 0.7;
`;
