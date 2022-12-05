describe("Home screen", () => {
  it("should search for the Microsoft ticker", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#stocks-finder").type("MSFT");

    cy.wait(1500);

    cy.get('li[data-option-index="0"]').click();
  });
});
