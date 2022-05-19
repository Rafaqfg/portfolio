import React from 'react';
import Header from '../components/header/Header';
import PersonalValues from '../components/personalValues/PersonalValues';
import TimeLine from '../components/TimeLine';
import * as S from './MainPage.styled';

class MainPage extends React.Component {

  render() {
  
    return (
      <>
        <Header />
        <S.StyledMain>
          <TimeLine />
          <PersonalValues />
        </S.StyledMain>
      </>
    );
  };
}

export default MainPage;
