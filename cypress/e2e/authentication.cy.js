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
  
  describe("Signup and Login Tests", () => {
    let uniqueUsername = `testuser${Cypress._.random(0, 9999)}`;
    let uniquePassword = `testpass${Cypress._.random(0, 9999)}`;
  
    beforeEach(() => {
      cy.visit("https://www.demoblaze.com");
    });
  
    it("should allow user signup", () => {
      cy.window().then((win) => {
        cy.stub(win, "alert").as("windowAlert");
      });
  
      cy.get("#signin2").click();
      cy.get("#sign-username").typeWithDelay(uniqueUsername);
      cy.get("#sign-password").typeWithDelay(uniquePassword);
      cy.get(
        "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
  
      cy.get("@windowAlert").should("be.calledWith", "Sign up successful.");
    });
  
    it("should allow user login and logout", () => {
      cy.get("#login2").click();
      cy.get("#loginusername").typeWithDelay(uniqueUsername);
      cy.get("#loginpassword").typeWithDelay(uniquePassword);
      cy.get(
        "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
      ).click();
  
      cy.contains("Welcome").should("be.visible");
  
      cy.get("#logout2").click();
      cy.url().should("include", "/index.html");
      cy.contains("Welcome").should("not.exist");
    });
  });