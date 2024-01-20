import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { useWindowSize } from "@uidotdev/usehooks";

import * as Styled from "./Appointment.styled";
import StoreInfo from "./components/StoreInfo/StoreInfo";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import AppHeader from "../../../components/AppHeader/AppHeader";
import DateTimePicker from "./components/DateTimePicker/DateTimePicker";
import PageLayout from "../../../components/PageLayout/PageLayout";
import FadeInWrapper from "../../../components/FadeInWrapper/FadeInWrapper";
import { RootState } from "../../../data/redux/store";

const AppointmentPage: React.FC = () => {
  const navigate = useNavigate();
  const groomingShop = useSelector((state: RootState) => state.slice.groomingShop);
  const apptDate = useSelector((state: RootState) => state.slice.apptDate);
  const apptTime = useSelector((state: RootState) => state.slice.apptTime);
  
  const windowSize = useWindowSize();
  
  const handleSubmitClick = () => {
    sessionStorage.setItem('sID', '1');
    navigate("/customer-info");
  }

  if (_.isEmpty(groomingShop)) {
    return <div></div>;
  } else {
    return (
      <PageLayout>
        <section className="left-section">
          <Styled.LeftContainer>
            <AppHeader />
            <div className="content">
              <StoreInfo store={groomingShop} />
            </div>
            {
              windowSize.width && windowSize.width >= 1024 && <SubmitButton disabled={!apptDate || !apptTime ? true : false} btnAction={handleSubmitClick}/>
            }
          </Styled.LeftContainer>
        </section>

        <section className="right-section">
          <FadeInWrapper>
            <Styled.RightContainer>
                <DateTimePicker store={groomingShop} />
                {
                  windowSize.width && windowSize.width < 1024 && <SubmitButton disabled={!apptDate || !apptTime ? true : false} btnAction={handleSubmitClick}/>
                }
            </Styled.RightContainer>
          </FadeInWrapper>
        </section>
      </PageLayout>
    );
  }
};

export default AppointmentPage;
