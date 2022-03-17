import { getRoutes } from "../../routes/routes";
import { ApiEnum } from "../../api/models/api.enum";
// import { mount } from "cypress-react-unit-test";

describe("check jobs tests", () => {
  it("display data", () => {
    cy.visit(getRoutes().home.url);

    // cy.get('li:first-child').click().should('have.')
    cy.get("h3").should("have.text", ApiEnum.Jobs.toUpperCase());
  });
});
