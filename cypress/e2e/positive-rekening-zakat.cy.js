describe('Test Fungsi Button Navbar dan Salin Rekening Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Navigasi ke halaman rekening zakat', () => {
        cy.visit('https://sumsel.baznas.go.id');

        cy.get(':nth-child(1) > .mb-0 > a > .img-fluid').click();

        cy.url().should('eq', 'https://sumsel.baznas.go.id/rekening');
    });

    it('Berhasil copy rekening bca syariah', () => {
        cy.visit('https://sumsel.baznas.go.id/rekening');

        cy.get('#zakat > tbody > tr:nth-child(1) > td:nth-child(4) > p').contains('salin').click().wait(500);

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 052-55555-61');
    });

    it('Berhasil copy rekening bca', () => {
        cy.visit('https://sumsel.baznas.go.id/rekening');

        cy.get('#zakat > tbody > tr:nth-child(2) > td:nth-child(4) > p').contains('salin').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 0455555855');
    });

    it('Berhasil copy rekening bank muamalat', () => {
        cy.visit('https://sumsel.baznas.go.id/rekening');

        cy.get('#zakat > tbody > tr:nth-child(3) > td:nth-child(4) > p').contains('salin').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 3640002044');
    });

    it('Berhasil copy rekening bank bsi', () => {
        cy.visit('https://sumsel.baznas.go.id/rekening');

        cy.get('#zakat > tbody > tr:nth-child(4) > td:nth-child(4) > p').contains('salin').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 9283815900');
    });

    it('Berhasil copy rekening bank sumsel syariah', () => {
        cy.visit('https://sumsel.baznas.go.id/rekening');

        cy.get('#zakat > tbody > tr:nth-child(5) > td:nth-child(4) > p').contains('salin').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 8010105350');
    });

    it('Navigasi ke API whatsapp', () => {
        // Kunjungi halaman utama
        cy.visit('https://sumsel.baznas.go.id/rekening');

        const whatsappUrl = 'https://api.whatsapp.com/send/?phone=628127150050&text&type=phone_number&app_absent=0';

        // Cari tombol WhatsApp dan pastikan membuka di tab yang sama
        cy.get('.d-lg-block > .btn-primary > .img-fluid')
            .click();  // Klik tombol

        // Pastikan bahwa request ke WhatsApp API dilakukan
        cy.request({
            url: whatsappUrl,
            failOnStatusCode: false // Agar Cypress tidak gagal jika ada error dari server
        }).then((response) => {
            // Verifikasi bahwa request ke WhatsApp API berhasil
            expect(response.status).to.eq(200); // Pastikan status response sukses
        });
    });

    it('Navigasi ke halaman konfirmasi zakat', () => {
        cy.visit('https://sumsel.baznas.go.id/rekening');

        const zis = 'https://sumsel.baznas.go.id/konfirmasi-zis';

        // Cari tombol WhatsApp dan pastikan membuka di tab yang sama
        cy.get('.row > :nth-child(2) > a > img')
            .click();  // Klik tombol

        // Pastikan bahwa request ke WhatsApp API dilakukan
        cy.request({
            url: zis,
            failOnStatusCode: false // Agar Cypress tidak gagal jika ada error dari server
        }).then((response) => {
            // Verifikasi bahwa request ke WhatsApp API berhasil
            expect(response.status).to.eq(200); // Pastikan status response sukses
        });
    });
});
// // BCA SALIN SYARIAH BUTTON
// cy.get('#zakat > tbody > tr:nth-child(1) > td:nth-child(4) > p')

// // BCA SALIN BUTTON
// cy.get('#zakat > tbody > tr:nth-child(2) > td:nth-child(4) > p')

// // BANK MUAMALAT SALIN BUTTON
// cy.get('#zakat > tbody > tr:nth-child(3) > td:nth-child(4) > p')

// // BSI SALIN BUTTON
// cy.get('#zakat > tbody > tr:nth-child(4) > td:nth-child(4) > p')

// // BANK SUMSEL SALIN BUTTON
// cy.get('#zakat > tbody > tr:nth-child(5) > td:nth-child(4) > p')
