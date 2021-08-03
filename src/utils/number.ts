export const stringToNum = (input: string): number => {
  return parseInt(input.replace(/\D/g, ''), 10);
};
