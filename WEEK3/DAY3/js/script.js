let books = [];

const coverBook = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("error 404");
      }
    })
    .then((bookData) => {
      books = bookData;
      loadCard();
    })
    .catch((err) => {
      console.log("error fetch book", err);
    });
};

function loadCard() {
  const boookListContainer = document.getElementById("bookList");
  boookListContainer.innerHTML = "";

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML += `
  <div class="card h-100">
  <img src="${book.img}" class="card-img-top" alt="${book.title}">
  <div class="card-body">
  <h3 class='card-title'>${book.title}</h3>
    <p class="card-text">${book.price} €</p>
    <button class="btn btn-danger" onclick="deleteCard(${index})" >SCARTA</button>
  </div>
</div>`;
    boookListContainer.appendChild(card);
  });
}

function deleteCard(index) {
    books.splice(index, 1)
    loadCard()
}



coverBook();
