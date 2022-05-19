import React from 'react';
import * as S from './FlipCard.styled';

function FlipCard(props) {
  return (
    <S.DivFlipContainer>
      <S.DivFlipper>
        <S.DivFront>
          <img src={ props.img } alt={ props.img }/>
          <h4>{ props.front }</h4>
        </S.DivFront>
        <S.DivBack>
          <h4 className="flip-card-back" >{ props.back }</h4>
        </S.DivBack>
      </S.DivFlipper>
    </S.DivFlipContainer>
  );
}

export default FlipCard;
