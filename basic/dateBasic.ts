/**
 * Checks if the given date is valid.
 * @param {Date} date - The date object.
 * @returns {boolean} True if the date is valid, otherwise false.
 */
const isValidDate = (date: Date): boolean => !isNaN(date.getTime());

/**
 * Validates if the given date is a valid Date object.
 * Throws an error if the date is invalid, if the date is negative, or if the date is too far in the future.
 * @param {Date} date - The date object to validate.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const validateDate = (date: Date) => {
  if (date.getTime() < 0) {
    throw new Error("Date cannot be before January 1, 1970 (negative timestamps).");
  }
  const invalidFuture = new Date('3000-01-01');
  if (date > invalidFuture) {
    throw new Error("Date cannot be beyond the year 3000.");
  }
};

/**
 * Validates if the given year is a valid number.
 * The year must be a positive integer greater than 0.
 * @param {number} year - The year to validate.
 * @throws {Error} Throws an error if the year is invalid(not a number, not an integer, or less than 1).
 */
const validateYear = (year: number) => {
  if (year < 1) {
    throw new Error("Year must be a positive number greater than 0.");
  }
};

/**
 * Validates if the given month is within the valid range (1-12).
 * Throws an error if the month is invalid.
 * @param {number} month - The month to validate(1 for January, 12 for December).
 * @throws {Error} Throws an error if the month is less than 1 or greater than 12.
 */
const validateMonth = (month: number) => {
  if (month < 1 || month > 12) {
    throw new Error("Invalid month. Month must be between 1-12")
  }
}

/**
 * Validates if the given week day is within the valid range (0-6).
 * Throws an error if the week day is invalid.
 * @param {number} week - The week day to validate (0 for Sunday, 6 for Saturday).
 * @throws {Error} Throws an error if the week day is less than 0 or greater than 6.
 */
const validateWeek = (week: number) => {
  if (week < 0 || week > 6) {
    throw new Error('Invalid firstDayOfWeek value. It should be between Sunday(0) and Saturday(6).');
  }
}

/**
 * Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
 * @param {Date} date - The date object.
 * @returns {number} The time in milliseconds.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getTime = (date: Date): number => {
  validateDate(date)
  return date.getTime();
};

/**
 * Returns the full year in UTC.
 * @param {Date} date - The date object.
 * @returns {number} The year in UTC.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getUTCFullYear = (date: Date): number => {
  validateDate(date)
  return date.getUTCFullYear();
};

/**
 * Returns the day of the month (1-31) in UTC.
 * @param {Date} date - The date object.
 * @returns {number} The day of the month in UTC.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getUTCDay = (date: Date): number => {
  validateDate(date)
  return date.getUTCDate();
};

/**
 * Returns the month (0-11) in UTC.
 * @param {Date} date - The date object.
 * @returns {number} The month in UTC, where 0 represents January and 11 represents December.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getUTCMonth = (date: Date): number => {
  validateDate(date)
  return date.getUTCMonth();
};

/**
 * Converts the date to a string, using the UTC time zone.
 * @param {Date} date - The date object.
 * @returns {string} A string representation of the date in UTC format.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getUTCDateAsString = (date: Date): string => {
  validateDate(date)
  return date.toUTCString();
};

/**
 * Converts the date to an ISO 8601 string (YYYY-MM-DDTHH:mm:ss.sssZ).
 * @param {Date} date - The date object.
 * @returns {string} The ISO string representation of the date.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getISOAsString = (date: Date): string => {
  validateDate(date)
  return date.toISOString();
};

/**
 * Formats the date according to the given locale and options.
 * @param {Date} date - The date object.
 * @param {string} [locale='kr_KO'] - The locale for formatting.
 * @param {Object} [options={}] - Options to customize the format.
 * @returns {string} The formatted date string.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const convertAsDateFormat = (
  date: Date,
  locale: string = 'ko-KR',
  options: Object = {}
): string => {
  validateDate(date)
  return Intl.DateTimeFormat(locale, options).format(date);
};

/**
 * Formats the date in ISO 8601 format (YYYY-MM-DD).
 * @param {Date} date - The date object.
 * @returns {string} The formatted date string in ISO 8601 format.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const convertAsISODateFormat = (date: Date): string => {
  validateDate(date)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Converts the date to a human-readable string format(e.g., "Tue May 20 2024").
 * @param {Date} date - The date object.
 * @returns {string} A string representation of the date.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getDateAsString = (date: Date): string => {
  validateDate(date)
  return date.toDateString();
};

/**
 * Returns the time zone offset in minutes from UTC for the current locale.
 * @param {Date} date - The date object.
 * @returns {number} The time zone offset in minutes.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getTimezoneOffset = (date: Date): number => {
  validateDate(date)
  return date.getTimezoneOffset();
};

/**
 * Checks if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, otherwise false.
 * @throws {Error} Throws an error if the year is less than 1.
 */
function isLeapYear(year: number): boolean {
  validateYear(year)
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Checks if two dates occur on the same day(ignoring time).
 * @param {Date} fromDate - The first date.
 * @param {Date} toDate - The second date.
 * @returns {boolean} True if the two dates are on the same day, otherwise false.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const isSameDay = (
  fromDate: Date,
  toDate: Date
): boolean => {
  validateDate(fromDate)
  validateDate(toDate)
  return fromDate.getUTCFullYear() === toDate.getUTCFullYear()
    && fromDate.getUTCMonth() === toDate.getUTCMonth()
    && fromDate.getUTCDate() === toDate.getUTCDate();
};

/**
 * Checks if the first date is before the second date.
 * @param {Date} fromDate - The first date.
 * @param {Date} toDate - The second date.
 * @returns {boolean} True if the first date is before the second date, otherwise false.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const isBefore = (
  fromDate: Date,
  toDate: Date
): boolean => {
  validateDate(fromDate)
  validateDate(toDate)
  return fromDate.getTime() < toDate.getTime();
};

/**
 * Checks if the first date is after the second date.
 * @param {Date} fromDate - The first date.
 * @param {Date} toDate - The second date.
 * @returns {boolean} True if the first date is after the second date, otherwise false.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const isAfter = (
  fromDate: Date,
  toDate: Date
): boolean => {
  validateDate(fromDate)
  validateDate(toDate)
  return fromDate.getTime() > toDate.getTime();
};

/**
 * Checks if the given date is a weekend.
 * @param {Date} date - The date object.
 * @returns {boolean} True if the date is a weekend, otherwise false.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const isWeekend = (date: Date): boolean => {
  validateDate(date)
  const day = date.getDay();
  return day === 0 || day === 6;
};

/**
 * Returns the quarter of the year for the given date.
 * @param {Date} date - The date object.
 * @returns {number} The quarter of the year(1-4).
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getQuarter = (date: Date): number => {
  validateDate(date)
  const month = date.getMonth();
  return Math.floor(month / 3) + 1;
};

/**
 * Returns the first day of the month for the given year and month.
 * @param {number} year - The year.
 * @param {number} month - The month(0-based index, where 0 is January and 11 is December).
 * @returns {Date} A new date object set to the first day of the month.
 * @throws {Error} Throws an error if the year is invalid or the month is out of range.
 */
const getFirstDayOfMonth = (
  year: number,
  month: number
): Date => {
  validateYear(year)
  validateMonth(month)
  return new Date(year, month, 1);
}

/**
 * Returns the last day of the month for the given year and month.
 * @param {number} year - The year.
 * @param {number} month - The month(0-based index, where 0 is January and 11 is December).
 * @returns {Date} A new date object set to the last day of the month.
 * @throws {Error} Throws an error if the year is invalid or the month is out of range.
 */
const getLastDayOfMonth = (
  year: number,
  month: number
): Date => {
  validateYear(year)
  validateMonth(month)
  return new Date(year, month + 1, 0);
}

/**
 * Returns the day of the year for the given date.
 * @param {Date} date - The date object.
 * @returns {number} The day of the year(1-365 or 1-366 for leap years).
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getDayOfYear = (date: Date): number => {
  validateDate(date)
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getDay() - start.getDay();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

/**
 * Returns the number of weeks in the given year.
 * @param {number} year - The year.
 * @returns {number} The number of weeks in the year.
 * @throws {Error} Throws an error if the year is invalid(less than 1).
 */
function getWeeksInYear(year: number): number {
  validateYear(year)
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const firstDayOfWeek = start.getDay();
  const totalDays = Math.ceil((end.getTime() - start.getDay()) / (1000 * 60 * 60 * 24));
  return Math.ceil((totalDays + firstDayOfWeek) / 7);
}

/**
 * Returns the time of day(morning, afternoon, evening, night) for the given date.
 * @param {Date} date - The date object.
 * @returns {string} The time of day.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getTimeOfDay = (date: Date): string => {
  validateDate(date)
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
};

/**
 * Returns the name of the weekday for the given date.
 * @param {Date} date - The date object.
 * @returns {string} The name of the weekday.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getWeekDay = (date: Date): string => {
  validateDate(date)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

/**
 * Returns the start of the week for the given date.
 * @param {Date} date - The date object.
 * @param {number} [firstDayOfWeek=1] - The first day of the week(0 for Sunday, 1 for Monday).
 * @returns {Date} A new date object set to the start of the week.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getStartOfWeek = (
  date: Date,
  firstDayOfWeek: number = 1
): Date => {
  validateDate(date)
  const day = date.getDay();
  const diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;
  const result = new Date(date);
  result.setDate(result.getDate() - diff);
  return getStartOfDay(result);
};

/**
 * Returns the end of the week for the given date.
 * @param {Date} date - The date object.
 * @param {number} [lastDayOfWeek=0] - The last day of the week(0 for Sunday).
 * @returns {Date} A new date object set to the end of the week.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future. Throws an error if lastDayOfWeek is not between 0 and 6.
 */
const getEndOfWeek = (
  date: Date,
  lastDayOfWeek: number = 0
): Date => {
  validateDate(date);
  validateWeek(lastDayOfWeek);
  const day = date.getDay();
  const diff = (lastDayOfWeek < day ? 7 : 0) - (day - lastDayOfWeek);
  const result = new Date(date);
  result.setDate(result.getDate() + diff);
  return getEndOfDay(result);
};

/**
 * Returns the start of the day(00:00:00) for the given date.
 * @param {Date} date - The date object.
 * @returns {Date} A new date object set to the start of the day.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getStartOfDay = (date: Date): Date => {
  validateDate(date);
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
};

/**
 * Returns the end of the day(23:59:59.999) for the given date.
 * @param {Date} date - The date object.
 * @returns {Date} A new date object set to the end of the day.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const getEndOfDay = (date: Date): Date => {
  validateDate(date);
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
};

/**
 * Calculates the time span between two dates in hours, minutes, and seconds.
 * @param {Date} fromDate - The start date.
 * @param {Date} toDate - The end date.
 * @returns {Object} An object containing hours, minutes, and seconds between the two dates.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const getTimeSpan = (
  fromDate: Date,
  toDate: Date
): {
  hours: number;
  seconds: number;
  minutes: number;
} => {
  validateDate(fromDate);
  validateDate(toDate);
  const diffInMilliseconds = toDate.getTime() - fromDate.getTime();
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);
  return {hours, minutes, seconds};
};

/**
 * Calculates the number of days between two dates.
 * @param {Date} fromDate - The start date.
 * @param {Date} toDate - The end date.
 * @returns {number} The number of days between the two dates.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const getDaysBetween = (
  fromDate: Date,
  toDate: Date
): number => {
  validateDate(fromDate);
  validateDate(toDate);
  const oneDay = 24 * 60 * 60 * 1000;
  const diffInMilliseconds = Math.abs(toDate.getTime() - fromDate.getTime());
  return Math.round(diffInMilliseconds / oneDay);
};

/**
 * Returns the number of days in a given month and year.
 * @param {number} year - The year.
 * @param {number} month - The month(0-based index, where 0 is January and 11 is December).
 * @returns {number} The number of days in the month.
 * @throws {Error} Throws an error if the year or month is invalid.
 */
const calculateDaysInMonth = (
  year: number,
  month: number
): number => {
  validateYear(year);
  validateMonth(month);
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Calculates the number of months between two dates.
 * @param {Date} fromDate - The start date.
 * @param {Date} toDate - The end date.
 * @returns {number} The number of months between the two dates.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const calculateBetweenDates = (
  fromDate: Date,
  toDate: Date
): number => {
  validateDate(fromDate);
  validateDate(toDate);
  const yearsDiff = toDate.getFullYear() - fromDate.getFullYear();
  const monthsDiff = toDate.getMonth() - fromDate.getMonth();
  return yearsDiff * 12 + monthsDiff;
};

/**
 * Calculates the time difference between two dates in milliseconds, seconds, and minutes.
 * @param {Date} fromDate - The start date.
 * @param {Date} toDate - The end date.
 * @returns {Object} An object containing the time difference in milliseconds, seconds, and minutes.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const calculateBetweenDatesAsMilliSeconds = (
  fromDate: Date,
  toDate: Date
): {
  diffInMilliseconds: number;
  diffInMinutes: number;
  diffInSeconds: number;
} => {
  validateDate(fromDate);
  validateDate(toDate);
  const diffInMilliseconds = toDate.getTime() - fromDate.getTime();
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  return {diffInMilliseconds, diffInSeconds, diffInMinutes};
};

/**
 * Checks if the given date is within the specified date range.
 * @param {Date} date - The date to check.
 * @param {Date} startDate - The start date of the range.
 * @param {Date} endDate - The end date of the range.
 * @returns {boolean} True if the date is within the range, otherwise false.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future. Throws an error if startDate is after endDate.
 */
const isInRange = (
  date: Date,
  startDate: Date,
  endDate: Date
): boolean => {
  validateDate(date);
  if (startDate > endDate) {
    throw new Error("The startDate must be before the endDate.");
  }
  return date >= startDate && date <= endDate;
};

/**
 * Calculates the number of business days between two dates(excluding weekends).
 * @param {Date} fromDate - The start date.
 * @param {Date} toDate - The end date.
 * @returns {number} The number of business days between the two dates.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const getBusinessDaysBetween = (
  fromDate: Date,
  toDate: Date
): number => {
  validateDate(fromDate);
  validateDate(toDate);
  let count = 0;
  const currentDate = new Date(fromDate);
  while (currentDate <= toDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return count;
};

/**
 * Calculates the age based on the birth date and target date.
 * @param {Date} birthDate - The birth date.
 * @param {Date} [targetDate=new Date()] - The target date(defaults to the current date).
 * @param {string} [lang='en'] - Language for age calculation('en' for foreign age, 'ko' for Korean age).
 * @returns {number} The calculated age.
 * @throws {Error} Throws an error if either date is invalid, negative, or in an unrealistic future.
 */
const calculateAge = (
  birthDate: Date,
  targetDate: Date = new Date(),
  lang: string = "kr"
): number => {
  validateDate(birthDate);
  validateDate(targetDate);
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  let age = targetDate.getFullYear() - birthYear;
  if (
    targetDate.getMonth() < birthMonth ||
    (targetDate.getMonth() === birthMonth && targetDate.getDate() < birthDay)
  ) {
    age--;
  }
  if (lang === "ko") {
    return age + 1;
  }
  return age;
};

/**
 * Rounds the given date to the nearest minute.
 * If the seconds are 30 or more, the minutes will be rounded up.
 * @param {Date} date - The date object.
 * @returns {Date} A new date object rounded to the nearest minute.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const roundToNearestMinute = (date: Date): Date => {
  validateDate(date);
  const result = new Date(date);
  const seconds = result.getSeconds();
  if (seconds >= 30) {
    result.setMinutes(result.getMinutes() + 1);
  }
  result.setSeconds(0, 0);
  return result;
};

/**
 * Adds a specified number of years to the given date.
 * @param {Date} date - The original date object.
 * @param {number} years - The number of years to add.
 * @returns {Date} A new date object with the added years.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future. Throws an error if the years value is invalid.
 */
const addYears = (
  date: Date,
  years: number
): Date => {
  validateDate(date);
  validateYear(years);
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
};

/**
 * Adds a specified number of months to the given date.
 * @param {Date} date - The original date object.
 * @param {number} months - The number of months to add.
 * @returns {Date} A new date object with the added months.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future. Throws an error if the months value is invalid.
 */
const addMonths = (
  date: Date,
  months: number
): Date => {
  validateDate(date);
  validateMonth(months);
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

/**
 * Adds a specified number of days to the given date.
 * @param {Date} date - The original date object.
 * @param {number} days - The number of days to add.
 * @returns {Date} A new date object with the added days.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future.
 */
const addDays = (
  date: Date,
  days: number
): Date => {
  validateDate(date);
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Subtracts the specified number of years from the given date.
 * @param {Date} date - The original date object.
 * @param {number} years - The number of years to subtract.
 * @returns {Date} A new date object with the subtracted years.
 * @throws {Error} Throws an error if the date is invalid, negative, or in an unrealistic future. Throws an error if the years value is invalid.
 */
const subtractYears = (
  date: Date,
  years: number
): Date => {
  return addYears(date, -years);
};

/**
 * Subtracts the specified number of months from the given date.
 * @param {Date} date - The original date object.
 * @param {number} months - The number of months to subtract.
 * @returns {Date} A new date object with the subtracted months.
 * @throws {Error} Throws an error if the date is invalid or if the number of months is invalid (not between 0-11).
 */
const subtractMonths = (
  date: Date,
  months: number
): Date => {
  validateDate(date);
  validateMonth(months);
  return addMonths(date, -months);
}

/**
 * Subtracts the specified number of days from the given date.
 * @param {Date} date - The original date object.
 * @param {number} days - The number of days to subtract.
 * @returns {Date} A new date object with the subtracted days.
 * @throws {Error} Throws an error if the date is invalid.
 */
const subtractDays = (
  date: Date,
  days: number
): Date => {
  validateDate(date);
  return addDays(date, -days);
}

/**
 * Converts a date to a specified time zone and returns it in 'MM/DD/YYYY, HH:MM:SS AM/PM' format.
 * @param {Date} date - The date object.
 * @param {string} timeZone - The IANA time zone name(e.g., 'America/New_York').
 * @returns {string} A formatted date string in the specified time zone.
 * @throws {Error} Throws an error if the date is invalid or if the time zone is invalid.
 */
const convertToTimeZone = (
  date: Date,
  timeZone: string
): string => {
  validateDate(date);
  try {
    new Intl.DateTimeFormat(undefined, {timeZone}).format(new Date());
  } catch (error) {
    throw new Error(`Invalid time zone: ${timeZone}`);
  }

  return new Intl.DateTimeFormat('kr-KO', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date);
}

export {
  isValidDate,
  validateDate,
  validateYear,
  validateMonth,
  validateWeek,
  getTime,
  getUTCFullYear,
  getUTCDay,
  getUTCMonth,
  getUTCDateAsString,
  getISOAsString,
  convertAsDateFormat,
  convertAsISODateFormat,
  getDateAsString,
  getTimezoneOffset,
  isLeapYear,
  isSameDay,
  isBefore,
  isAfter,
  isWeekend,
  getQuarter,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getDayOfYear,
  getWeeksInYear,
  getTimeOfDay,
  getWeekDay,
  getStartOfWeek,
  getEndOfWeek,
  getStartOfDay,
  getEndOfDay,
  getTimeSpan,
  getDaysBetween,
  calculateDaysInMonth,
  calculateBetweenDates,
  calculateBetweenDatesAsMilliSeconds,
  isInRange,
  getBusinessDaysBetween,
  calculateAge,
  roundToNearestMinute,
  addYears,
  addMonths,
  addDays,
  subtractYears,
  subtractMonths,
  subtractDays,
  convertToTimeZone
};
