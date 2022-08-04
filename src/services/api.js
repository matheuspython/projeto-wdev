import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api",
});
