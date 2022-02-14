import { ReactElement } from "react";

export interface RouteType {
  url: string;
  element: () => ReactElement;
}
