describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://baznas.go.id/')

    cy.get('.close > span').click()

    cy.get(':nth-child(1) > .card > .card-body > .card-link').click()

    cy.go('back')

    cy.get(':nth-child(2) > .card > .card-body > .card-link').click()

    cy.go('back')
    cy.reload()

    cy.get('#owl-news > a > :nth-child(2) > [style="height:50px;line-height: 19px; overflow: hidden;"] > .font-weight-bold').click()

    cy.visit('https://baznas.go.id/')

    cy.get('#owl-program-smalls > :nth-child(1) > .row > .col-8 > a > [style="height:38px;overflow:hidden;"] > .text-capitalize').click()

    cy.visit('https://baznas.go.id/')
  })
})