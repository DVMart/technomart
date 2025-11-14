function searchProducts() {
    // Declare variables
    var input, filter, containers, i, h3, txtValue, products;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    containers = document.getElementById("productList").getElementsByClassName("instrument");

    for (i = 0; i < containers.length; i++) {
        h3 = containers[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            containers[i].style.display = "";
        } else {
            containers[i].style.display = "none";
        }
    }
}