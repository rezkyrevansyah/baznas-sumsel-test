describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://baznas.go.id/')

    cy.get('.close > span').click()

    cy.get(':nth-child(1) > .card > .card-body > .card-link').click()

    cy.go('back')

    cy.get(':nth-child(2) > .card > .card-body > .card-link').click()

    cy.go('back')
    cy.reload()
  })
})