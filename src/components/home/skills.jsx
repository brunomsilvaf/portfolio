import React from 'react';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import {
  SkillsGrid,
  SkillCategory,
  SkillCategoryTitle,
  ChipRow
} from './styled';

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', {
    returnObjects: true,
    defaultValue: []
  });

  return (
    <SkillsGrid>
      {categories.map((category) => (
        <SkillCategory key={category.name}>
          <SkillCategoryTitle>{category.name}</SkillCategoryTitle>
          <ChipRow>
            {category.items.map((item) => (
              <Chip key={item} label={item} size="small" />
            ))}
          </ChipRow>
        </SkillCategory>
      ))}
    </SkillsGrid>
  );
}
