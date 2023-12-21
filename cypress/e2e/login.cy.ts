///<reference types="cypress"/>

describe('gives the authentication of login', () => {
  it('Checks the login authentication', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('.login');  
    cy.get('[data-cy="email"]').type('joshuaomondi3334@gmail.com');
    cy.get('[data-cy="password"]').type('12345678@Jo');
    cy.get('[data-cy="submit-btn"]').click();
  });
});
