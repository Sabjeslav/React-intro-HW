import React, { useState } from 'react';
import Week from './Week';
import {
  getWeeksInMonth,
  add,
  eachWeekOfInterval,
  endOfMonth,
  startOfMonth,
} from 'date-fns';
import { startOfWeek } from 'date-fns/esm';

function Calendar () {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(getWeeksInMonth(currentDate));
  console.log(startOfWeek(currentDate));
  //const weeksInMonth = getWeeksInMonth(currentDate);
  //const startOfWeekDate = startOfWeek(currentDate);
  //const nextWeekDate = add(startOfWeekDate, { days: 1 });
  /*const tomorrow = add(currentDate, {
    days: 1,
  });*/
  const weeksInMonthArray = eachWeekOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });
  const weeks = weeksInMonthArray.map(weekStartDate => {
    return (
      <Week
        startDate={weekStartDate}
        key={weekStartDate.toLocaleDateString()}
      />
    );
  });

  return (
    <div>
      {/* <div>Weeks in month: {weeksInMonth}</div>
      <div>Start of week: {startOfWeekDate.toLocaleDateString("ua-UA")}</div>
      <div>Second day of current week: {nextWeekDate.toLocaleDateString()}</div>
      <div>Tomorrow: {tomorrow.toLocaleDateString()}</div> */}
      {weeks}
    </div>
  );
}

export default Calendar;
