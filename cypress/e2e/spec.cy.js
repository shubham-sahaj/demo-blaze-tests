describe("DemoBlaze", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com");
  });


  it("Visits the homepage", () => {
    cy.contains("Product Store").should("be.visible");
  });

  it('should navigate to the homepage when logo is clicked', () => {
    cy.get("#nava").click();
    cy.url().should("include", "/index.html");
  })

  it('should navigate to the homepage when home button is clicked', () => {
    cy.get("a.nav-link").contains("Home").click();
    cy.url().should("include", "/index.html");
  })
});

