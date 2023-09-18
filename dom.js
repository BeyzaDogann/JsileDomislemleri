// const titleEl = document.querySelector('h1');
// sayfamizdaki h1 elementine erişim sağlıyor.
// El-> ELement

// 
// titleEl.innerText = 'Merhaba Dünya';
// const eLement = {
//     innerText: 'Hello World',
//     remove: function(a){

//     }
// }

// element.innerText = '';
// element.remove('kfkf')

// const titleE1 = document.querySelector('h1', 'p');
// titleE1.innerText = 'Merhaba Dünya, naber? Dünya biliyor musun, tatile gidiyorum. Sonunda bana izin verdiler. Stajımdan çok sıkıldım.'
// const titles = document.querySelectorAll('h1');
// for (const title of titles) {
    // title.innerText = 'Beyza Doğan';
// }
// for (let i =0; i < titles.length; i++){
    // titles[i].innerText = 'Beyza Doğan';
// }
// document.querySelector('#ozelBaslik').innerText
// = 'Benim adım Beyza'
// const content = document.querySelector
// ('#icerik');
// content.innerHTML = '<p>merhabalar <strong>hoş</strong> geldiniz</p';
const meyveList = ['Kavun', 'Karpuz', 'Kiraz', 'Çilek', 'Muz'];
const meyveler = document.querySelector('#meyveler');
for (const meyve of meyveList){
    meyveler.innerHTML += `<li>${meyve}</li>`;
}