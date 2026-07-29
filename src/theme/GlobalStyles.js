import { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    background-color: ${(props) => props.theme.color_background};
    font-family: ${(props) => props.theme.font_family};
    font-size: ${(props) => props.theme.font_size};
    line-height: ${(props) => props.theme.line_height};
    color: ${(props) => props.theme.color_primary};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    transition: background-color ${(props) => props.theme.transition_slow},
      color ${(props) => props.theme.transition_slow};
    @media only screen and (max-width: 600px) {
      font-size: ${(props) => props.theme.font_size_mobile};
    }
  }

  h1, h2, h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.15;
  }

  h4, h5, h6 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: color ${(props) => props.theme.transition},
      opacity ${(props) => props.theme.transition};
  }

  ul, li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  hr {
    height: 1px;
    background-color: ${(props) => props.theme.color_border};
    border: none;
    margin: ${(props) => props.theme.space_lg} auto;
    width: min(90%, ${(props) => props.theme.content_width});
  }

  header {
    left: 0;
    right: 0;
    z-index: 999;
    position: fixed;
    background: ${(props) => props.theme.color_header_bg};
    color: ${(props) => props.theme.color_primary};
    border-bottom: 1px solid ${(props) => props.theme.color_header_border};
    backdrop-filter: saturate(180%) blur(12px);
    -webkit-backdrop-filter: saturate(180%) blur(12px);
  }

  footer {
    left: 0;
    right: 0;
    background: ${(props) => props.theme.color_footer_bg};
    color: ${(props) => props.theme.color_footer_text};
  }

  ::selection {
    background: ${(props) => props.theme.color_accent};
    color: ${(props) => props.theme.color_on_accent};
  }
`;

/* Reusable containers and text */
export const PageContainer = styled.div``;

export const PageTitle = styled.h1`
  font-size: ${(props) => props.theme.fs_hero};
  text-align: center;
  line-height: 1.05;
`;

export const PageSubTitle = styled.h2`
  font-size: ${(props) => props.theme.fs_subtitle};
  letter-spacing: 3px;
  color: ${(props) => props.theme.color_accent};
`;

export const SectionContainer = styled.section`
  scroll-margin-top: 90px;
  width: min(100%, ${(props) => props.theme.content_width});
  margin: 0 auto;
  padding: ${(props) => props.theme.space_section} ${(props) => props.theme.space_md};
`;

export const SectionTitle = styled.h3`
  font-size: ${(props) => props.theme.fs_section};
  margin-bottom: ${(props) => props.theme.space_md};
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 48px;
    height: 3px;
    border-radius: 3px;
    background: ${(props) => props.theme.color_accent};
  }
`;

export const SubTitle = styled.h5`
  margin-top: ${(props) => props.theme.space_md};
  margin-bottom: ${(props) => props.theme.space_xs};
`;

export const Text = styled.p`
  max-width: ${(props) => props.theme.reading_width};
  color: ${(props) => props.theme.color_primary};
`;
