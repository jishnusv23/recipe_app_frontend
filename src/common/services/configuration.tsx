import { AxiosRequestConfig } from "axios";

export const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const appJson: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
