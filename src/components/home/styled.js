import styled from 'styled-components';

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
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const LogoContainer = styled.img``;

export const SectionSubtitle = styled.p`
  color: ${(props) => props.theme.color_muted};
  margin: -0.5rem 0 1.5rem 0;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

export const SkillCategory = styled.div`
  background: ${(props) => props.theme.color_surface};
  border: 1px solid ${(props) => props.theme.color_border};
  border-radius: 12px;
  padding: 1.25rem;
`;

export const SkillCategoryTitle = styled.h4`
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.color_accent};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const HobbyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.color_surface};
  border: 1px solid ${(props) => props.theme.color_border};
  border-radius: 12px;
  svg {
    color: ${(props) => props.theme.color_accent};
  }
`;

export const HobbyName = styled.h4`
  text-transform: none;
`;

export const HobbyText = styled.p`
  color: ${(props) => props.theme.color_muted};
  font-size: 0.9em;
  text-align: center;
`;

export const EducationDetails = styled.ul`
  margin-top: 0.5rem;
  li {
    list-style: disc;
    margin-left: 1.25rem;
    text-align: left;
  }
`;
