import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {
  HeaderContainer,
  NavigationContainer,
  Brand,
  NavigationItems,
  RightControls,
  DesktopOnly,
  MobileOnly,
  LanguagesContainer,
  LanguageItem,
  DrawerContent,
  DrawerLanguages
} from './styled';
import Flag from './Flag';
import NavMenuItems from '../../data/NavMenuData';
import Translator from '../../i18n/Translator';
import { languages } from '../../i18n';
import { useColorMode } from '../../theme/ColorModeProvider';

export default function Header() {
  const { i18n, t } = useTranslation();
  const { mode, toggle } = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <HeaderContainer>
      <NavigationContainer>
        <Brand to="/#home">Bruno Fernandes</Brand>

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

          <DesktopOnly>
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
          </DesktopOnly>

          <MobileOnly>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </MobileOnly>
        </RightControls>
      </NavigationContainer>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            sx={{ alignSelf: 'flex-end' }}
          >
            <CloseIcon />
          </IconButton>
          {NavMenuItems.map((menu) => (
            <Link
              key={menu.id}
              to={menu.url}
              onClick={() => setDrawerOpen(false)}
            >
              <Translator path={menu.title} />
            </Link>
          ))}
          <DrawerLanguages>
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
          </DrawerLanguages>
        </DrawerContent>
      </Drawer>
    </HeaderContainer>
  );
}
