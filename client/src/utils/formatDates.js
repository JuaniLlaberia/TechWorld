import { differenceInDays } from 'date-fns';

export const formatDate = date => {
  if (differenceInDays(date, new Date()) === 0) return 'New';

  return new Intl.DateTimeFormat('us-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};
