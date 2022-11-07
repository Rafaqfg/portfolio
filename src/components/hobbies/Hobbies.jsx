import React from 'react';
import { useTranslation } from "react-i18next";
import HobbyCard from './HobbyCard';
import airplane from '../../images/airplane.png';
import cooking from '../../images/cooking.png';
import pc from '../../images/pc.png';
import sports from '../../images/soccer.png';
import tourist from '../../images/tourist.png';
import tv from '../../images/tv.png';
import wine from '../../images/wine.png';
import * as S from './Hobbies.styled';

function Hobbies() {
  const [t] = useTranslation('common');

  return (
    <>
      <h2 className="title" >{t('main.otherActivities.h2')}</h2>
      <p className="title" >{t('main.otherActivities.p')}</p>
      <S.SectionHobbies>
        <HobbyCard image={ airplane } hobby={ t('main.otherActivities.airplane') } />
        <HobbyCard image={ cooking } hobby={ t('main.otherActivities.cooking') } />
        <HobbyCard image={ pc } hobby={ t('main.otherActivities.pc') } />
        <HobbyCard image={ sports } hobby={ t('main.otherActivities.sports') } />
        <HobbyCard image={ tourist } hobby={ t('main.otherActivities.tourist') } />
        <HobbyCard image={ tv } hobby={ t('main.otherActivities.tv') } />
        <HobbyCard image={ wine } hobby={ t('main.otherActivities.wine') } />
      </S.SectionHobbies>
    </>
  );
}

export default Hobbies;
