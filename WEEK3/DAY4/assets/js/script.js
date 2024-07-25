const URL = "https://api.pexels.com/v1/search?query=";
const apiKey = "mDwobpyvaWfEmarsZQNoS4htdqpbWwq7tvwX9BC7WaQEnJ4zkqk73U5M";

document.getElementById("loadImagesButton").addEventListener("click", () => {
  loadImages("stupid");
});
document.getElementById("loadSecondaryImagesButton").addEventListener("click", () => {
    loadImages("animals");
  });

const loadImages = function (query) {
  fetch(`${URL}${query}`, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error fetching images");
      }
    })
    .then((data) => {
      const images = data.photos;
      loadImageCards(images);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

function loadImageCards(images) {
  const imagesContainer = document.getElementById("imageContainer");
  imagesContainer.innerHTML = ""; // Pulisce il contenitore esistente

  images.forEach((image, index) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.id = `card-${index}`; 
    card.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <img src="${image.src.medium}" class="card-img-top" alt="${image.alt}">
                <div class="card-body">
                    <h5 class="card-title">${image.photographer}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewImage('${image.src.large}')">View</button>
                            <button type="button" class="btn btn-sm btn-outline-danger" onclick="hideCard('${image.src.large}')">hide</button>
                            
                        </div>
                    </div>
                </div>
            </div>`;
    imagesContainer.appendChild(card);
  });
  
}

function viewImage(src) {
  window.open(src, "_blank");
}


