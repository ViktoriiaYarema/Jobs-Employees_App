import { ENDPOINT } from "../api/models/enpoint.model";

export const apiHelper = async (type: string) => {
  return await ENDPOINT[type.toUpperCase()].request;
};
