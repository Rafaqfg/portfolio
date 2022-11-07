import React from 'react';
import github from '../../images/github-white.svg';
import linkedin from '../../images/linkedin-white.svg';
import whatsapp from '../../images/whatsapp-white.svg';
import logo from '../../images/logowhite.png';
import { useTranslation } from "react-i18next";
import * as S from './Footer.styled';

function Footer() {
  const [t] = useTranslation('common');

  return (
    <S.StyledFooter>
      <S.DivLogoContainer>
        <img src={ logo } className="logo" alt="rafael-logo"/>
        <S.SectionPersonalInfo>
            <p>rafa.qfg@gmail.com</p>
            <S.DivWhatsapp>
              <p>
                +55 16 988270288
              </p>
              <img src={ whatsapp } alt="whatsapp"/>
            </S.DivWhatsapp>
        </S.SectionPersonalInfo>
      </S.DivLogoContainer>
      <S.DivContainer>
        <S.SectionBarSocial>
          <button
            className="link-btn"
            type="button"
            src={ linkedin }
            onClick={
              () => window.open('https://www.linkedin.com/in/rafael-quaglia-franco-de-godoy/', '_blank')
            }
          >
            <img src={ linkedin } className="social-media-icon" alt="linkedin"/>
          </button>
          <button
            className="link-btn"
            type="button"
            src={ github }
            onClick={ () => window.open('https://github.com/Rafaqfg', '_blank') }
          >
            <img src={ github } className="social-media-icon" alt="github"/>
          </button>
        </S.SectionBarSocial>
        <S.SectionBarCode>
          <p>
            {t('footer.description')}
            <button
              className="link-btn"
              onClick={
                () => window.open('https://github.com/Rafaqfg/rafael-portfolio', '_blank')
              }
            >
              {t('footer.codeLink')}
            </button>
            {`!`}
          </p>
        </S.SectionBarCode>
      </S.DivContainer>
    </S.StyledFooter>
  );
}

export default Footer;
