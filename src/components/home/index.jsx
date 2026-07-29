import React from 'react';
import {
  PageContainer,
  PageTitle,
  PageSubTitle,
  SectionContainer,
  SectionTitle,
  Text
} from '../../theme/GlobalStyles';
import {
  IntroContainer,
  IntroTitlesContainer,
  WorkContainer,
  SectionSubtitle
} from './styled';
import Translator from '../../i18n/Translator';
import ProfilePhoto from '../../assets/images/profile_photo.jpg';
import WorkExperience from './work-experience';
import Education from './education';
import Skills from './skills';
import Projects from './projects';
import Hobbies from './hobbies';

export default function MainPage() {
  return (
    <PageContainer>
      <IntroContainer>
        <img src={ProfilePhoto} alt="Bruno Fernandes" />
        <IntroTitlesContainer>
          <PageTitle>Bruno Fernandes</PageTitle>
          <PageSubTitle>
            <Translator path="role" />
          </PageSubTitle>
        </IntroTitlesContainer>
      </IntroContainer>
      <hr />
      <SectionContainer id="biography">
        <Text>
          <Translator path="profile" />
        </Text>
      </SectionContainer>
      <hr />

      <SectionContainer id="work-experience">
        <SectionTitle>
          <Translator path="work-experience.title" />
        </SectionTitle>
        <WorkContainer>
          <WorkExperience />
        </WorkContainer>
      </SectionContainer>

      <SectionContainer id="education">
        <SectionTitle>
          <Translator path="education.title" />
        </SectionTitle>
        <Education />
      </SectionContainer>

      <SectionContainer id="skills">
        <SectionTitle>
          <Translator path="skills.title" />
        </SectionTitle>
        <SectionSubtitle>
          <Translator path="skills.subtitle" />
        </SectionSubtitle>
        <Skills />
      </SectionContainer>

      <SectionContainer id="projects">
        <SectionTitle>
          <Translator path="projects.title" />
        </SectionTitle>
        <SectionSubtitle>
          <Translator path="projects.subtitle" />
        </SectionSubtitle>
        <Projects />
      </SectionContainer>

      <SectionContainer id="associativism">
        <SectionTitle>
          <Translator path="associativism.title" />
        </SectionTitle>
        <Text>
          <Translator path="associativism.description" />
        </Text>
      </SectionContainer>

      <SectionContainer id="hobbies">
        <SectionTitle>
          <Translator path="hobbies.title" />
        </SectionTitle>
        <Hobbies />
      </SectionContainer>
    </PageContainer>
  );
}
