import styled from 'styled-components';

export const HeroSection = styled.section`
  scroll-margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${(props) => props.theme.space_md};
  padding: calc(
      ${(props) => props.theme.header_height} +
        ${(props) => props.theme.space_xl}
    )
    ${(props) => props.theme.space_md} ${(props) => props.theme.space_xl};
  background: ${(props) => props.theme.color_hero_gradient};
`;

export const HeroAvatar = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  object-position: center bottom;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.color_surface};
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.color_surface_alt},
    ${(props) => props.theme.color_surface}
  );
  box-shadow: ${(props) => props.theme.shadow_card};
`;

export const HeroTagline = styled.p`
  max-width: 620px;
  color: ${(props) => props.theme.color_muted};
  font-size: 1.1rem;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space_sm};
  justify-content: center;
  margin-top: ${(props) => props.theme.space_sm};
`;

export const WorkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  @media only screen and (max-width: 600px) {
    padding-left: 0;
  }
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

export const ConferencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const ConferenceCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: ${(props) => props.theme.color_surface};
  border: 1px solid ${(props) => props.theme.color_border};
  border-radius: 12px;
  svg {
    color: ${(props) => props.theme.color_accent};
  }
`;

export const ConferenceName = styled.h4`
  text-transform: none;
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
