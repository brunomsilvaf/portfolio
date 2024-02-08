import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  HeaderContainer,
  NavigationContainer,
  NavigationItems,
  LanguagesContainer,
  LanguageItem
} from './styled';
import Flag from './Flag';
import NavMenuItems from '../../data/NavMenuData';
import Translator from '../../i18n/Translator';
import { languages } from '../../i18n';

export default function Header() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <HeaderContainer>
      <NavigationContainer>
        <NavigationItems>
          {NavMenuItems.map((menu) => (
            <Link to={menu.url}>
              <Translator path={menu.title} />
            </Link>
          ))}
        </NavigationItems>
        <LanguagesContainer>
          {languages.map((item) => (
            <LanguageItem key={item.locale}>
              <Flag
                image={item.img}
                onClick={() => handleChangeLanguage(item.locale)}
              />
            </LanguageItem>
          ))}
        </LanguagesContainer>
      </NavigationContainer>
    </HeaderContainer>
  );
}
