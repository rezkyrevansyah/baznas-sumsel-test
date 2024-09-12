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
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > a > .border')
      .click();

    // Verifikasi bahwa berita berisi teks tertentu
    cy.get('.p-3 > .color-main')
      .should('contain', 'PEDULI YATIM, BAZNAS BERSAMA HASNUR GROUP BERIKAN SANTUNAN')

    // Scroll ke elemen 'Syarat & Ketentuan'
    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()
  })

  it('Navigate to news 2', () => {

    // Akses halaman utama
    cy.visit('/');

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(1)')
      .click();

    cy.get('.p-3 > .color-main')
      .should('contain', 'HUT KE 79, BAZNAS Prov. Sumsel berharap RRI terus menjadi inspirasi menyuarakaan keindonesiaan')

    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()
  })

  it('Navigate to news 3', () => {

    // Akses halaman utama
    cy.visit('/');

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .row')
      .click();

    cy.get('.p-3 > .color-main')
      .should('contain', 'BAZNAS dukung Target Akreditasi Unggul Program Studi Mazawa')

    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()
  })

  it('Navigate to news 4', () => {

    // Akses halaman utama
    cy.visit('/');

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(3)')
      .click();

    cy.get('.p-3 > .color-main')
      .should('contain', 'Lebaran Yatim : BAZNAS Berikan bantuan kepada yatim dan difabel')

    cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
      .scrollIntoView()

  })

  it('Navigate to load more berita', () => {

    cy.visit('/');

    cy.get(':nth-child(3) > .col-12.text-center > .btn')
      .click();

    cy.get(':nth-child(1) > .col-12 > .row > .col-8 > div > a > .d-none')
      .should('contain', 'PEDULI YATIM, BAZNAS BERSAMA HASNUR GROUP BERIKAN SANTUNAN')

    cy.go('back')
    cy.title().should('eq', 'BAZNAS')
  })
})