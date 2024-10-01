// sapaan tidak diisi
// nama tidak diisi
// no telp tidak diisi
// email tidak diisi

describe('Bayar Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Negative Test semua kosong', () => {

        cy.visit("https://kotayogya.baznas.go.id/bayarzakat#")

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000")

        // title
        cy.get('#user_title')

        // nama
        cy.get('#name')

        // no hp
        cy.get('#handphone')

        // email
        cy.get('#email').eq(0)

        // button next
        cy.get('#next-button').click()

        // cy.get('#nominal-error').contains("Mohon Masukkan Nominal Donasi")
        cy.get('#user_title-error').contains("This field is required.")
        cy.get('#name-error').contains("Mohon Masukkan Nama")
        cy.get('#handphone-error').contains("Mohon Masukkan Nomor Handphone Untuk Pengiriman Bukti Bayar")
        cy.get('#email-error').contains("Mohon Masukkan Email untuk pengiriman Bukti Bayar")

        // button bank mandiri
        // cy.get('#trmandiriid > [style="width: 100px;text-align: left;"]').click()

        // cy.get('#pay-button').click()

        // cy.get('#header > div.title-bar')

    })

    // it('Negative Test', () => {

    // })
})