Cypress.Commands.add(
    "typeWithDelay",
    { prevSubject: true },
    (subject, text, delay = 5) => {
      cy.wrap(subject).clear().type(text.charAt(0), { delay });
      for (let i = 1; i < text.length; i++) {
        cy.wrap(subject).type(text.charAt(i), { delay });
      }
    }
  );

describe('Place Order Button Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com')
    })
  
    it('should add items to the cart and place an order', () => {
      cy.contains("Laptops").click();
      cy.get(".hrefch").first().click();
      cy.contains("Add to cart").click();

      cy.get('#cartur').click()
      cy.contains('Place Order').click()
  
      cy.get('#name').typeWithDelay('John Doe')
      cy.get('#country').typeWithDelay('United States')
      cy.get('#city').typeWithDelay('New York')
      cy.get('#card').typeWithDelay('1234567890')
      cy.get('#month').typeWithDelay('12')
      cy.get('#year').typeWithDelay('2025')
      cy.contains('Purchase').click()
  
      cy.get('.sweet-alert').should('contain.text', 'Id:')
      cy.get('.sweet-alert').should('contain.text', 'Amount:')
      cy.get('.sweet-alert').should('contain.text', 'Card Number:')
      cy.get('.sweet-alert').should('contain.text', 'Name:')
      cy.get('.sweet-alert').should('contain.text', 'Date:')
    })
  })
  