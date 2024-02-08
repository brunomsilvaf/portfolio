import React from 'react';
import {
  PageContainer,
  PageTitle,
  PageSubTitle,
  SectionContainer,
  SectionTitle,
  SubTitle,
  Text
} from '../../theme/GlobalStyles';
import {
  IntroContainer,
  IntroTitlesContainer,
  WarningContainer,
  WorkContainer
} from './styled';
import Translator from '../../i18n/Translator';
import ProfilePhoto from '../../assets/images/profile_photo.jpg';

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

      <WarningContainer>
        <PageTitle>Work in progress... 08/02/24</PageTitle>
      </WarningContainer>
      <SectionContainer id="biography">
        <Text>
          <Translator path="profile" />
        </Text>
      </SectionContainer>

      <SectionContainer id="work-experience">
        <SectionTitle>
          <Translator path="work-experience.title" />
        </SectionTitle>
        <WorkContainer>
          <SubTitle>
            <Translator path="work-experience.diconium.title" />
          </SubTitle>
          <SubTitle>
            <Translator path="work-experience.diconium.date" />
          </SubTitle>
          <Text>
            <Translator path="work-experience.diconium.summary" />
          </Text>
        </WorkContainer>
        <WorkContainer>
          <SubTitle>
            <Translator path="work-experience.td.title" />
          </SubTitle>
          <SubTitle>
            <Translator path="work-experience.td.date" />
          </SubTitle>
          <Text>
            <Translator path="work-experience.td.summary" />
          </Text>
        </WorkContainer>
        <WorkContainer>
          <SubTitle>
            <Translator path="work-experience.cgi.title" />
          </SubTitle>
          <SubTitle>
            <Translator path="work-experience.cgi.date" />
          </SubTitle>
          <Text>
            <Translator path="work-experience.cgi.summary" />
          </Text>
        </WorkContainer>
        <WorkContainer>
          <SubTitle>
            <Translator path="work-experience.riskco.title" />
          </SubTitle>
          <SubTitle>
            <Translator path="work-experience.riskco.date" />
          </SubTitle>
          <Text>
            <Translator path="work-experience.riskco.summary" />
          </Text>
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
