import { TFunctionTIme } from "./interfaces/config.interface";

export const validateIfTimestmap = (time: string | number): boolean => {
  return (new Date(time)).getTime() > 0
}
export const parseTime: TFunctionTIme = (timestamp: number): string => {
  if (validateIfTimestmap(timestamp)) {
    const date = new Date(timestamp * 1000);
    return date.toUTCString().slice(18, 22);
  }
  return String(timestamp)
}

export const parseDate = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleDateString();
}