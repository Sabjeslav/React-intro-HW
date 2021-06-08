import React from 'react';
import { addDays } from 'date-fns';
import Day from './Day';

export default function Week ({ startDate }) {
  const daysArray = new Array(7).fill(0).map((_, index) => {
    const currentDay = addDays(startDate, index);
    return <Day day={currentDay} key={currentDay.toLocaleDateString()} />;
  });
  return <div>{daysArray}</div>;
}
