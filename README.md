# Baznas Sumsel Landing Page Test

Landing page test untuk Baznas Sumsel.

<p align="center">
  <img src="https://raw.githubusercontent.com/rezkyrevansyah/baznas-sumsel-test/main/cypress/assets/reportSuccess.png" alt="Test Success">
</p>

## Documentation

- [Github Repo](https://github.com/rezkyrevansyah/baznas-sumsel-test)
- [Test Report](https://drive.google.com/file/d/1WWsAkfpyQtExwi3JiblBqp4hRg4JBTA3/view?usp=sharing)

> **Note Test Report**: Download lalu drag and drop pada browser.

## Test Berhasil dengan Catatan

1. Test didahului dengan script berikut untuk mengabaikan error yang berasal dari **cross-origin**:

   ```javascript
   Cypress.on("uncaught:exception", (err, runnable) => {
     // Mengembalikan false agar Cypress tidak gagal ketika menemukan uncaught error
     return false;
   });
   ```

   Jika tidak ditambahkan, test akan menghasilkan error seperti berikut:

   <p align="center">
     <img src="https://raw.githubusercontent.com/rezkyrevansyah/baznas-sumsel-test/main/cypress/assets/errorUrl.png" alt="Error URL">
   </p>

2. Pada setiap section test, harus didahului dengan:

   ```javascript
   // Akses halaman utama
   cy.visit("/");
   ```

3. Tidak bisa menggunakan perintah berikut:

   ```javascript
   cy.go("back");
   cy.waitFor(9000);
   ```

   Karena akan menghasilkan error seperti berikut:

   <p align="center">
     <img src="https://raw.githubusercontent.com/rezkyrevansyah/baznas-sumsel-test/main/cypress/assets/errorBack.png" alt="Error Back">
   </p>
