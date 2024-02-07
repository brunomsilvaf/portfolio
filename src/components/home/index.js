import React from 'react';
import {
  PageContainer,
  SectionContainer,
  Text
} from '../../theme/GlobalStyles';
import { HomeContainer, TitleContainer, TitleText } from './styled';
import Translator from '../../i18n/Translator';

export default function MainPage() {
  return (
    <HomeContainer>
      <TitleContainer>
        <TitleText>
          <Translator path="home.title" />
        </TitleText>
      </TitleContainer>
      <PageContainer>
        <SectionContainer id="biography">
          <Text>
            <Translator path="home.title" />
          </Text>
        </SectionContainer>
      </PageContainer>
    </HomeContainer>
  );
}
