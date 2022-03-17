import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobsContainer from "./JobsContainer";
import { ApiEnum } from "../../api/models/api.enum";

test("display jobs list", () => {
  render(<JobsContainer />);

  expect(screen.getByText(ApiEnum.Jobs.toUpperCase())).toBeInTheDocument();
});
