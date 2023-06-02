describe("Product Navigation", () => {
    it("should navigate to a LAPTOP product category and view products", () => {
      cy.visit("https://www.demoblaze.com/");
      cy.contains("Laptops").click();
      cy.url().should("include", "/#");
  
      cy.contains("Sony vaio i5")
      cy.contains("Sony vaio i7")
      cy.contains("MacBook air")
      
      cy.get(".hrefch").first().click();
      cy.url().should("include", `/prod.html?idp_`);
      cy.contains("Product description").should("be.visible");
    });
  
    it("should navigate to a PHONES product category and view products", () => {
      cy.visit("https://www.demoblaze.com/");
      cy.contains("Phones").click();
      cy.url().should("include", "/#");
  
      cy.contains("Samsung galaxy s6")
      cy.contains("Nokia lumia 1520")
      cy.contains("Nexus 6")
  
      cy.get(".hrefch").first().click();
      cy.url().should("include", `/prod.html?idp_`);
      cy.contains("Product description").should("be.visible");
    });
  
    it("should navigate to a MONITORS product category and view products", () => {
      cy.visit("https://www.demoblaze.com/");
      cy.contains("Monitors").click();
      cy.url().should("include", "/#");
  
      cy.contains("Apple monitor 24")
      cy.contains("ASUS Full HD")
  
      cy.get(".hrefch").first().click();
      cy.url().should("include", `/prod.html?idp_`);
      cy.contains("Product description").should("be.visible");
    });
  
  });