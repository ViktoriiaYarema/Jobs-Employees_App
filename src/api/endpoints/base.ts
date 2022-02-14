import axios from "axios";
import { Config } from "./config";

const instance = axios.create({
  baseURL: Config().BaseUrl,
});

export default instance;
