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
  
  describe("Contact Page Tests", () => {
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com");
      cy.get("a.nav-link").contains("Contact").click();
    });
  
    it("should display the contact form", () => {
      cy.get("#recipient-email").should("be.visible");
      cy.get("#recipient-name").should("be.visible");
      cy.get("#message-text").should("be.visible");
      cy.get(".btn").should("contain", "Send message");
    });
  
    it("should submit the contact form successfully", () => {
      cy.window().then((win) => {
        cy.stub(win, "alert").as("windowAlert");
      });
  
      const name = "John Doe";
      const email = "johndoe@example.com";
      const message = "This is a test message";
  
      cy.get("#recipient-name").typeWithDelay(name);
      cy.get("#recipient-email").typeWithDelay(email);
      cy.get("#message-text").typeWithDelay(message);
  
      cy.get(".btn").contains("Send message").click();
      cy.get("@windowAlert").should("be.calledWith", "Thanks for the message!!");
    });
  });