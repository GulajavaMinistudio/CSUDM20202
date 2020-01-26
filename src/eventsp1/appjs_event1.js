// EVENT Pengenalan Event di dalam JavaScript
const buttonSalahEl = document.querySelector('#tombol_eventsalah');
const buttonBenarEl = document.querySelector('#tombol_eventbenar');
const buttonKlikEventEl = document.querySelector('#tombol_klikevent');

// cara yang salah dan tidak dianjurkan
// LISTENER DI OVERRIDE Jika ada listener lain yang
// ditambahkan
buttonSalahEl.onclick = function() {
    console.log('CLICK PERTAMA CARA SALAH');
};
// listener kedua override listener pertama
buttonSalahEl.onclick = function() {
    console.log('CLICK KEDUA CARA SALAH');
};

// CARABENAR dengan Event Listener
function listenerKlikBenar(e) {
    console.log('EVENT OBJECT', e, e.target, e.target.id);
    console.log('Saya di klik nih');
}

buttonBenarEl.addEventListener('click', listenerKlikBenar);

buttonKlikEventEl.addEventListener('click', function(e) {
    console.log('Klik Event Object', e);
    console.log('KLIK PERTAMA');
});

// bisa menambahkan banyak listener event
buttonKlikEventEl.addEventListener('click', e => {
    console.log('Klik Event Object Arrow Function', e);
    console.log('KLIK KEDUA');
});

// REMOVELISTENER cara hapus event listener
// buttonBenarEl.removeEventListener('click', listenerKlikBenar);

// EVENT MOUSE OVER DAN MOUSE OUT
buttonKlikEventEl.addEventListener('mouseover', () => {
    buttonKlikEventEl.innerText = 'Kursor di atas Tombol';
});

buttonKlikEventEl.addEventListener('mouseout', () => {
    buttonKlikEventEl.innerText = 'Tombol Klik Event Listener';
});

// SCROLL EVENT
window.addEventListener('scroll', e => {
    console.log('STOP Scroll LAYAR !!!!');
    console.log(e);
    console.log('Koordinat Y', window);
    console.log('Koordinat Y', window.scrollY);
});
