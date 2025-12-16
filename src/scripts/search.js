export function searchProducts() {
    let query, containers, i, h3, txtValue, products;
    const searchInput = document.querySelector("#search-input");
    query = searchInput.value.toUpperCase();
    containers = document.querySelector("#product-list").querySelectorAll(".instrument");

    containers.forEach(container => {
        const h3 = container.querySelector("h3");
        const txtValue = (h3 && (h3.textContent || h3.innerText)) || "";
        container.style.display = txtValue.toUpperCase().indexOf(query) > -1 ? "" : "none";
    });
}