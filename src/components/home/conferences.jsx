import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import { useTranslation } from 'react-i18next';
import {
  ConferencesGrid,
  ConferenceCard,
  ConferenceInfo,
  ConferenceName,
  ConferenceDate,
  ConferenceText
} from './styled';

export default function Conferences() {
  const { t } = useTranslation();
  const items = t('conferences.items', {
    returnObjects: true,
    defaultValue: []
  });

  return (
    <ConferencesGrid>
      {items.map((item) => (
        <ConferenceCard key={item.name}>
          <EventIcon fontSize="large" />
          <ConferenceInfo>
            <ConferenceName>{item.name}</ConferenceName>
            {item.date && <ConferenceDate>{item.date}</ConferenceDate>}
            {item.description && (
              <ConferenceText>{item.description}</ConferenceText>
            )}
          </ConferenceInfo>
        </ConferenceCard>
      ))}
    </ConferencesGrid>
  );
}
