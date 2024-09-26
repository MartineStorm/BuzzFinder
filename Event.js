document.getElementById("search-button").addEventListener("click", function() {
    const religion = document.getElementById("religion").value.toLowerCase();
    const category = document.getElementById("category").value.toLowerCase();
    const date = document.getElementById("date").value; // No need for toLowerCase here
    const location = document.getElementById("location").value.toLowerCase();
    const country = document.getElementById("country").value.toLowerCase(); // Corrected here

    const boxes = document.querySelectorAll(".event-box");
    
    boxes.forEach(box => {
        const boxCategory = box.getAttribute('data-category').toLowerCase();
        const boxText = box.textContent.toLowerCase();
        
        // Check each filter
        const matchesReligion = religion === "" || boxText.includes(religion);
        const matchesCategory = category === "" || boxCategory.includes(category);
        const matchesDate = date === "" || boxText.includes(date); // Ensure event dates are formatted correctly
        const matchesLocation = location === "" || boxText.includes(location);
        const matchesCountry = country === "" || boxText.includes(country); // Corrected here

        // Show or hide the box based on matches
        box.style.display = matchesReligion && matchesCategory && matchesDate && matchesLocation && matchesCountry ? "block" : "none";
    });
});
