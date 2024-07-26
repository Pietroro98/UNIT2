// Recupero gli elementi del DOM e il productId
const saveButton = document.getElementById("salva");
const form = document.querySelector("form");
const productId = new URLSearchParams(location.search).get("productId");

// Funzione per riempire il modulo con i dati del prodotto
function populateForm(product) {
  document.getElementById("inputName").value = product.name;
  document.getElementById("inputDescrizione").value = product.description;
  document.getElementById("inputBrand").value = product.brand;
  document.getElementById("inputUrl").value = product.imageUrl;
  document.getElementById("inputPrezzo").value = product.price;
}

// Funzione per gestire il salvataggio del prodotto
function saveProduct() {
  // Recupero i dati dal modulo
  const name = document.getElementById("inputName").value;
  const brand = document.getElementById("inputBrand").value;
  const price = document.getElementById("inputPrezzo").value;
  const imageUrl = document.getElementById("inputUrl").value;
  const description = document.getElementById("inputDescrizione").value;

  const productData = {
    name,
    description,
    brand,
    imageUrl,
    price,
  };

  const URL = "https://striveschool-api.herokuapp.com/api/product/";
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjE4MGYyNjBjYzAwMTVjYzBkZWIiLCJpYXQiOjE3MjE5ODMzNjAsImV4cCI6MTcyMzE5Mjk2MH0.4HMYcaTQzylGef5SY9hmzHNlwkBHL5h8TzDLTSJCvfU";

  const metodo = productId ? "PUT" : "POST";
  const endpoint = productId ? `${URL}${productId}` : URL;

  fetch(endpoint, {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
      'Authorization': token,
    },
    body: JSON.stringify(productData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel salvataggio del prodotto");
      }
    })
    .then((data) => {
      console.log("Prodotto salvato:", data);
      alert("Prodotto salvato con successo!");
      
    })
    .catch((error) => {
      console.error("Errore:", error);
      alert("Errore nel salvataggio del prodotto. Riprova!");
    });
}

// Se esiste un productId, recupero i dettagli del prodotto
if (productId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Non ho trovato il prodotto!");
      }
    })
    .then((product) => {
      populateForm(product);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Gestisco l'evento di click del pulsante di salvataggio
saveButton.addEventListener("click", saveProduct);
