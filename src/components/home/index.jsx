import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import {
  PageContainer,
  PageTitle,
  PageSubTitle,
  SectionContainer,
  SectionTitle,
  Text
} from '../../theme/GlobalStyles';
import {
  HeroSection,
  HeroAvatar,
  HeroTagline,
  HeroActions,
  WorkContainer,
  SectionSubtitle
} from './styled';
import Translator from '../../i18n/Translator';
import Reveal from '../common/Reveal';
import ProfilePhoto from '../../assets/images/profile_photo.png';
import { cvHref } from '../../data/SocialData';
import WorkExperience from './work-experience';
import Education from './education';
import Skills from './skills';
import Projects from './projects';
import Conferences from './conferences';
import Hobbies from './hobbies';

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <HeroSection id="home">
        <HeroAvatar
          src={ProfilePhoto}
          alt="Bruno Fernandes"
          width="160"
          height="160"
          decoding="async"
          fetchPriority="high"
        />
        <PageTitle>Bruno Fernandes</PageTitle>
        <PageSubTitle>
          <Translator path="role" />
        </PageSubTitle>
        <HeroTagline>
          <Translator path="hero.tagline" />
        </HeroTagline>
        <HeroActions>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/#projects"
          >
            {t('actions.viewWork')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/#contact"
          >
            {t('contact.heading')}
          </Button>
          <Button
            variant="text"
            size="large"
            startIcon={<DownloadIcon />}
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('actions.downloadCv')}
          </Button>
        </HeroActions>
      </HeroSection>

      <Reveal>
        <SectionContainer id="biography">
          <Text>
            <Translator path="profile" />
          </Text>
        </SectionContainer>
      </Reveal>

      <Reveal>
        <SectionContainer id="work-experience">
          <SectionTitle>
            <Translator path="work-experience.title" />
          </SectionTitle>
          <WorkContainer>
            <WorkExperience />
          </WorkContainer>
        </SectionContainer>
      </Reveal>

      <Reveal>
        <SectionContainer id="education">
          <SectionTitle>
            <Translator path="education.title" />
          </SectionTitle>
          <Education />
        </SectionContainer>
      </Reveal>

      <Reveal>
        <SectionContainer id="skills">
          <SectionTitle>
            <Translator path="skills.title" />
          </SectionTitle>
          <SectionSubtitle>
            <Translator path="skills.subtitle" />
          </SectionSubtitle>
          <Skills />
        </SectionContainer>
      </Reveal>

      <Reveal>
        <SectionContainer id="projects">
          <SectionTitle>
            <Translator path="projects.title" />
          </SectionTitle>
          <SectionSubtitle>
            <Translator path="projects.subtitle" />
          </SectionSubtitle>
          <Projects />
        </SectionContainer>
      </Reveal>

      <Reveal>
        <SectionContainer id="conferences">
          <SectionTitle>
            <Translator path="conferences.title" />
          </SectionTitle>
          <SectionSubtitle>
            <Translator path="conferences.subtitle" />
          </SectionSubtitle>
          <Conferences />
        </SectionContainer>
      </Reveal>

      <Reveal>
        <SectionContainer id="associativism">
          <SectionTitle>
            <Translator path="associativism.title" />
          </SectionTitle>
          <Text>
            <Translator path="associativism.description" />
          </Text>
        </SectionContainer>
      </Reveal>

      <Reveal>
        <SectionContainer id="hobbies">
          <SectionTitle>
            <Translator path="hobbies.title" />
          </SectionTitle>
          <Hobbies />
        </SectionContainer>
      </Reveal>
    </PageContainer>
  );
}
