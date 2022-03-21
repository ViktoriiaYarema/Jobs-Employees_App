/* eslint-disable testing-library/await-async-utils */
/// <reference types="cypress" />

import { getRoutes } from "../../src/routes/routes";
import { ApiEnum } from "../../src/api/models/api.enum";
import { EmployeeType } from "../../src/enteties/entetiesEmloyees";

describe("check jobs tests", () => {
  beforeEach(() => {
    cy.visit(getRoutes().home.url);
  });

  // it("display fetch jobs list", () => {
  //   cy.intercept("GET", `https://5f7998dbe402340016f9321f.mockapi.io/jobs`).as(
  //     "jobsData"
  //   );
  //   cy.wait("@jobsData");
  // });

  it("display fetch employees list", function () {
    // cy.intercept(
    //   "GET",
    //   `https://5f7998dbe402340016f9321f.mockapi.io/providers`
    // ).as("employeesData");

    cy.request({
      method: "GET",
      url: "https://5f7998dbe402340016f9321f.mockapi.io/providers",
    }).then((response: any) => {
      const body = response.body;
      cy.wrap(JSON.stringify(body)).as("bodyData");
    });
  });

  it("display all data", () => {
    cy.contains("[data-test='title']", ApiEnum.Jobs.toUpperCase()).should(
      "be.visible"
    );
    cy.get("ul>li").should("not.have.length", 0);
  });

  it("click to job and get employee", function () {
    cy.get("li").first().click();
    cy.get("[data-test='employees-list']").children().should("have.length", 3);
    cy.get("[data-test='employees-list']")
      .children()
      .first()
      .click()
      .then((variable) => {
        const testVariable = variable.text().split(" ").pop();
        const testEmail = variable.text().split(" ")[2];
        cy.wrap(testVariable).as("jobNameClicked");
        cy.wrap(testEmail).as("jobEmail");
      });

    cy.get("@jobEmail").then((email) => {
      const myData: EmployeeType[] = JSON.parse(this.bodyData);

      const urlIdEmployee = Cypress._.find(
        myData,
        (employee: EmployeeType) =>
          email && employee.email === JSON.stringify(email) && employee
      );

      const id = Cypress._.get(urlIdEmployee, "id");

      id && cy.url().should("include", `/${id}`);
      cy.get("[data-cy='employee']").should("be.visible");
      cy.get("@jobNameClicked").then((jobName) => {
        jobName &&
          cy.get("[data-cy='employee-job']").should("include.text", jobName);
      });
    });
  });
});
