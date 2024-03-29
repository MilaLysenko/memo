export const formatDateTime = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(date);

export const formatMonth = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(date);
