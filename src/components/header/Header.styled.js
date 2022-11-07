import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.header.backGround};
  color: ${({theme}) => theme.header.text};
  width: 100%;
  height: 100vh;
  margin-bottom: 0;

  ` 
  
export const SectionBar = styled.section`
  display: flex;
  width: 100%;
  height: 08vh;
  background-color: ${({theme}) => theme.header.backGround};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  h1 {
    margin-left: 30px;
  }
  div {
    display: flex;
    margin-right: 30px;
  }
  button {
    margin-right: 8px;
    color: ${({theme}) => theme.header.button};
  }
`
export const SectionHeader = styled.section`
  position: sticky;
  flex: 1;
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  div {
    width: 40vw;
    height: 40vh;
  }
  h3 {
  line-height: 30px;
  text-align: justify;
  text-justify: inter-word;
  }
  img {
    object-fit: cover;
    height: 440px;
    max-width: 100%;
  }

  @media(max-width: 800px) {
    flex-direction: column-reverse;
  }
`
