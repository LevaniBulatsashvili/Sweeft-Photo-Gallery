export const stringToNum = (
  value: string | null | undefined,
  fallback: number
) => {
  if (value === null || value === undefined) return fallback;

  const parsed = parseInt(value);
  return isNaN(parsed) ? fallback : parsed;
};
