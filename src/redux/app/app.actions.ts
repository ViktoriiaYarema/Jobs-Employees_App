export const APP_ACTIONS = {
  FILTER_EMPLOYEES_BYJOB: "FILTER_EMPLOYEES_BYJOB",
};

export const appAction = {
  filterJob: (filterBy: string) => ({
    type: APP_ACTIONS.FILTER_EMPLOYEES_BYJOB,
    payload: filterBy,
  })
};
