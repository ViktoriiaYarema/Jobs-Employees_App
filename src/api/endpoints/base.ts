import axios from "axios";
import { Config } from "./config";
const base = "https://5f7998dbe402340016f9321f.mockapi.io/";
const instance = axios.create({
  // baseURL: Config().BaseUrl,
  baseURL: base,
});

export default instance;
