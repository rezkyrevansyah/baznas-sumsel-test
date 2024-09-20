describe('Konfirmasi Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Positive Test', () => {

        cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');

        // test sapaan
        cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(1) > div > select').select(0).should('have.value', 'Bapak')
        cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(1) > div > select').select(1).should('have.value', 'Ibu')

        // test nama
        cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(2) > div > input').eq(0).type("testing")

        // test jenis pembayaran zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'Zakat')

        cy.get('#jenis').select(0).should('have.value', 'Zakat Penghasilan')
        cy.get('#jenis').select(1).should('have.value', 'Zakat Maal')

        // test jenis pembayaran infak
        cy.get('#type_of_fund').select(1).should('have.value', 'Infak')

        cy.get('#jenis').select(0)
        cy.get('#jenis').select(1)
        cy.get('#jenis').select(2)
        cy.get('#jenis').select(3)
        cy.get('#jenis').select(4)
        cy.get('#jenis').select(5)
        cy.get('#jenis').select(6)
        cy.get('#jenis').select(7)
        cy.get('#jenis').select(8)
        cy.get('#jenis').select(9)
        cy.get('#jenis').select(10)
        cy.get('#jenis').select(11)

        // test jenis pembayaran Sedekah
        cy.get('#type_of_fund').select(2).should('have.value', 'Sedekah')

        cy.get('#jenis').select(0)

        // test jenis pembayaran fidyah
        cy.get('#type_of_fund').select(3).should('have.value', 'Fidyah')

        cy.get('#jenis').select(0)

        // test jenis pembayaran kurban
        cy.get('#type_of_fund').select(4).should('have.value', 'Kurban')

        cy.get('#jenis').select(0)
        cy.get('#jenis').select(1)
        cy.get('#jenis').select(2)
        cy.get('#jenis').select(3)

        // test NPWZ
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').eq(0).type("00000")

        // test No HP
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').eq(0).type("00000")

        // test email
        cy.get('#email').eq(0).type("testing@gmail.com")

    })
})