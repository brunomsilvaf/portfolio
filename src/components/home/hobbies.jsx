import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ExtensionIcon from '@mui/icons-material/Extension';
import MovieIcon from '@mui/icons-material/Movie';
import { useTranslation } from 'react-i18next';
import { HobbiesGrid, HobbyCard, HobbyName, HobbyText } from './styled';

const ICONS = {
  choir: MusicNoteIcon,
  padel: SportsTennisIcon,
  boardgames: ExtensionIcon,
  editing: MovieIcon
};

export default function Hobbies() {
  const { t } = useTranslation();
  const items = t('hobbies.items', { returnObjects: true, defaultValue: [] });

  return (
    <HobbiesGrid>
      {items.map((hobby) => {
        const Icon = ICONS[hobby.icon] || ExtensionIcon;
        return (
          <HobbyCard key={hobby.name}>
            <Icon fontSize="large" />
            <HobbyName>{hobby.name}</HobbyName>
            <HobbyText>{hobby.description}</HobbyText>
          </HobbyCard>
        );
      })}
    </HobbiesGrid>
  );
}
