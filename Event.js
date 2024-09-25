document.getElementById("searchButton").addEventListener("click", function() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const boxes = document.querySelectorAll(".event-box");
    
    boxes.forEach(box => {
        const text = box.textContent.toLowerCase();
        box.style.display = text.includes(input) ? "block" : "none";
    });
});
