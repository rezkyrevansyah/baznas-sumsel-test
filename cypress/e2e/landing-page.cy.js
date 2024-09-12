describe('Landing Page Test', () => {
  // Mengabaikan error yang berasal dari cross-origin
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Mengembalikan false agar Cypress tidak gagal ketika menemukan uncaught error
    return false;
  })

  context("Navigasi navbar", () => {
    it('Navigate to baznas.go.id', () => {
      // Akses halaman utama dan verifikasi bahwa judul halaman adalah 'BAZNAS'
      cy.visit('/');
      cy.title().should('eq', 'BAZNAS')

      // Klik elemen navbar
      cy.get('#navbar')
        .click();

      // Pastikan setelah klik, ada teks 'PROVINSI SUMATERA SELATAN' pada elemen tertentu
      cy.get('a > .text-capitalize')
        .should('contain', 'PROVINSI SUMATERA SELATAN')

    })
  })

  context("Navigasi right navbar links", () => {
    it('Test navigasi ke Profil Baznas', () => {
      // Akses halaman utama
      cy.visit('/');

      // Klik hamburger menu pada navbar kanan
      cy.get('.navbar-nav > .nav-item > .nav-link')
        .click();

      // Klik tentang baznas pada navbar
      cy.get(':nth-child(2) > [href="#"]')
        .click();

      // Klik link profil baznas dari menu yang terbuka
      cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link')
        .click();

      // Verifikasi bahwa elemen yang berisi tag <b> mengandung teks 'Visi'
      cy.get('b')
        .should('contain', 'Visi')

      // Kembali ke halaman sebelumnya dan verifikasi judul halaman
      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })
  })

  context("Navigasi banner", () => {
    it('Navigate to baznas.go.id', () => {
      // Akses halaman utama
      cy.visit('/');

      // Klik banner yang aktif (dengan class '.active')
      cy.get('.active > .item > a > img')
        .click();

      // Verifikasi bahwa elemen setelah klik berisi teks 'PROVINSI SUMATERA SELATAN'
      cy.get('a > .text-capitalize')
        .should('contain', 'PROVINSI SUMATERA SELATAN')
    })
  })

  context("Section berita", () => {
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

      // Kembali ke halaman sebelumnya
      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to news 2', () => {

      cy.visit('/');

      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .row')
        .click();

      cy.get('.p-3 > .color-main')
        .should('contain', 'Lebaran Yatim : BAZNAS Berikan bantuan kepada yatim dan difabel')

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .scrollIntoView()

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to news 3', () => {

      cy.visit('/');

      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(2)')
        .click();

      cy.get('.p-3 > .color-main')
        .should('contain', 'BAZNAS Provinsi Sumatera Selatan menyelenggarakan Khitanan Massal bagi anak yang kurang mampu.')

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .scrollIntoView()

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to news 4', () => {

      cy.visit('/');

      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > :nth-child(3)')
        .click();

      cy.get('.p-3 > .color-main')
        .should('contain', 'BAZNAS Prov sumsel Kunjungi Sumedang untuk Sharing Program')

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .scrollIntoView()

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
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

  context("Section Agenda Pimpinan", () => {
    it('Navigate to agenda 1', () => {

      cy.visit('/');

      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1)')
        .click();

      cy.get('.p-3 > .color-main')
        .should('contain', 'Audiensi dan Silahturahmi BAZNAS bersama PT Semen Baturaja Tbk.')

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .scrollIntoView()

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to agenda 2', () => {

      cy.visit('/');

      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .row')
        .click();

      cy.get('.p-3 > .color-main')
        .should('contain', 'Penandatanganan MoU BAZNAS Prov. Sumsel dengan RRI Palembang')

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .scrollIntoView()

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to agenda 3', () => {

      cy.visit('/');

      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .row')
        .click();

      cy.get('.p-3 > .color-main')
        .should('contain', 'Audiensi dengan BAPPEDA Provinsi Sumatera Selatan')

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .scrollIntoView()

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to agenda 4', () => {

      cy.visit('/');

      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > :nth-child(3) > .row')
        .click();

      cy.get('.p-3 > .color-main')
        .should('contain', 'Monitoring dan evaluasi Klinik Ummat BAZNAS Prov. Sumsel')

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .scrollIntoView()

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to load more berita', () => {

      cy.visit('/');

      cy.get(':nth-child(4) > .col-12.text-center > .btn')
        .click();

      cy.get(':nth-child(1) > .col-12 > .row > .col-8 > div > a > .d-none')
        .should('contain', 'Audiensi dan Silahturahmi BAZNAS bersama PT Semen Baturaja Tbk.')

      cy.go('back');
      cy.title().should('eq', 'BAZNAS')
    })
  })

  context("Section Footer", () => {
    it('Navigate to Kebijakan Privasi', () => {

      cy.visit('/');

      cy.get('[href="https://sumsel.baznas.go.id/kebijakan-privasi"]')
        .click();

      cy.get('.mt-2 > .text-capitalize')
        .should('contain', 'kebijakan privasi')

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to syarat dan ketentuan', () => {

      cy.visit('/');

      cy.get('[href="https://sumsel.baznas.go.id/syarat-ketentuan"]')
        .click();

      cy.get('.mt-2 > .text-capitalize')
        .should('contain', 'syarat dan ketentuan')

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })

    it('Navigate to FAQ', () => {

      cy.visit('/');

      cy.get('[href="https://sumsel.baznas.go.id/faq-baznas"]')
        .click();

      cy.get('.mt-2 > .text-capitalize')
        .should('contain', 'frequently asked questions')

      cy.go('back')
      cy.title().should('eq', 'BAZNAS')
    })
  })

  context("Section Bottom Menu", () => {
    it('Navigate to Rekening Zakat', () => {

      cy.visit('/');

      cy.get(':nth-child(1) > .mb-0 > a > .font-10')
        .click();

      cy.get('.col-6 > .color-main')
        .should('contain', 'daftar rekening')
    })

    it('Navigate to Konfirmasi Zakat', () => {

      cy.visit('/');

      cy.get(':nth-child(2) > .mb-0 > a > .font-10')
        .click();

      cy.get('.container > :nth-child(2)')
        .should('contain', 'Terima Kasih atas Zakat, Infak, Sedekah, Kurban yang ditunaikan melalui BAZNAS')
    })

    it('Navigate to Bayar Zakat Online', () => {

      cy.visit('/');

      cy.get(':nth-child(3) > .mb-0 > a > .font-10')
        .click();

      cy.get('.position-absolute > .bg-yellow > .color-main')
        .should('contain', 'pilih jenis dana')
    })

    it('Navigate to Kalkulator Zakat', () => {

      cy.visit('/');

      cy.get(':nth-child(5) > .mb-0 > a > .font-10')
        .click();

      cy.get('.row > :nth-child(1) > .color-main')
        .should('contain', 'kalkulator zakat')

      cy.visit('/');
    })
  })
})