import React from "react";

import * as Styled from "./SubmitButton.styled";


interface ISubmitButton {
  disabled?: boolean;
  buttonText?: string;
  btnAction?: (e: React.MouseEvent) => any;
  showSignUp?: boolean;
}

const SubmitButton: React.FC<ISubmitButton> = ({ disabled, btnAction, buttonText = 'Next' }) => {
  const handleOnClick = (e:React.MouseEvent) => {
    btnAction && btnAction(e)

    setTimeout(()=> {
      scrollTo(0,0);
    }, 100)
  }

  return (
    <Styled.SubmitButtonContainer>
      <Styled.Submit type="submit" form="hook-form" title='next-button' onClick={handleOnClick} disabled={disabled ?? false} >
        { buttonText }
      </Styled.Submit>
    </Styled.SubmitButtonContainer>
  );
};

export default SubmitButton;
