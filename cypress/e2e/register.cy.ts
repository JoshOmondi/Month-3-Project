describe('template spec', () => {
  it('checks the registration authentication', () => {
    cy.visit('https://localhost:4000/register');
    cy.get('.container');
    cy.get('[data-cy="fullName"]');
    cy.get('[data-cy="email"]');
    cy.get('[data-cy="password"]');
    cy.get('[data-cy="confirmpassword"]');
  })
})