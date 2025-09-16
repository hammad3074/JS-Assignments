let length = parseInt(prompt("Write the length of password"));

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = "";

if (!isNaN(length) && length > 0) {
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    document.write("Generated Password: " + password);
} else {
    alert("Sahi number daalein!");
}
