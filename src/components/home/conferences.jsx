import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import { useTranslation } from 'react-i18next';
import { ConferencesGrid, ConferenceCard, ConferenceName } from './styled';

export default function Conferences() {
  const { t } = useTranslation();
  const items = t('conferences.items', {
    returnObjects: true,
    defaultValue: []
  });

  return (
    <ConferencesGrid>
      {items.map((name) => (
        <ConferenceCard key={name}>
          <EventIcon fontSize="large" />
          <ConferenceName>{name}</ConferenceName>
        </ConferenceCard>
      ))}
    </ConferencesGrid>
  );
}
