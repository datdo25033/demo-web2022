// Lấy id trên URL
const id = new URLSearchParams(window.location.search).get("id");

// tìm kiếm trong mảng products
// nếu ID phần tử trong mảng == id trên url
// thì trả về kết quả là cái phần tử tìm được

const products = [{
    id: 1,
    name: "Product A",
    img: "https://picsum.photos/400/400"
}, {
    id: 2,
    name: "Product B",
    img: "https://picsum.photos/400/400"
}];

const found = products.find(funtion(element) {
    return element.id == id;
});

do