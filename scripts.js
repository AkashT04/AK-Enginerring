document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const products = [
        { name: "Electric Drill", category: "Power Tools", subcategory: "Drills" },
        { name: "Hammer", category: "Hand Tools", subcategory: "Hammers" }
    ];
    
    function displayProducts() {
        productList.innerHTML = "";
        products.forEach((p, index) => {
            const div = document.createElement("div");
            div.textContent = `${p.name} - ${p.category} (${p.subcategory})`;
            productList.appendChild(div);
        });
    }

    displayProducts();

    document.getElementById("searchBox").addEventListener("input", (e) => {
        const filtered = products.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()));
        productList.innerHTML = filtered.map(p => `<div>${p.name}</div>`).join("");
    });

    // Admin CRUD Operations
    document.getElementById("product-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("product-name").value;
        products.push({ name });
        displayProducts();
    });
});
