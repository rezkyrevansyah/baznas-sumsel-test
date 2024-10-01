<h1>Cypress Test for Right Navbar Navigation</h1>

<h2>Overview</h2>
<p>This repository contains Cypress tests to ensure the right navbar navigation on the BAZNAS Kota Yogyakarta website is functioning correctly. The test scenarios cover various navigation flows, including accessing the homepage, BAZNAS profile, and BAZNAS structure through the right navbar.</p>

<h2>Test Scenarios</h2>

<h3>1. Verifying the user can successfully navigate to the homepage via the hamburger menu</h3>
<ul>
    <li><strong>Test Case ID</strong>: TC-001</li>
    <li><strong>Preconditions</strong>: The user opens the right navbar by clicking the hamburger bar.</li>
    <li><strong>Steps</strong>:
        <ol>
            <li>Open the hamburger bar.</li>
            <li>Click on the "Home" button.</li>
        </ol>
    </li>
    <li><strong>Expected Result</strong>: The homepage is displayed with the title <code>BAZNAS</code>.</li>
</ul>

<h3>2. Verifying the user can navigate to the BAZNAS Profile from the "About BAZNAS" menu</h3>
<ul>
    <li><strong>Test Case ID</strong>: TC-002</li>
    <li><strong>Preconditions</strong>: The user opens the right navbar by clicking the hamburger bar and selects the "About BAZNAS" menu.</li>
    <li><strong>Steps</strong>:
        <ol>
            <li>Open the hamburger bar.</li>
            <li>Click on "About BAZNAS."</li>
            <li>Select "BAZNAS Profile."</li>
        </ol>
    </li>
    <li><strong>Expected Result</strong>: The user is redirected to the BAZNAS Profile page at <code>https://kotayogya.baznas.go.id/baznas-profile</code>.</li>
</ul>

<h3>3. Verifying the user can navigate to the BAZNAS Structure from the "About BAZNAS" menu</h3>
<ul>
    <li><strong>Test Case ID</strong>: TC-003</li>
    <li><strong>Preconditions</strong>: The user opens the right navbar by clicking the hamburger bar and selects the "About BAZNAS" menu.</li>
    <li><strong>Steps</strong>:
        <ol>
            <li>Open the hamburger bar.</li>
            <li>Click on "About BAZNAS."</li>
            <li>Select "BAZNAS Structure."</li>
        </ol>
    </li>
    <li><strong>Expected Result</strong>: The user is redirected to the BAZNAS Structure page at <code>https://kotayogya.baznas.go.id/struktur-baznas</code>.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/your-username/baznas-right-navbar-test.git</code></pre>
    </li>
    <li>Install the dependencies:
        <pre><code>npm install</code></pre>
    </li>
</ol>

<h2>Running the Tests</h2>
<p>To run the Cypress tests, use the following command:</p>
<pre><code>npx cypress open</code></pre>
<p>This will open the Cypress Test Runner, and you can manually select the tests to run.</p>
<p>Alternatively, to run the tests in headless mode:</p>
<pre><code>npx cypress run</code></pre>

<h2>Test Results</h2>
<p>The test results, including screenshots and videos, are stored in the default Cypress directories:</p>
<ul>
    <li><strong>Screenshots</strong>: <code>cypress/screenshots</code></li>
    <li><strong>Videos</strong>: <code>cypress/videos</code></li>
</ul>

<h2>Handling Uncaught Exceptions</h2>
<p>To ensure the tests run smoothly despite unexpected errors, the following command is used to catch uncaught exceptions:</p>
<pre><code>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
</code></pre>

</body>
</html>
