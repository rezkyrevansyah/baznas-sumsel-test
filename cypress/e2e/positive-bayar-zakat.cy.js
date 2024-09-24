describe('Bayar Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Positive Test', () => {

        cy.visit("https://kotayogya.baznas.go.id/bayarzakat")

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')

        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')
        cy.get('#jenis').select(1).should('have.value', 'zakatmaal', 'contains', 'Zakat Maal')
        cy.get('#jenis').select(2).should('have.value', 'zakatfitrah', 'contains', 'Zakat Fitrah')

        // Jenis dana Kurban
        cy.get('#type_of_fund').select(1).should('have.value', 'kurban', 'contains', 'Kurban')

        // cy.get('#jenis').select(0)
        cy.get('#jenis').select(1).should('have.value', 'infakkurbankambing', 'contains', 'Kurban Kambing (Estimasi Berat 12 kg )')
        cy.get('#jenis').select(2).should('have.value', 'infakkurbansapi', 'contains', 'Kurban Sapi (Estimasi Berat 200 kg )')
        cy.get('#jenis').select(3).should('have.value', 'infakkurbandomba', 'contains', 'Kurban Domba (Estimasi Berat 15 kg )')

        // jenis dana Infak
        cy.get('#type_of_fund').select(2).should('have.value', 'infak', 'contains', 'Infak')
        cy.get('#jenis').select(0).should('have.value', 'infaksedekah', 'contains', 'Infaq/Sedekah')

        // jenis dana DSKL
        cy.get('#type_of_fund').select(3).should('have.value', 'dskl', 'contains', 'DSKL')
        cy.get('#jenis').select(0).should('have.value', 'dskl', 'contains', 'DSKL')

        // jenis dana fidyah
        cy.get('#type_of_fund').select(4).should('have.value', 'fidyah', 'contains', 'Fidyah')
        cy.get('#jenis').select(0).should('have.value', 'dkslinfak', 'contains', 'Fidyah')

        cy.get('#hariid').select(0).should('have.value', '1', 'contains', '1')
        cy.get('#hariid').select(1).should('have.value', '1', 'contains', '1')
        cy.get('#hariid').select(2).should('have.value', '2', 'contains', '2')
        cy.get('#hariid').select(3).should('have.value', '3', 'contains', '3')
        cy.get('#hariid').select(4).should('have.value', '4', 'contains', '4')
        cy.get('#hariid').select(5).should('have.value', '5', 'contains', '5')
        cy.get('#hariid').select(6).should('have.value', '6', 'contains', '6')
        cy.get('#hariid').select(7).should('have.value', '7', 'contains', '7')
        cy.get('#hariid').select(8).should('have.value', '8', 'contains', '8')
        cy.get('#hariid').select(9).should('have.value', '9', 'contains', '9')
        cy.get('#hariid').select(10).should('have.value', '10', 'contains', '10')
        cy.get('#hariid').select(11).should('have.value', '11', 'contains', '11')
        cy.get('#hariid').select(12).should('have.value', '12', 'contains', '12')
        cy.get('#hariid').select(13).should('have.value', '13', 'contains', '13')
        cy.get('#hariid').select(14).should('have.value', '14', 'contains', '14')
        cy.get('#hariid').select(15).should('have.value', '15', 'contains', '15')
        cy.get('#hariid').select(16).should('have.value', '16', 'contains', '16')
        cy.get('#hariid').select(17).should('have.value', '17', 'contains', '17')
        cy.get('#hariid').select(18).should('have.value', '18', 'contains', '18')
        cy.get('#hariid').select(19).should('have.value', '19', 'contains', '19')
        cy.get('#hariid').select(20).should('have.value', '20', 'contains', '20')
        cy.get('#hariid').select(21).should('have.value', '21', 'contains', '21')
        cy.get('#hariid').select(22).should('have.value', '22', 'contains', '22')
        cy.get('#hariid').select(23).should('have.value', '23', 'contains', '23')
        cy.get('#hariid').select(24).should('have.value', '24', 'contains', '24')
        cy.get('#hariid').select(25).should('have.value', '25', 'contains', '25')
        cy.get('#hariid').select(26).should('have.value', '26', 'contains', '26')
        cy.get('#hariid').select(27).should('have.value', '27', 'contains', '27')
        cy.get('#hariid').select(28).should('have.value', '28', 'contains', '28')
        cy.get('#hariid').select(29).should('have.value', '29', 'contains', '29')
        cy.get('#hariid').select(30).should('have.value', '30', 'contains', '30')

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000")

        // title
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')
        cy.get('#user_title').select(2).should('have.value', 'Ibu', 'contains', 'Ibu')
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')

        // nama
        cy.get('#name').eq(0).type("testing")

        // no hp
        cy.get('#handphone').eq(0).type("0812344856789")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)

        // button bank mandiri
        cy.get('#trmandiriid > [style="width: 100px;text-align: left;"]').click()

        cy.get('#pay-button').click()

        // cy.get('#header > div.title-bar')

    })
})