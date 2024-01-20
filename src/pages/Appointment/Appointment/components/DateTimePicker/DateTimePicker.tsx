import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import "react-calendar/dist/Calendar.css";

import { DAYS } from "../../../../../constant";
import IStore from "../../../../../data/models/store.model";
import {
  setApptDate,
  setApptTime,
} from "../../../../../data/redux/appointmentSlice";
import { RootDispatch, RootState } from "../../../../../data/redux/store";
import * as Styled from "./DateTimePicker.styled";

interface DateTimePickerProps {
  store: IStore;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ store }) => {
  const dispatch = useDispatch<RootDispatch>();
  const apptTime = useSelector((state: RootState) => state.slice.apptTime);
  const apptDate = useSelector((state: RootState) => state.slice.apptDate);

  const [timeItems, setTimeItems] = useState<string[]>();
  const [isClosed, setIsClosed] = useState<boolean>(false);

  // Fetch store's business hour and create time selections
  useEffect(() => {
    const timeItems: string[] = [];
    let dayKey = '';
    let businessHours: string[] = [''];

    if(apptDate) {
      dayKey = DAYS[dayjs(apptDate).day()].toLowerCase().slice(0, 3);
      businessHours = store.hours[dayKey].split("-");
    }

    if (businessHours[0] === "Closed") {
      setIsClosed(true);
    } else {
      let startTime = Number(businessHours[0]);
      const endTime = Number(businessHours[1]);

      if(dayjs(apptDate).isSame(dayjs(), 'day')) {
        if(dayjs().add(20, 'minutes').hour() >= dayjs().add(1, 'hour').hour() + startTime) {
          startTime = dayjs().hour() + 2;
        } else {
          startTime = dayjs().hour() >= startTime ? dayjs().hour() : startTime;
        }
      }

      for (let i = startTime; i < endTime; i++) {
        switch(true) {
          case (i < 11):
            timeItems.push(`${i}:00AM - ${i + 1}:00AM`);
            break;
          case (i === 11):
            timeItems.push("11:00AM - 12:00PM");
            break;
          case (i === 12):
            timeItems.push("12:00PM - 1:00PM");
            break;
          case (i > 12):
            timeItems.push(`${i - 12}:00PM - ${i - 11}:00PM`);
            break;
          default:
            break;
        }
      }

      setIsClosed(false);
      setTimeItems(timeItems);
    }
  }, [apptDate]);

  const onChangeDate = (date: Date) => {
    // Validate the date
    if(dayjs(date).diff(dayjs(), 'day') >= 0){
      dispatch(setApptDate(date));
    }
  };

  return (
    <Styled.Container>
      <Styled.CalendarContainer>
        <Calendar className='appt-calendar' minDate={new Date()} onChange={onChangeDate} value={apptDate} defaultActiveStartDate={new Date()}/>
      </Styled.CalendarContainer>
      <Styled.TimeContainer>
        <span>Available Time</span>
        {isClosed ? (
          <div style={{ flexWrap: "nowrap" }}>
            <p>This store is closed on selected date</p>
          </div>
        ) : (
          <>
            <div>
              {timeItems?.map((item: string) => (
                <Styled.TimeButton key={item} isset={apptTime === item} onClick={() => dispatch(setApptTime(item))}>
                  {item}
                </Styled.TimeButton>
              ))}
            </div>
          </>
        )}
      </Styled.TimeContainer>
    </Styled.Container>
  );
};

export default DateTimePicker;
