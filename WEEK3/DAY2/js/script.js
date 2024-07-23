const nome = document.getElementById("nome");
const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const infoTesto = document.getElementById("infoTesto");

const updateDisplayedName = function() {
    const savedName = JSON.parse(localStorage.getItem('name'));
    const nameDisplay = document.getElementById('infoTesto');
    if (savedName) {
        nameDisplay.innerText = `${savedName}`;
    } else {
        nameDisplay.innerText = '';
    }
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