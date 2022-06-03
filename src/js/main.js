const products = [{
    id: 1,
    name: "Product A",
    img: "https://picsum.photos/400/400"
}, {
    id: 2,
    name: "Product B",
    img: "https://picsum.photos/400/400"
}];

function listProduct(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        result +=
            `
        <div>
            <img src="${products[i].img}" alt="" class="rounded-lg">
            <p class="text-primary my-4" >${products[i].name}</p>
        </div>
        `;
    }
    return result;
};

function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}

render("products", listProduct(products));