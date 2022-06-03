const products = [{
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    price: 50,
    img: "imgs/image 26 (1).png"
}, {
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    price: 60,
    img: "imgs/image 26 (4).png"
}, {
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    price: 90,
    img: "imgs/image 26 (5).png"
}, {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise ",
    price: 40,
    img: "imgs/image 26 (6).png"
}, {
    id: 5,
    name: "The Creamiest Creamy Chicken",
    price: 100,
    img: "imgs/image 26 (7).png"
}, {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 75,
    img: "imgs/image 26 (8).png"
}];

function listProduct(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        result +=
            `
            <div class="column">
                <a href="/detail.html?id=${products[i].id}"><img src="${products[i].img}" alt="" class="rounded-lg"></a>
                <h3 class="text-primary my-4 font-semibold text-lg">${products[i].name}</h3>
                <span class="block text-red-600">$${products[i].price}</span>
                <button class="w-full mt-5 h-10 bg-black text-white rounded-md">Add To Cart</button>
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