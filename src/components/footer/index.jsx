import React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import Translator from '../../i18n/Translator';
import SocialData from '../../data/SocialData';
import useDownloadCv from '../cv/useDownloadCv';
import {
  FooterContainer,
  FooterHeading,
  FooterText,
  FooterLocation,
  FooterActions,
  FooterCopyright
} from './styled';

export default function Footer() {
  const { t } = useTranslation();
  const { downloadCv, loading } = useDownloadCv();
  const year = new Date().getFullYear();

  return (
    <FooterContainer id="contact">
      <FooterHeading>
        <Translator path="contact.heading" />
      </FooterHeading>
      <FooterText>
        <Translator path="contact.description" />
      </FooterText>
      <FooterLocation>
        <LocationOnIcon fontSize="small" />
        <span>{SocialData.location}</span>
      </FooterLocation>
      <FooterActions>
        <Tooltip title={t('actions.emailMe')}>
          <IconButton
            color="inherit"
            component="a"
            href={`mailto:${SocialData.email}`}
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            color="inherit"
            component="a"
            href={SocialData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton
            color="inherit"
            component="a"
            href={SocialData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<DownloadIcon />}
          onClick={downloadCv}
          disabled={loading}
        >
          {t('actions.downloadCv')}
        </Button>
      </FooterActions>
      <FooterCopyright>
        {`© ${year} Bruno Fernandes. `}
        <Translator path="contact.rights" />
      </FooterCopyright>
    </FooterContainer>
  );
}
