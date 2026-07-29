import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import Translator from '../../i18n/Translator';
import CgiLogo from '../../assets/logos/cgi.png';
import DiconiumLogo from '../../assets/logos/diconium.png';
import RiskcoLogo from '../../assets/logos/riskco.png';
import TalkdeskLogo from '../../assets/logos/talkdesk.png';
import { LogoContainer } from './styled';

const JOBS = [
  { key: 'diconium', logo: DiconiumLogo, height: '22px' },
  { key: 'talkdesk', logo: TalkdeskLogo, height: '22px' },
  { key: 'cgi', logo: CgiLogo, height: '20px' },
  { key: 'riskco', logo: RiskcoLogo, height: '32px' }
];

export default function WorkExperience() {
  const { t } = useTranslation();

  return (
    <Timeline position="right">
      {JOBS.map((job, index) => {
        const base = `work-experience.${job.key}`;
        const skills = t(`${base}.skills`, {
          returnObjects: true,
          defaultValue: []
        });

        return (
          <TimelineItem key={job.key}>
            <TimelineOppositeContent variant="body2" color="text.secondary">
              <Translator path={`${base}.date`} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index < JOBS.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: '40px' }}>
              <LogoContainer
                src={job.logo}
                alt={`${job.key}-logo`}
                height={job.height}
                loading="lazy"
                decoding="async"
              />
              <br />
              <Typography variant="h6" component="span">
                <Translator path={`${base}.role`} />
              </Typography>
              <Typography>
                <Translator path={`${base}.summary`} />
              </Typography>
              <Typography>
                <Translator path={`${base}.details`} />
              </Typography>
              {Array.isArray(skills) && skills.length > 0 && (
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ flexWrap: 'wrap', mt: 1.5 }}
                >
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

