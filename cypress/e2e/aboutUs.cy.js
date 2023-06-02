describe("About Us Navigation Test", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com");
    });
  
    it("should navigate to the About Us page", () => {
      cy.get("a.nav-link").contains("About us").click();
      cy.get("#videoModalLabel").should("contain", "About us");
      cy.get(".vjs-poster").should('be.visible');
    });
  });