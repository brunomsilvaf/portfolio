import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTranslation } from 'react-i18next';
import { ProjectsGrid } from './styled';

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true, defaultValue: [] });

  return (
    <ProjectsGrid>
      {items.map((project) => (
        <Card
          key={project.title}
          variant="outlined"
          sx={{ display: 'flex', flexDirection: 'column', borderRadius: 3 }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1.5, textAlign: 'left' }}
            >
              {project.description}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: 'wrap' }}
            >
              {project.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Stack>
          </CardContent>
          <CardActions>
            {project.repo && (
              <Button
                size="small"
                startIcon={<GitHubIcon />}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('actions.viewCode')}
              </Button>
            )}
            {project.demo && (
              <Button
                size="small"
                startIcon={<LaunchIcon />}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('actions.liveDemo')}
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </ProjectsGrid>
  );
}
