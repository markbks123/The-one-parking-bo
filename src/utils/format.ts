import dayjs from "dayjs";
require("dayjs/locale/th");
const buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);
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


  export function parseCurrencyToNumber(currency: string): string {
  return parseFloat(currency.replace(/,/g, "")).toString();
}



// format https://day.js.org/docs/en/display/format, https://day.js.org/docs/en/plugin/buddhist-era
// BBBB thai year
export function dateFormat(date: string | Date, format: string) {
  return dayjs(date).locale("th").format(format);
}