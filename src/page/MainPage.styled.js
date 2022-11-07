import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex:
  flex-direction: column;
  background-image: ${({theme}) => theme.main.backGroundImage};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  color: ${({theme}) => theme.main.text};
`
