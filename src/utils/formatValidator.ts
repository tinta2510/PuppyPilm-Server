/**
 * Validates if a string is in the format YYYY-MM-DD.
 * @param dateStr - The date string to validate.
 * @returns True if the date string is valid, otherwise false.
 */
export const isValidDate = (dateStr: string): boolean => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) {
    return false;
  }
  const date = new Date(dateStr);
  const timestamp = date.getTime();
  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }
  return date.toISOString().startsWith(dateStr);
};