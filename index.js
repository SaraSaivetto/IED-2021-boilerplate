// import Hello from './components/Hello';
// import Title from './components/Title';
// import Draw from './components/Draw';

import Card from './components/Card';

function app() {
  document.body.innerHTML = `
  <main>
    <article>
    ${Card("TITOLO", "TESTO")}
    ${Card("TITOLO", "TESTO")}
    </article>
  <main>`;
}

app();
