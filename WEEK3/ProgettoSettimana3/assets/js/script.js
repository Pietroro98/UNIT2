const getProducts = function () {
  const URL = "https://striveschool-api.herokuapp.com/api/product/";
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjE4MGYyNjBjYzAwMTVjYzBkZWIiLCJpYXQiOjE3MjE5ODMzNjAsImV4cCI6MTcyMzE5Mjk2MH0.4HMYcaTQzylGef5SY9hmzHNlwkBHL5h8TzDLTSJCvfU";

  fetch(URL, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response error");
      }
    })
    .then((products) => {
      const cartContainer = document.getElementById("cartContainer");
      cartContainer.innerHTML = "";

      products.forEach((product) => {
        const productCol = `
        <div class="col-12 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <div class="card-img-container">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
              </div>
              <div class="card-body d-flex flex-column">
                <div class="card-title-container">
                  <h5 class="card-title">${product.name}</h5>
                  <hr />
                  <p class="card-text">${product.brand}</p>
                </div>
                <div class="card-text-container">
                  <p class="card-text mt-0 mb-2">${product.price}€</p>
                </div>
                <div class="card-footer-container mt-auto">
                  <a href="./details.html?productId=${product._id}" class="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
          </div>
        `;
        cartContainer.innerHTML += productCol;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

getProducts();

/* <p class="card-text">${product.description}</p>

            <div class="col">
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        
                        <p class="card-text">$${product.price}</p>
                         <a href="./details.html?productId=${product._id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
            
            
            
            
               <div class="col mb-4">
            <div class="card h-100">
              <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                
                <p class="card-text">$${product.price}</p>
                <a href="./details.html?productId=${product._id}" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>*/
