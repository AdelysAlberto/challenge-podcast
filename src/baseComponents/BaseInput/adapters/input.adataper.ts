import { HTMLInputTypeAttribute } from "react";

export interface IInput {
  type?: HTMLInputTypeAttribute,
  placerholder?: string,
  onChange?: () => void,
  value?: string | number
}