import { ENDPOINT } from "../api/models/enpoint.model";

export const apiHelper = (type: string) => {
  return ENDPOINT[type.toUpperCase()].request;
};
