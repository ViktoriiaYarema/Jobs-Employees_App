export const APP_ACTIONS = {
  FILTER_EMPLOYEES: "FILTER_EMPLOYEES",
};

export const appAction = {
  filterJob: (filterBy: string) => ({
    type: APP_ACTIONS.FILTER_EMPLOYEES,
    payload: filterBy,
  }),
};
