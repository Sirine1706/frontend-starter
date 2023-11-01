export const isDateValid = (date: Date): boolean => {
  return !Number.isNaN(date.getTime());
};

export const formatDate = (date: Date, format: string): string => {
  // USAGE -->  const formattedDate = formatDate(myDate, "yyyy-MM-dd HH:mm:ss zzz");
  const options: {
    [key: string]: string | number | boolean | undefined;
  } = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  return new Intl.DateTimeFormat(undefined, options).format(date);
};

export const getTimeAndReturnDifferenceInSeconds = (date: string): number => {
  const newDate = new Date(date);
  const time = newDate.getTime();
  const currentTime = new Date().getTime();
  const difference = currentTime - time;
  return Math.floor(difference / 1000);
};

export const convertSecondsToMMSS = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds}`;
};

export const formatDateAndTranslateToFrench = (
  date: string | Date,
  format: string = "yyyy-MM-dd HH:mm:ss zzz"
): string => {
  try {
    const newDate = new Date(date);
    const options: {
      [key: string]: string | number | boolean | undefined;
    } = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("fr-FR", options).format(newDate);
  } catch (e) {
    return date.toString();
  }
};
