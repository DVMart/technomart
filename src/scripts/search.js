export function searchProducts() {
    let query, containers, i, h3, txtValue, products;
    const searchInput = document.querySelector("#search-input");
    query = searchInput.value.toUpperCase();
    containers = document.querySelector("#product-list").querySelectorAll(".instrument");

    for (i = 0; i < containers.length; i++) {
        h3 = containers[i].querySelector("h3");
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(query) > -1) {
            containers[i].style.display = "";
        } else {
            containers[i].style.display = "none";
        }
    }
}