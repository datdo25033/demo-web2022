const a = 10;
const b = 20;

function sum(a, b) {
    //Kiểm tra
    if (!isNaN(a) || !isNaN(b)) return -1;

    // Xử Lý
    const result = a + b;

    //Kết quả
    return result;
}

console.log(sum(a, b));