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
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTranslation } from 'react-i18next';
import Translator from '../../i18n/Translator';
import CgiLogo from '../../assets/logos/cgi.png';
import DiconiumLogo from '../../assets/logos/diconium.png';
import RiskcoLogo from '../../assets/logos/riskco.png';
import TalkdeskLogo from '../../assets/logos/talkdesk.png';
import { LogoContainer, LogoLink } from './styled';

const JOBS = [
  {
    key: 'diconium',
    logo: DiconiumLogo,
    height: '40px',
    url: 'https://diconium.com/'
  },
  {
    key: 'talkdesk',
    logo: TalkdeskLogo,
    height: '30px',
    url: 'https://www.talkdesk.com/'
  },
  {
    key: 'cgi',
    logo: CgiLogo,
    height: '30px',
    url: 'https://www.cgi.com/portugal/pt-pt'
  },
  { key: 'riskco', logo: RiskcoLogo, height: '40px' }
];

export default function WorkExperience() {
  const { t } = useTranslation();

  return (
    <Timeline position="right" sx={{ px: { xs: 0, sm: 2 } }}>
      {JOBS.map((job, index) => {
        const base = `work-experience.${job.key}`;
        const skills = t(`${base}.skills`, {
          returnObjects: true,
          defaultValue: []
        });
        const projects = t(`${base}.projects`, {
          returnObjects: true,
          defaultValue: []
        });

        return (
          <TimelineItem key={job.key}>
            <TimelineOppositeContent
              variant="body2"
              color="text.secondary"
              sx={{ display: { xs: 'none', sm: 'block' }, flex: 0.3 }}
            >
              <Translator path={`${base}.date`} />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index < JOBS.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: '40px' }}>
              {job.url ? (
                <LogoLink
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`${base}.title`)}
                >
                  <LogoContainer
                    src={job.logo}
                    alt={t(`${base}.title`)}
                    height={job.height}
                    loading="lazy"
                    decoding="async"
                  />
                </LogoLink>
              ) : (
                <LogoContainer
                  src={job.logo}
                  alt={t(`${base}.title`)}
                  height={job.height}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: { xs: 'block', sm: 'none' }, mt: 0.5 }}
              >
                <Translator path={`${base}.date`} />
              </Typography>
              <Typography variant="h6" component="span">
                <Translator path={`${base}.role`} />
              </Typography>
              <Typography>
                <Translator path={`${base}.summary`} />
              </Typography>
              <Typography>
                <Translator path={`${base}.details`} />
              </Typography>
              {Array.isArray(projects) && projects.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    sx={{ display: 'block', lineHeight: 1.6 }}
                  >
                    {t('projects.title')}
                  </Typography>
                  <Stack spacing={1}>
                    {projects.map((project) => (
                      <Box key={project.name}>
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="subtitle2"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.5,
                            fontWeight: 700
                          }}
                        >
                          {project.name}
                          <LaunchIcon sx={{ fontSize: 14 }} />
                        </Link>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
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
