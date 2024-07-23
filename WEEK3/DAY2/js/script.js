const nome = document.getElementById("nome");
const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const infoTesto = document.getElementById("infoTesto");

const updateDisplayedName = function() {
    const savedName = JSON.parse(localStorage.getItem('name'));
    const nameDisplay = document.getElementById('infoTesto');
    if (savedName) {
        nameDisplay.innerText = `Il nome salvato è: ${savedName}`;
    } else {
        nameDisplay.innerText = 'Nessun nome salvato!';
    }
    nome.value = '';
}

updateDisplayedName();




// Caricare il nome salvato all'avvio

const save = function() {
    const nameInput = document.getElementById('nome').value;
    localStorage.setItem('name', JSON.stringify(nameInput));
    updateDisplayedName();
}

btnAdd.addEventListener('click', save);

const remove = function() {
    localStorage.removeItem('name');
    updateDisplayedName();
}

btnDelete.addEventListener('click', remove);






   // Recupera il valore del contatore da sessionStorage o inizializza a 0 se non esiste
   let counter = sessionStorage.getItem('counter') ? parseInt(sessionStorage.getItem('counter')) : 0;

   // Funzione per aggiornare il contatore ogni secondo
   function updateCounter() {
       counter++;
       document.getElementById('counter').textContent = counter;
       sessionStorage.setItem('counter', counter);
   }

   // Imposta l'intervallo per aggiornare il contatore ogni secondo
   setInterval(updateCounter, 1000);

   // Mostra il valore iniziale del contatore
   document.getElementById('counter').textContent = counter; 