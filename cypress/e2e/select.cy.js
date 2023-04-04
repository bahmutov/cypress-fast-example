// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('selects option 2', () => {
  cy.visit('index.html')
  cy.get('fast-select')
    .should('have.attr', 'current-value', '1')
    .click()
    .should('have.class', 'open')
    .find('[role=listbox]', { includeShadowDom: true })
    .should('be.visible')
    .get('fast-option')
    .should('have.length', 3)
    .wait(1000) // to make the dropdown visible in the demo
    .contains('fast-option', 'Option 2', { includeShadowDom: true })
    .should('have.attr', 'aria-selected', 'false')
    .click()
  cy.get('fast-select')
    .should('have.attr', 'current-value', '2')
    // the dropdown is closed automatically
    .find('[role=listbox]', { includeShadowDom: true })
    .should('not.be.visible')
})
