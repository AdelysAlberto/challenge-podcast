import { HTMLInputTypeAttribute } from "react";

export interface IInput {
  type?: HTMLInputTypeAttribute,
  placerholder?: string,
  onChange?: (e: string) => string,
  value?: string | number
}