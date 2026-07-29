import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import {
  HeaderContainer,
  NavigationContainer,
  NavigationItems,
  RightControls,
  LanguagesContainer,
  LanguageItem
} from './styled';
import Flag from './Flag';
import NavMenuItems from '../../data/NavMenuData';
import Translator from '../../i18n/Translator';
import { languages } from '../../i18n';
import { useColorMode } from '../../theme/ColorModeProvider';

export default function Header() {
  const { i18n, t } = useTranslation();
  const { mode, toggle } = useColorMode();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <HeaderContainer>
      <NavigationContainer>
        <NavigationItems>
          {NavMenuItems.map((menu) => (
            <li key={menu.id}>
              <Link to={menu.url}>
                <Translator path={menu.title} />
              </Link>
            </li>
          ))}
        </NavigationItems>
        <RightControls>
          <Tooltip title={mode === 'dark' ? t('theme.light') : t('theme.dark')}>
            <IconButton
              color="inherit"
              onClick={toggle}
              size="small"
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
          <LanguagesContainer>
            {languages.map((item) => (
              <LanguageItem
                key={item.locale}
                type="button"
                onClick={() => handleChangeLanguage(item.locale)}
                aria-label={item.locale}
              >
                <Flag image={item.img} />
              </LanguageItem>
            ))}
          </LanguagesContainer>
        </RightControls>
      </NavigationContainer>
    </HeaderContainer>
  );
}
