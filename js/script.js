// Kiểm tra IMEI (ví dụ)
document.querySelector('#check-imei-btn').addEventListener('click', () => {
    const imei = document.querySelector('#imei-input').value;
    alert(`Đang kiểm tra IMEI: ${imei}...`);
});

// Hiển thị thông số kỹ thuật chi tiết
function showSpecs(productId) {
    // Gọi API hoặc hiển thị modal
    console.log(`Xem thông số sản phẩm ID: ${productId}`);
}
