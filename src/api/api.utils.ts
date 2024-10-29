import { format, toZonedTime } from "date-fns-tz";
import { mapKeys, snakeCase, camelCase, forOwn, upperFirst } from "lodash";

export function decamelizeKeysToSnakeCase(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(decamelizeKeysToSnakeCase);
  }

  return mapKeys(obj, ( key) => snakeCase(key));
}

export function decamelizeKeysToPascal(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(decamelizeKeysToPascal);
  }

  return mapKeys(obj, ( key) => upperFirst(camelCase(key)));
}

// กรณีข้อมูลเป็น DATE typeof จะเป็น object
export function camelizeKeys(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(camelizeKeys);
  }

  const camelizedObj: any = {};
  forOwn(obj, (value, key) => {
    const camelizedKey = camelCase(key);
    // กรณีที่ key นั้นอยู่ใน LIST หมายความว่า key ดังกล่าวเป็น key เกี่ยวกับ DATE
    // if (shouldConvertToDate(camelizedKey)) {
    //   camelizedObj[camelizedKey] = prepareDateToStringTh(value);
    // } else {
    camelizedObj[camelizedKey] = camelizeKeys(value);
    // }
  });

  return camelizedObj;
}

export function snakeCaseKeys(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(snakeCaseKeys);
  }

  const snakeCaseObj: any = {};
  for (const [key, value] of Object.entries(obj)) {
    const snakeCaseKey = snakeCase(key);
    snakeCaseObj[snakeCaseKey] = snakeCaseKeys(value);
  }

  return snakeCaseObj;
}


export function prepareDateToStringTh(date: Date) {
  let newDate: string = "";
  try {
    const utcDate = new Date(date);
    const thaiTimeZone = "Asia/Bangkok";
    const thaiDate = toZonedTime(utcDate, thaiTimeZone);
    const formattedThaiDate = format(thaiDate, "yyyy-MM-dd HH:mm:ss", {
      timeZone: thaiTimeZone,
    });
    newDate = formattedThaiDate;
  } catch (err) {
    console.error(err);
  }
  return newDate;
}
