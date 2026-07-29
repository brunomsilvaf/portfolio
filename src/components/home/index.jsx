import React from 'react';
import {
  PageContainer,
  PageTitle,
  PageSubTitle,
  SectionContainer,
  SectionTitle,
  Text
} from '../../theme/GlobalStyles';
import { IntroContainer, IntroTitlesContainer, WorkContainer } from './styled';
import Translator from '../../i18n/Translator';
import ProfilePhoto from '../../assets/images/profile_photo.jpg';
import WorkExperience from './work-experience';

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
      </SectionContainer>
    </PageContainer>
  );
}
