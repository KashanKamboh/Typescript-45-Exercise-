// Making a functio
function Shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
Shirt();
Shirt("medium");
Shirt("small", "Code with Kashaf");
