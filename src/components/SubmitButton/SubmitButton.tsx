import React from "react";

import * as Styled from "./SubmitButton.styled";
import { getAnalytics, logEvent } from "firebase/analytics";


interface ISubmitButton {
  disabled?: boolean;
  buttonText?: string;
  btnAction?: (e: React.MouseEvent) => any;
  showSignUp?: boolean;
}

const SubmitButton: React.FC<ISubmitButton> = ({ disabled, btnAction, buttonText = 'Next' }) => {
  const handleOnClick = (e:React.MouseEvent) => {
    const analytics = getAnalytics();
    logEvent(analytics, 'submit_btn');
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
