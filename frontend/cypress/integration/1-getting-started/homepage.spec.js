/// <reference types="cypress" />

describe('STF home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should load our app and show content', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Split!')
  })
})
