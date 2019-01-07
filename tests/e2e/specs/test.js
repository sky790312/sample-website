// https://docs.cypress.io/api/introduction/api.html

describe('Sample website', () => {
  it('Should the app root url redirect to news page', () => {
    cy.visit('/')
    cy.url().should('include', '/news')
  })

  it('Should default have 15 card display', () => {
    cy.visit('/')
    cy.get('.card').should('have.length', 15)
  })

  it('Should load 15 more card after click button', () => {
    cy.visit('/')
    cy.get('.load-more').click()
    cy.get('.card').should('have.length', 30)
  })

  it('Should switch page in header', () => {
    cy.visit('/')
    cy.get('.page-tab.Regions').click()
    cy.url().should('include', '/regions')
  })

  it('Should switch page in footer', () => {
    cy.visit('/')
    cy.get('.page.Regions').click()
    cy.url().should('include', '/regions')
  })
})
