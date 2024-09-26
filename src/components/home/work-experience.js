import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Translator from '../../i18n/Translator';
import CgiLogo from '../../assets/logos/cgi.png';
import DiconiumLogo from '../../assets/logos/diconium.png';
import RiskcoLogo from '../../assets/logos/riskco.png';
import TalkdeskLogo from '../../assets/logos/talkdesk.png';
import { LogoContainer } from './styled';

export default function WorkExperience() {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineOppositeContent variant="body2" color="text.secondary">
          <Translator path="work-experience.diconium.date" />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: '40px' }}>
          <LogoContainer src={DiconiumLogo} alt="diconium-logo" height="22px" />
          <br />
          <Typography variant="h6" component="span">
            <Translator path="work-experience.diconium.role" />
          </Typography>
          <Typography>
            <Translator path="work-experience.diconium.summary" />
          </Typography>
          <Typography>
            <Translator path="work-experience.diconium.details" />
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent variant="body2" color="text.secondary">
          <Translator path="work-experience.talkdesk.date" />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: '40px' }}>
          <LogoContainer src={TalkdeskLogo} alt="talkdesk-logo" height="22px" />
          <br />
          <Typography variant="h6" component="span">
            <Translator path="work-experience.talkdesk.role" />
          </Typography>
          <Typography>
            <Translator path="work-experience.talkdesk.summary" />
          </Typography>
          <Typography>
            <Translator path="work-experience.talkdesk.details" />
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent variant="body2" color="text.secondary">
          <Translator path="work-experience.cgi.date" />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: '40px' }}>
          <LogoContainer src={CgiLogo} alt="cgi-logo" height="20px" />
          <br />
          <Typography variant="h6" component="span">
            <Translator path="work-experience.cgi.role" />
          </Typography>
          <Typography>
            <Translator path="work-experience.cgi.summary" />
          </Typography>
          <Typography>
            <Translator path="work-experience.cgi.details" />
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent variant="body2" color="text.secondary">
          <Translator path="work-experience.riskco.date" />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <LogoContainer src={RiskcoLogo} alt="riskco-logo" height="32px" />
          <br />
          <Typography variant="h6" component="span">
            <Translator path="work-experience.riskco.role" />
          </Typography>
          <Typography>
            <Translator path="work-experience.riskco.summary" />
          </Typography>
          <Typography>
            <Translator path="work-experience.riskco.details" />
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
