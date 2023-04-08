import styled from 'styled-components';

export const BackdropEditUserMOdal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.01);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`

export const ModalEditUser = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 24px;
  background-color: ${props => props.theme.colors.textWhite};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%
  height: auto;
  text-align: center;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    @media ${props => props.theme.device.mobile} {
      width: 330px;
    }



  &.open {
    opacity: 1;
    visibility: visible;
  }
`

export const CloseButton = styled.img`
 position: absolute;
 right: 18px;
 top: 18px;

`

export const PreviewWrap = styled.div`
  position: relative;
`
export const PreviewImageWrap = styled.label`

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.whiteMuted};
  overflow: hidden;
  @media ${props => props.theme.device.tablet} {
    width: 103px;
    height: 103px;
  }

`
export const PreviewImage = styled.img`
    width: 88px;
    height: 88px;
    @media ${props => props.theme.device.tablet} {
    width: 103px;
    height: 103px;
  }



`

export const AddImageButton = styled.label`
  position: absolute;
  display: inline-block;
  right: 95px;
  top: 66px;
  @media ${props => props.theme.device.tablet} {

  top: 80px;
  }

`

export const EditNameFormWrap = styled.div`
  margin-top: 48px;
  position: relative;
`
export const EditNameFormStyled = styled.input`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 0;
  padding-left: 42px;
  width: 100%;
  height: 48px;
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.whiteMuted};

`


export const EditBtnWrap = styled.div`
  margin-top: 24px;

`
export const  EditModalBtn = styled.button`
  display: block;
  width: 100%;
  padding: 14px 84px;
  font-size: 14px;
  color: ${props => props.theme.colors.textWhite};
  background-color: ${props => props.theme.colors.accent} ;
  border-radius: 6px;
  transition: color 250ms linear;

  &:hover, &:focus {
    color: ${props => props.theme.colors.accentDark}
  }

`




