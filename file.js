function openPopup(promoId) {
  const popup = document.getElementById('popup');
  const detail = document.getElementById('popup-detail');
  popup.style.display = 'flex';

  if (promoId === 'promo1') {
    detail.innerHTML = `
      <h2>Cumpără 2 la preț de 1</h2>
      <p>Acum ai ocazia să te bucuri de mai multe din deserturile noastre preferate și să plătești doar pentru unul. Singure sau alături de prieteni, macarons sau cruffles cu căpșuni sunt deserturile perfecte pentru orice moment. Gustă aromele autentice și lasă-te purtat de fiecare îmbucătură. Fie că îți faci un răsfăț personal sau împărtășești cu cineva special, oferta noastră este gândită să aducă mai multă plăcere și mai multă savoare. Încearcă-le și profită de această oportunitate pe întreaga perioadă a ofertei, din 20 până în 27 aprilie.</p>
      <p>Perioada promoției: 1-10 Mai 2025</p>
    `;
  } else if (promoId === 'promo2') {
    detail.innerHTML = `
      <h2>Promoția săptămânii</h2>
      <p>Săptămâna aceasta, îți aducem un răsfăț special: 20% reducere la pancakes cu fructe și tort cu zmeură. Două deserturi care îți vor aduce primăvara în farfurie cu fiecare îmbucătură. Delicate și proaspete, perfecte pentru un moment de relaxare sau pentru a le împărtăși cu cei dragi. Nu rata ocazia de a savura aceste delicii la un preț mai mic. </p>
      <p>Perioada promoției: 28 Aprilie-4 Mai 2025</p>
    `;
  } else if (promoId === 'promo3') {
    detail.innerHTML = `
      <h2>Pentru clienți fideli</h2>
      <p>La Cafe Lumi, apreciem fiecare vizită și fiecare moment petrecut alături de noi. De aceea, pentru clienții noștri fideli, am pregătit o surpriză specială: la fiecare 5 băuturi cumpărate, îți oferim una din partea casei. Indiferent de alegerea ta – o cafea aromată, un ceai relaxant sau un capuccino cremos – recompensa noastră te așteaptă. Continuă să te răsfeți la noi și lasă-ne să îți mulțumim pentru că faci parte din familia Cafe Lumi.</p>
      <p>Perioadă continuă pentru clienții fideli.</p>
    `;
  }
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
  