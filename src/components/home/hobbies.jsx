import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ExtensionIcon from '@mui/icons-material/Extension';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useTranslation } from 'react-i18next';
import { HobbiesGrid, HobbyCard, HobbyName, HobbyText } from './styled';

const ICONS = {
  music: MusicNoteIcon,
  puzzling: ExtensionIcon,
  sports: FitnessCenterIcon,
  games: SportsEsportsIcon
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
