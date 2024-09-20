describe('Bayar Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Negative Test', () => {

        cy.visit("https://sumsel.baznas.go.id/bayarzakat#")

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0)

        cy.get('#jenis').select(0)
        cy.get('#jenis').select(1)

        // Jenis dana infak
        cy.get('#type_of_fund').select(1)
        cy.get('#jenis').select(0)

        // jenis dana fidyah
        cy.get('#type_of_fund').select(2)
        cy.get('#jenis').select(0)

        cy.get('#hariid').select(0)
        cy.get('#hariid').select(1)
        cy.get('#hariid').select(2)
        cy.get('#hariid').select(3)
        cy.get('#hariid').select(4)
        cy.get('#hariid').select(5)
        cy.get('#hariid').select(6)
        cy.get('#hariid').select(7)
        cy.get('#hariid').select(8)
        cy.get('#hariid').select(9)
        cy.get('#hariid').select(10)
        cy.get('#hariid').select(11)
        cy.get('#hariid').select(12)
        cy.get('#hariid').select(13)
        cy.get('#hariid').select(14)
        cy.get('#hariid').select(15)
        cy.get('#hariid').select(16)
        cy.get('#hariid').select(17)
        cy.get('#hariid').select(18)
        cy.get('#hariid').select(19)
        cy.get('#hariid').select(20)
        cy.get('#hariid').select(21)
        cy.get('#hariid').select(22)
        cy.get('#hariid').select(23)
        cy.get('#hariid').select(24)
        cy.get('#hariid').select(25)
        cy.get('#hariid').select(26)
        cy.get('#hariid').select(27)
        cy.get('#hariid').select(28)
        cy.get('#hariid').select(29)

        // jumlah hari
        cy.get('#hariid').select(2)

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0)

        cy.get('#jenis').select(0)
        cy.get('#jenis').select(1)

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
        cy.get('#next-button').click().wait(150)

        cy.get('#user_title-error').contains("This field is required.")
        cy.get('#handphone-error').contains("Mohon Masukkan Nomor Handphone Untuk Pengiriman Bukti Bayar")
        cy.get('#email-error').contains("Mohon Masukkan Email untuk pengiriman Bukti Bayar")

        // button bank mandiri
        // cy.get('#trmandiriid > [style="width: 100px;text-align: left;"]').click()

        // cy.get('#pay-button').click()

        // cy.get('#header > div.title-bar')

    })
})