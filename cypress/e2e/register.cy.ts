describe('template spec', () => {
  it('checks the registration authentication', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('.container');
    cy.get('[data-cy="fullName"]').type('Joshua Omondi');
    cy.get('[data-cy="email"]').type('joshuaomondi3334@gmail.com');
    cy.get('[data-cy="password"]').type('12345678@Jo');
    cy.get('[data-cy="confirmpassword"]').type('12345678@Jo');
    cy.get('[data-cy="submit-btn"]').click();
  });
});
