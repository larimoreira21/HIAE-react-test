describe("Details screen", () => {
  it("should show the Microsoft ticker details", () => {
    cy.visit("http://localhost:3000/details/MSFT");

    cy.wait(5000);

    cy.get("[data-cy=details-box]").contains(/Ticker: MSFT/i);

    cy.get(".recharts-wrapper")
      .should("be.visible")
      .and((chart) => {
        expect(chart.height()).to.be.greaterThan(200);
      });
  });
});
