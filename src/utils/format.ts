export const numberWithCommas = (number: number): string => {
    return number.toLocaleString();
  };
  
  export const numberTwoDecimalWithCommas = (
    number: number,
    locale = "th"
  ): string => {
    return number.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };