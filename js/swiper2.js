document.getElementById("btcButton").addEventListener("click", function () {
    showQRCode("../res/btc.png"); 

document.getElementById("ethButton").addEventListener("click", function () {
    showQRCode("/res/ETH.png"); 

document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("qrCodeContainer").classList.add("hidden");
});

function showQRCode(imagePath) {
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    const qrCodeImage = document.getElementById("qrCodeImage");
    qrCodeImage.src = imagePath;
    qrCodeContainer.classList.remove("hidden");
}
