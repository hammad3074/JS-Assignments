function formatCNIC() {
  let cnic = document.getElementById("cnicInput").value;

  if (!/^\d{13}$/.test(cnic)) {
    alert("❌ Please enter exactly 13 digits CNIC (numbers only).");
    return;
  }

  let formattedCNIC =
    cnic.slice(0,5) + "-" + cnic.slice(5,12) + "-" + cnic.slice(12);

  let resultBox = document.getElementById("resultBox");
  resultBox.style.display = "block";
  resultBox.style.animation = "fadeIn 1s forwards"; 
  resultBox.innerText = "✅ Formatted CNIC: " + formattedCNIC;

  console.log(formattedCNIC);
}

// 🔑 Enter key listener
document.getElementById("cnicInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    formatCNIC();
  }
});
