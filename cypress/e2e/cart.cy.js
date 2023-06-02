describe("Add to Cart", () => {
    it("should add a product to the cart", () => {
      cy.visit("https://www.demoblaze.com/");
      cy.contains("Laptops").click();
      cy.get(".hrefch").first().click();
      cy.contains("Add to cart").click();
  
      cy.on("window:alert", (text) => {
        expect(text).to.include("Product added");
        cy.get(".btn-success").contains("Add to cart").click();
  
        cy.url().should("include", "/cart.html");
        cy.contains("Samsung galaxy s6").should("be.visible");
      });
    });
  });

  describe('Cart Button Tests', () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com/");
      cy.contains("Laptops").click();
      cy.get(".hrefch").first().click();
      cy.contains("Add to cart").click();
    })
  
    it('should navigate to the cart page', () => {
      cy.get('#cartur').click()
      cy.url().should('include', '/cart.html')
      cy.get('h2').should('contain', 'Products')
    })
  
    it('should display the cart items', () => {
      cy.get('#cartur').click()
      cy.get('#page-wrapper').should('be.visible').contains('Sony vaio i5')
    })
  
    it('should remove items from the cart', () => {
      cy.visit("https://www.demoblaze.com/");
      cy.get('#cartur').click()
      cy.get("a").contains("Delete").click()
      cy.contains("Sony vaio i5").should("not.exist");
    })
  })