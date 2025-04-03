document.getElementById("btcButton").addEventListener("click", function () {
    showQRCode("../res/btc.png"); // Remplacez par le chemin de votre QR code BTC
});

document.getElementById("ethButton").addEventListener("click", function () {
    showQRCode("../res/eth.png"); // Remplacez par le chemin de votre QR code ETH
});

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