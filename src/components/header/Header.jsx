import React, { useContext } from 'react';
import ukFlag from '../../images/ukFlag.svg';
import brFlag from '../../images/brFlag.svg';
import { useTranslation } from "react-i18next";
import MyContext from '../../myContext/MyContext';
import Rafael from '../../images/rafa1.jpg';
import * as S from './Header.styled';

function Header() {
  const { isPortuguese, setIsPortuguese } = useContext(MyContext);
  const [t, i18n] = useTranslation('common');

  const handleLanguage = () => {
    isPortuguese ? setIsPortuguese(false) : setIsPortuguese(true);
    isPortuguese ? i18n.changeLanguage('en') : i18n.changeLanguage('pt');
  };

  return (
    <S.StyledHeader>
      <S.SectionBar>
        <h1>Rafael Godoy</h1>
        <div>
          <button
            className="link-btn"
            onClick={() => window.location = 'mailto:rafa.qfg@gmail.com'}
          >
            {t('header.hire.me')}
          </button>
          <button
            className="link-btn"
            type="button"
            onClick={ () => handleLanguage() }
            >
            <img src={ isPortuguese ? ukFlag : brFlag } alt="flag"/>
          </button>
        </div>
      </S.SectionBar>
      <S.SectionHeader>
        <div>
          <h3>
            {t('header.introduction')}
          </h3>
        </div>
        <img src={ Rafael } alt="rafael"/>
      </S.SectionHeader>
    </S.StyledHeader>
  );
}

export default Header;
