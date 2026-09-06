const productsContainer = document.getElementById("products-container");
const showProductsButton = document.getElementById("show-products");

showProductsButton.addEventListener("click", () => {

    showProductsButton.style.display = "none";

    fetch("https://fakestoreapi.com/products")

        .then((response) => response.json())

        .then((data) => {

            data.forEach((product) => {

                const card = document.createElement("div");

                card.className = "card";

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">

                    <h2>${product.title}</h2>

                    <p class="price">$${product.price}</p>

                    <p class="description">${product.description}</p>

                    <button class="see-more">See More</button>

                    <p>Category: ${product.category}</p>

                    <p>Rating: ${product.rating.rate}</p>
                `;

                const seeMoreButton = card.querySelector(".see-more");

                const description = card.querySelector(".description");

                seeMoreButton.addEventListener("click", () => {

                    description.classList.toggle("expanded");

                    if (description.classList.contains("expanded")) {

                        seeMoreButton.textContent = "See Less";

                    } else {

                        seeMoreButton.textContent = "See More";

                    }

                });

                productsContainer.appendChild(card);
            });

        })

        .catch((error) => {

            console.log("Error:", error);

        });

});
