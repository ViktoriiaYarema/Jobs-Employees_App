import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApiEnum } from "../../api/models/api.enum";
import JobsContainer from "./JobsContainer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { JobType } from "../../enteties/entetiesJobs";
import { useFetch } from "../../hooks/useFetch";
import { Api } from "../../api/api";

import { runSaga } from "redux-saga";
import { onApiLoad } from "../../redux/saga/saga";
import { apiActions, API_ACTIONS } from "../../redux/reduxApi/apiActions";
import { takeEvery } from "redux-saga/effects";

const initial = {
  api: {
    jobs: [
      { id: "1", jobId: "Supervisor", title: "Supervisor" },
      { id: "2", jobId: "Associate", title: "Associate" },
      { id: "3", jobId: "Executive", title: "Executive" },
      { id: "4", jobId: "Liaison", title: "Liaison" },
    ],
    providers: [],
  },
  app: {
    selectedJob: null,
  },
};

const mockStore = configureStore();
const store = mockStore(initial);
const mockData = { data: initial.api.jobs as JobType[] };
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const setup = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <JobsContainer />
      </MemoryRouter>
    </Provider>
  );

describe("workflow of jobs list", () => {
  it("display jobs list", () => {
    setup();
    // eslint-disable-next-line testing-library/no-node-access
    const list = document.querySelector("ul");
    expect(screen.getByText(ApiEnum.Jobs.toUpperCase())).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it("click to job item", async () => {
    mockedAxios.get.mockResolvedValue(mockData);
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(mockData)
    );

    // setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <JobsContainer />
        </MemoryRouter>
      </Provider>
    );
    // expect(mockedAxios.get).toHaveBeenCalled();

    // expect(listItem.textContent).toHaveTextContent("Supervisor");
    // fireEvent.click(listItem);
    // console.log(listItem);
    // const selectedJobRoute = screen.getByTestId("selected-job");
    // expect(selectedJobRoute?.textContent).toHaveTextContent("Supervisor");

    const ul = await screen.findByTestId("job-list");
    expect(ul).toHaveClass("MuiList-root");

    const listItem = await screen.findByTestId("job-item-1");

    expect(listItem).toBeInTheDocument();
    expect(setup()).toMatchSnapshot();

    // expect(ul).toContainElement(screen.getByTestId("job-item-1"));
  });

  // it("test saga", () => {
  //   const getSaga = onApiLoad(apiActions.fetchStart("jobs"));
  //   expect(getSaga.next().value).toEqual(takeEvery(API_ACTIONS.FETCH_START, onApiLoad));
  //   // console.log("value saga =>", getSaga.next().value);
  // });
});
