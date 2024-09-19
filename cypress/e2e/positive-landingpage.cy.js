describe('BAZNAS Sumsel Website Test - Positive Case', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('Visits the BAZNAS Sumsel website and performs actions', () => {

        // Masuk ke web baznas sumsel
        cy.visit('/');

        // Klik top navbar -> beranda dan cek title halaman
        cy.get('#navbar > div > center > a > img').click();
        cy.title().should('eq', 'BAZNAS');

        // Klik hamburger menu -> slide menu open
        cy.get('#navbar > ul > li > a').click();
        cy.get('.sidebar').should('be.visible');

        cy.get('#navbar > ul > li > a').click();
        cy.get('.sidebar').should('not.be.visible');

        // Klik berita 1 dan cek apakah elemen yang dituju muncul
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(1) > a > div:nth-child(2) > div:nth-child(1) > p').click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4').should('exist');
        cy.go('back')

        // Klik berita 2 dan cek apakah elemen yang dituju muncul
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(2) > div:nth-child(1) > div > div.col-8.pl-2 > a > div:nth-child(1) > h6').click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4').should('exist');
        cy.go('back')

        // Klik berita 3 dan cek apakah elemen yang dituju muncul
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(2) > div:nth-child(2) > div > div.col-8.pl-2 > a > div:nth-child(1) > h6').click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4').should('exist');
        cy.go('back')

        // Klik berita 4 dan cek apakah elemen yang dituju muncul
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(2) > div:nth-child(3) > div > div.col-8.pl-2 > a > div:nth-child(1) > h6').click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4').should('exist');
        cy.go('back')

        // Klik tombol "Load More" dan cek apakah elemen yang dituju muncul
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.col-12.text-center > a').click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div.owl-stage-outer > div > div:nth-child(13) > div > div.bg-main > h5.text-white.font-weight-bold.p-3.d-none.d-sm-block').should('exist');
        cy.go('back')

        // klik bottom navbar rekening zakat -> halaman rekening
        cy.get('#control_sidebar > div > div > footer > div > div:nth-child(1) > h3 > a > img').parent().click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(2) > div > div > h4').should('exist');

        // klik bottom navbar konfirmasi zakat -> halaman konfirmasi
        cy.get('#control_sidebar > div > div > footer > div > div:nth-child(2) > h3 > a > img').parent().click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div > div > p.color-main.font-weight-bold')
            .should('exist');

        // klik bottom navbar bayar zakat online -> halaman bayar zakat online
        cy.get('#control_sidebar > div > div > footer > div > div:nth-child(3) > h3 > a > img').parent().click();
        cy.get('#signstep > div > div > h4').should('exist');

        // klik bottom navbar kalkulator zakat -> halaman kalkulator zakat
        cy.get('#control_sidebar > div > div > footer > div > div:nth-child(5) > h3 > a > img').parent().click();
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div:nth-child(1) > h4').should('exist');

        // klik top navbar -> halaman utama
        cy.get('.brand-image').parent().click();
        cy.get('#navbar > div > center > a > h6').should('exist');
    });
});
