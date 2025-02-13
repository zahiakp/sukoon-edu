// utils/relativeTime.ts

import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, formatDistanceToNow } from 'date-fns';

export const getRelativeTime = (date: string): string => {
  const parsedDate = new Date(date);
  const now = new Date();

  const minutes = differenceInMinutes(now, parsedDate);
  const hours = differenceInHours(now, parsedDate);
  const days = differenceInDays(now, parsedDate);
  const months = differenceInMonths(now, parsedDate);

  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return 'just now';
};


export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
