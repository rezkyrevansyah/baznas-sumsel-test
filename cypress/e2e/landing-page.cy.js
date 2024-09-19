describe('Section Landing Page', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  // Sebelum memulai setiap tes, lakukan visit ke halaman utama
  beforeEach(() => {
    cy.visit('https://sumsel.baznas.go.id/');
  });

  it('Should verify the title is "BAZNAS" after clicking Beranda on the top navbar', () => {
    // Klik logo pada navbar untuk kembali ke Beranda
    cy.get('#navbar > div > center > a > img').click();

    // Verifikasi bahwa judul halaman adalah "BAZNAS"
    cy.title().should('eq', 'BAZNAS');
  });

  it('Should open hamburger menu when clicked', () => {
    // Klik hamburger menu untuk membuka slide menu
    cy.get('#navbar > ul > li > a').click();

    // Verifikasi bahwa menu terbuka
    cy.get('#navbar > ul').should('be.visible');
  });

  it('Should navigate to detail of Berita 1 and verify the content exists', () => {
    // Klik Berita 1
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(1) > a > div:nth-child(2) > div:nth-child(1) > p')
      .parent().click();

    // Verifikasi bahwa elemen pada detail Berita 1 ada
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4')
      .should('exist');
  });

  it('Should navigate to detail of Berita 2 and verify the content exists', () => {
    // Klik Berita 2
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(2) > div:nth-child(1) > div > div.col-8.pl-2 > a > div:nth-child(1) > h6')
      .parent().click();

    // Verifikasi bahwa elemen pada detail Berita 2 ada
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4')
      .should('exist');
  });

  it('Should navigate to detail of Berita 3 and verify the content exists', () => {
    // Klik Berita 3
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(2) > div:nth-child(2) > div > div.col-8.pl-2 > a > div:nth-child(1) > h6')
      .parent().click();

    // Verifikasi bahwa elemen pada detail Berita 3 ada
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4')
      .should('exist');
  });

  it('Should navigate to detail of Berita 4 and verify the content exists', () => {
    // Klik Berita 4
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.row > div:nth-child(2) > div:nth-child(3) > div > div.col-8.pl-2 > a > div:nth-child(1) > h6')
      .parent().click();

    // Verifikasi bahwa elemen pada detail Berita 4 ada
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div.p-3 > h4')
      .should('exist');
  });

  it('Should load more news when clicking the Load More button and verify new content is displayed', () => {
    // Klik tombol Load More
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(3) > div.col-12.text-center > a')
      .parent().click();

    // Verifikasi bahwa berita tambahan telah dimuat
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div.owl-stage-outer > div > div:nth-child(13) > div > div.bg-main > h5.text-white.font-weight-bold.p-3.d-none.d-sm-block')
      .should('exist');
  });

  it('klik bottom navbar rekening zakat -> halaman rekening', () => {
    cy.get('#control_sidebar > div > div > footer > div > div:nth-child(1) > h3 > a > img').parent().click();
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(2) > div > div > h4').should('exist');
  });

  it('klik bottom navbar konfirmasi zakat -> halaman konfirmasi', () => {
    cy.get('#control_sidebar > div > div > footer > div > div:nth-child(2) > h3 > a > img').parent().click();
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div > div > p.color-main.font-weight-bold')
      .should('exist');
  });

  it('klik bottom navbar bayar zakat online -> halaman bayar zakat online', () => {
    cy.get('#control_sidebar > div > div > footer > div > div:nth-child(3) > h3 > a > img').parent().click();
    cy.get('#signstep > div > div > h4').should('exist');
  });

  it('klik bottom navbar kalkulator zakat -> halaman kalkulator zakat', () => {
    cy.get('#control_sidebar > div > div > footer > div > div:nth-child(5) > h3 > a > img').parent().click();
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div:nth-child(1) > h4').should('exist');
  });

  it('klik top navbar -> halaman utama', () => {
    cy.get('.brand-image').parent().click();
    cy.get('#navbar > div > center > a > h6').should('exist');
  });
});