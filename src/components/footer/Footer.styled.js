import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  background-color: ${({theme}) => theme.footer.backGround};
  color: ${({theme}) => theme.footer.text};
  width: 100%;
  margin-bottom: 0px;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1vw;
` 
export const DivLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
` 

export const SectionPersonalInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  p {
    margin-bottom: 0;
  }
`

export const DivWhatsapp = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  margin-left: 0;
  p {
    margin-block-start: 0.2em;
  }
  img {
    margin-top: 4px;
    margin-left: 3px;
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`
  
export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-right: 30px;
  max-width: 80%;
  `

export const SectionBarSocial = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`

export const SectionBarCode = styled.section`
  margin-bottom: 0;
  margin-block-start: 3em;
  font-size: 0.9vw;
  button {
    color: #5f90e7;
  }
`
