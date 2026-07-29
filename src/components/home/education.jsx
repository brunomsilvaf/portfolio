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
import { EducationDetails, ChipRow } from './styled';

const ENTRIES = ['masters', 'curricular_internship', 'summer_internship'];
const LANGUAGES = ['pt', 'en', 'de'];

export default function Education() {
  const { t } = useTranslation();

  return (
    <>
      <Timeline position="right">
        {ENTRIES.map((key, index) => {
          const base = `education.${key}`;
          const details = t(`${base}.details`, {
            returnObjects: true,
            defaultValue: []
          });

          return (
            <TimelineItem key={key}>
              <TimelineOppositeContent variant="body2" color="text.secondary">
                {t(`${base}.date`)}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {index < ENTRIES.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ pb: '40px' }}>
                <Typography variant="h6" component="span">
                  {t(`${base}.title`)}
                </Typography>
                <Typography color="text.secondary">
                  {t(`${base}.local`)}
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
