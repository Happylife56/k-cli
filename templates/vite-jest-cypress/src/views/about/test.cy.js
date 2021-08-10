describe('My First Test', () => {
  it('Visits homepage', () => {
    cy.visit('/')
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`);
  });
});
