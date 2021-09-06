export const stringToNum = (input: string): number => {
  return parseInt(input.replace(/\D/g, ''), 10);
};

export const rpMasking = (value: string | number | undefined | null) => {
  if (value !== undefined && value !== null) {
    // const newValue = Number(value);
    return `Rp ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  } else {
    return '';
  }
};
