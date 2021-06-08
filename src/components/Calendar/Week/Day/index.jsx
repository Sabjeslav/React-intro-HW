import React from 'react';
import { format } from 'date-fns';

export default function Day ({ day }) {
  return <div>{format(day, 'dd')}</div>;
}
