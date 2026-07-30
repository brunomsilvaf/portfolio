import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import { SubTitle } from '../../theme/GlobalStyles';
import { EducationDetails, ChipRow, LogoContainer, LogoLink } from './styled';
import FctucLogo from '../../assets/logos/fctuc.png';
import ActiveSpaceLogo from '../../assets/logos/activespacetech.png';

const ENTRIES = [
  {
    key: 'masters',
    logo: FctucLogo,
    height: '40px',
    url: 'https://www.uc.pt/fctuc/'
  },
  {
    key: 'curricular_internship',
    logo: ActiveSpaceLogo,
    height: '30px',
    url: 'https://www.activespacetech.com/'
  },
  {
    key: 'summer_internship',
    logo: ActiveSpaceLogo,
    height: '30px',
    url: 'https://www.activespacetech.com/'
  }
];
const LANGUAGES = ['pt', 'en', 'de'];

export default function Education() {
  const { t } = useTranslation();

  return (
    <>
      <Timeline position="right" sx={{ px: { xs: 0, sm: 2 } }}>
        {ENTRIES.map((entry, index) => {
          const base = `education.${entry.key}`;
          const details = t(`${base}.details`, {
            returnObjects: true,
            defaultValue: []
          });

          return (
            <TimelineItem key={entry.key}>
              <TimelineOppositeContent
                variant="body2"
                color="text.secondary"
                sx={{ display: { xs: 'none', sm: 'block' }, flex: 0.3 }}
              >
                {t(`${base}.date`)}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {index < ENTRIES.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ pb: '40px' }}>
                <LogoLink
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`${base}.local`)}
                >
                  <LogoContainer
                    src={entry.logo}
                    alt={t(`${base}.title`)}
                    height={entry.height}
                    loading="lazy"
                    decoding="async"
                  />
                </LogoLink>
                <br />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: { xs: 'block', sm: 'none' }, mt: 0.5 }}
                >
                  {t(`${base}.date`)}
                </Typography>
                <Typography variant="h6" component="span">
                  {t(`${base}.title`)}
                </Typography>
                {Array.isArray(details) && details.length > 0 && (
                  <EducationDetails>
                    {details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </EducationDetails>
                )}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>

      <SubTitle>{t('education.languagesTitle')}</SubTitle>
      <ChipRow>
        {LANGUAGES.map((language) => (
          <Chip
            key={language}
            variant="outlined"
            label={`${t(`education.languages.${language}.title`)} — ${t(
              `education.languages.${language}.level`
            )}`}
          />
        ))}
      </ChipRow>
    </>
  );
}
