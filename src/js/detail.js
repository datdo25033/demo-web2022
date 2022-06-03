// Lấy id trên URL
const id = new URLSearchParams(window.location.search).get("id");

// tìm kiếm trong mảng products
// nếu ID phần tử trong mảng == id trên url
// thì trả về kết quả là cái phần tử tìm được

const products = [{
    id: 1,
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    price: 30,
    img: "imgs/image 26 (9).png"
}, {
    id: 2,
    name: "The Creamiest Creamy Chicken",
    price: 30,
    img: "imgs/image 26 (10).png"
}, {
    id: 3,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 30,
    img: "imgs/image 26 (11).png"
}];
const infor = [{
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

const found = infor.find(function(element) {
    return element.id == id;
});


document.getElementById("production").innerHTML = `
        <div class="">
        <h1 class="text-[40px] font-bold">${found.name}</h1>

        <span class="block mt-5 text-4xl text-red-600">$${found.price}</span>

        <p class="ext-sm my-8 leading-7">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo.
        </p>
        <div class="search w-[484px] h-16 flex ">
            <input type="text" class="flex-1 mr-2 px-2 border" placeholder="Quantity">
            <button class="w-40 bg-black rounded-r-lg text-white">Add To Cart</button>
        </div>
    </div>
    <div class="">
        <img src="${found.img}" alt="" class="w-[616px] h-[616px] rounded-lg">
    </div>
        `;

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

render("detail-product", listProduct(products));