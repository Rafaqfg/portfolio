import React from 'react';
import FlipCard from './flipCards/FlipCard';
import { useTranslation } from "react-i18next";
import science from '../../images/science.png';
import education from '../../images/education.png';
import colab from '../../images/colab.png';
import * as S from './PersonalValues.styled';


function PersonalValues() {
  const [t] = useTranslation('common');

  return (
    <S.SectionPersonalValues>
      <h2 className="title" >{t('main.personalValues.h2')}</h2>
      <p className="title" >{t('main.personalValues.p')}</p>
      <h3>
        {t('main.personalValues.whatIBelive')}
      </h3>
      <S.DivCards>
        <FlipCard
          img={science}
          front={t('main.personalValues.science.front')}
          back={t('main.personalValues.science.back')}
        />
        <FlipCard
          img={education}
          front={t('main.personalValues.education.front')}
          back={t('main.personalValues.education.back')}
        />
        <FlipCard
          img={colab}
        front={t('main.personalValues.collaboration.front')}
        back={t('main.personalValues.collaboration.back')}
        />
      </S.DivCards>    
    </S.SectionPersonalValues>
  );
}

export default PersonalValues;
