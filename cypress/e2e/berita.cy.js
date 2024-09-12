describe('Section Berita', () => {

  // Mengabaikan error yang berasal dari cross-origin
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Mengembalikan false agar Cypress tidak gagal ketika menemukan uncaught error
    return false;
  })

  it('Navigate to news 1', () => {
    // Akses halaman utama
    cy.visit('/');

    // Klik berita pertama pada halaman
    cy.get('.card-body > :nth-child(1) > :nth-child(3) > :nth-child(2) > :nth-child(1)')
      .click();

    // Verifikasi bahwa berita berisi teks tertentu
    cy.get('.p-3 > .color-main')
      .should('contain', 'BAZNAS dukung Target Akreditasi Unggul Program Studi Mazawa')

    // Scroll ke elemen 'Syarat & Ketentuan'
    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()
  })

  it('Navigate to news 2', () => {

    // Akses halaman utama
    cy.visit('/');

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .row')
      .click();

    cy.get('.p-3 > .color-main')
      .should('contain', 'Lebaran Yatim : BAZNAS Berikan bantuan kepada yatim dan difabel')

    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()
  })

  it('Navigate to news 3', () => {

    // Akses halaman utama
    cy.visit('/');

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(2)')
      .click();

    cy.get('.p-3 > .color-main')
      .should('contain', 'BAZNAS Provinsi Sumatera Selatan menyelenggarakan Khitanan Massal bagi anak yang kurang mampu.')

    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()
  })

  it('Navigate to news 4', () => {

    // Akses halaman utama
    cy.visit('/');

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(3)')
      .click();

    cy.get('.p-3 > .color-main')
      .should('contain', 'BAZNAS Prov sumsel Kunjungi Sumedang untuk Sharing Program')

    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()

  })

  it('Navigate to load more berita', () => {

    cy.visit('/');

    cy.get(':nth-child(3) > .col-12.text-center > .btn')
      .click();

    cy.get(':nth-child(1) > .col-12 > .row > .col-8 > div > a > .d-none')
      .should('contain', 'BAZNAS dukung Target Akreditasi Unggul Program Studi Mazawa')

    cy.go('back')
    cy.title().should('eq', 'BAZNAS')
  })
})