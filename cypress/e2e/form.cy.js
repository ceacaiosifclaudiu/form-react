describe("Login Page", {
  viewportHeight: 800,
  viewportWidth: 1200,
}, () => {
  it("Login form work", () => {
    cy.visit("http://localhost:5173");

    cy.get("input[type=submit]").contains("Login").click();

    cy.get("input[type='email']").eq(0).type("example@example.com");
    cy.get("input[type='password']").eq(0).type("Password1!");
    cy.get(".svg").eq(0).click();

    cy.get("input[type=submit]").contains("Login").click();
  });

  it("Signup page work", () => {
    cy.visit("http://localhost:5173");

    cy.get("span").contains("Create a account").click();
    cy.wait(1000);

    cy.get("input[type='submit']").contains("Create Account").click();

    cy.get("#input-first-name").type("Claudiu");
    cy.get("#input-last-name").type("Ceaca");

    cy.get("input[type='email']").eq(1).type("example@example.com");

    cy.get("input[type='password']").eq(1).type("Password1!");
    cy.get(".svg").eq(1).click();
    cy.get("#input-confirm-password").type("Password1!");
    cy.get(".svg").eq(2).click();

    cy.get("input[type='radio']", { name: "account" }).check("Personal");
    cy.get("select", { name: "pronounce" }).select("She/Her");
    cy.get('[type="checkbox"]', { name: /accept terms/i }).check();

    cy.get("input[type='submit']").contains("Create Account").click();
  });
});
