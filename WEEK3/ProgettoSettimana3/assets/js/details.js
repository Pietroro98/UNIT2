const addressBarParameters = new URLSearchParams(location.search);
const productId = addressBarParameters.get("productId");
console.log("productId", productId);

const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjE4MGYyNjBjYzAwMTVjYzBkZWIiLCJpYXQiOjE3MjE5ODMzNjAsImV4cCI6MTcyMzE5Mjk2MH0.4HMYcaTQzylGef5SY9hmzHNlwkBHL5h8TzDLTSJCvfU";

// Funzione per mostrare i dettagli del prodotto
function showProductDetails(product) {
  const detailRow = document.getElementById("detail-row");
  detailRow.innerHTML = `
    <div class="col mb-4">
        <div class="card flex-md-row">
          <img src="${product.imageUrl}" class="card-img-left img-fluid w-100" alt="${product.name}" style="width: 150px; height: auto;">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <hr />
            <p class="card-text">${product.brand}</p>
            <hr />
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price}€</p>
            <hr />
            <a href="./backoffice.html?productId=${product._id}" class="btn btn-warning me-2">Edit</a>
            <button class="btn btn-danger" id="delete-button" onclick="deleteProduct()">Delete</button>
          </div>
        </div>
      </div>
  `;

  // Aggiungi l'evento click al pulsante di eliminazione
  document
    .getElementById("delete-button")
    .addEventListener("click", deleteProduct);
}

// Funzione per recuperare i dettagli del prodotto
function fetchProductDetails() {
  fetch(apiURL + productId, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero del prodotto");
      }
    })
    .then((product) => {
      console.log("Product:", product);
      showProductDetails(product);
    })
    .catch((err) => {
      console.error("Errore:", err);
      alert("Impossibile recuperare i dettagli del prodotto.");
    });
}

// Funzione per eliminare il prodotto
function deleteProduct() {
  fetch(apiURL + productId, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Prodotto eliminato");
        location.assign("./index.html"); // Riporta l'utente alla homepage
      } else {
        throw new Error("Problema nell'eliminazione del prodotto");
      }
    })
    .catch((err) => {
      console.error("Errore:", err);
      alert("Impossibile eliminare il prodotto.");
    });
}

// Avvia il recupero dei dettagli del prodotto
fetchProductDetails();
