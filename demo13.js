// Immediately Invoked Function Expression (IIFE)

(function ram() {
    console.log(`Name IIFE`);
})();

((name) => {
    console.log(`Simple IIFE ${name}`);
})("Abhishek")