document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("salva");
  const form = document.querySelector("form");

  const productId = new URLSearchParams(location.search).get("productId");

  if (productId) {
    // Modalità modifica: recupero i dettagli del prodotto esistente
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Non ho trovato il prodotto!");
        }
      })
      .then((product) => {
        // Riempio il modulo con i dettagli del prodotto
        document.getElementById("inputName").value = product.name;
        document.getElementById("inputDescrizione").value = product.description;
        document.getElementById("inputBrand").value = product.brand;
        document.getElementById("inputUrl").value = product.imageUrl;
        document.getElementById("inputPrezzo").value = product.price;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  saveButton.addEventListener("click", () => {
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

    let method = productId ? "PUT" : "POST";
    let endpoint = productId ? URL + productId : URL;

    fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
        form.reset(); // Reset del modulo
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Errore nel salvataggio del prodotto. Riprova!");
      });
  });
});
