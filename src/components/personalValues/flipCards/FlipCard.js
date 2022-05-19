import styled from 'styled-components';

export const DivFlipper = styled.div`
  background-color: ${({theme}) => theme.card.flipper.backGroundColor};
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  position: relative;
  box-shadow: ${({theme}) => theme.card.flipper.boxShadow};
`

export const DivFlipContainer = styled.div`
  width: 300px;
  height: 200px;
  perspective: 1000px;
  &:hover ${ Flipper } {
    transform: rotateY(180deg);
  }
`

export const DivFront = styled.div`
  position: absolute;
	width: 100%;
	height: 100%;
  backface-visibility: hidden;
  font-weight: bolder;
  font-size: larger;
  text-align: center;
  padding-top: 50px;
`

export const DivBack = styled.div`
  position: absolute;
	width: 100%;
	height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`
