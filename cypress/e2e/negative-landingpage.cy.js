describe('BAZNAS Sumsel Website Test - Negative Case', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Visits the BAZNAS Sumsel website and performs negative test actions', () => {

        // Masuk ke web baznas sumsel
        cy.visit('/');

        // Cek apakah title halaman tidak sesuai dengan yang diharapkan
        cy.title().should('not.eq', 'BAZNAS');

        // Coba klik logo pada navbar, lalu cek apakah elemen tertentu tidak ada
        cy.get('#navbar > div > center > a > img').click();
        cy.get('.non-existent-element').should('not.exist');

        // Coba buka menu yang salah atau tidak ada dan pastikan menu tidak muncul
        cy.get('#navbar > ul > li > a.non-existent').click({ force: true });
        cy.get('#navbar > ul').should('not.be.visible');

        // Coba klik berita yang salah dan cek elemen yang salah
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(5) > a > div:nth-child(2) > div:nth-child(1) > p')
            .click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(10) > div.p-3 > h4')
            .should('not.exist');

        // Coba klik tombol "Load More" yang salah dan cek apakah elemen muncul
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.col-12.text-center > a')
            .click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(100) > div > div.bg-main > h5.text-white.font-weight-bold.p-3.d-none.d-sm-block')
            .should('not.exist');

        // Coba klik bottom navbar pada link yang salah dan cek apakah halaman tidak sesuai
        cy.get('#control_sidebar > div > div > footer > div > div:nth-child(10) > h3 > a > img').parent().click();
        cy.url().should('not.include', '/wrong-page');

        // Coba akses halaman konfirmasi zakat yang salah dan cek apakah elemen tidak ada
        cy.get('#control_sidebar > div > div > footer > div > div:nth-child(5) > h3 > a > img').parent().click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div > div > p.color-main.font-weight-bold')
            .should('not.exist');

        // Kembali ke halaman utama dan cek apakah elemen utama tidak ada
        cy.get('.brand-image').parent().click();
        cy.get('#navbar > div > center > a > h6').should('not.exist');
    });
});
