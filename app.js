const searchInput = document.getElementById("search-input");
const productItem = document.querySelectorAll(".product-item");
const filterButton = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const buttonChange = (data) => {
  filterButton.forEach((button) => {
    const dataset = button.dataset.filter;
    if (data === dataset) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  const userSearch = event.target.value.toLowerCase().trim();

  productItem.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(userSearch)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  buttonChange(filter);

  productItem.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const priceHandler = (event) => {
  const userSearch = +priceButton.parentElement.children[0].value;

  productItem.forEach((product) => {
    const price = +product.children[2].innerText.split(" ")[1];
    
    if (!userSearch) {
      product.style.display = "block";
    } else {
      userSearch === price
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const start = () => {
  filterButton.forEach((button) => {
  button.addEventListener("click", filterHandler);
});

searchInput.addEventListener("keyup", searchHandler);
priceButton.addEventListener("click", priceHandler);
}
window.addEventListener("load", start)