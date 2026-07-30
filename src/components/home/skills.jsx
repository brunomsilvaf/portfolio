import React from 'react';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import {
  SkillsGrid,
  SkillCategory,
  SkillCategoryTitle,
  ChipRow,
  SkillsLegend
} from './styled';
import SkillsData from '../../data/SkillsData';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <>
      <SkillsLegend>
        <Chip label={t('skills.legend.strong')} size="small" color="primary" />
        <Chip
          label={t('skills.legend.familiar')}
          size="small"
          variant="outlined"
        />
      </SkillsLegend>
      <SkillsGrid>
        {SkillsData.map((category) => (
          <SkillCategory key={category.key}>
            <SkillCategoryTitle>
              {t(`skills.categories.${category.key}`)}
            </SkillCategoryTitle>
            <ChipRow>
              {category.items.map((item) => (
                <Chip
                  key={item.name}
                  label={item.name}
                  size="small"
                  variant={item.level === 'strong' ? 'filled' : 'outlined'}
                  color={item.level === 'strong' ? 'primary' : 'default'}
                />
              ))}
            </ChipRow>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </>
  );
}
