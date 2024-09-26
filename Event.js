document.getElementById("search-button").addEventListener("click", function() {
    // Get input values from the search form
    const religion = document.getElementById("religion").value.toLowerCase();
    const category = document.getElementById("category").value.toLowerCase();  // This now includes "motorshow" too!
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value.toLowerCase();
    const country = document.getElementById("country").value.toLowerCase();

    // Select all event boxes
    const boxes = document.querySelectorAll(".event-box");
    
    boxes.forEach(box => {
        // Get the data attributes from each event box
        const boxCategory = box.getAttribute('data-category').toLowerCase(); // "motorshow" will be included here
        const boxReligion = box.getAttribute('data-religion')?.toLowerCase() || ""; 
        const boxDate = box.getAttribute('data-date');
        const boxLocation = box.getAttribute('data-location')?.toLowerCase() || "";
        const boxCountry = box.getAttribute('data-country')?.toLowerCase() || ""; 

        // Debugging: Log the values being checked
        console.log(`Checking box:
            Location: ${boxLocation}, Filter Location: ${location}
            Category: ${boxCategory}, Filter Category: ${category}
            Date: ${boxDate}, Filter Date: ${date}
            Country: ${boxCountry}, Filter Country: ${country}`);

        // Check each filter condition
        const matchesReligion = religion === "" || boxReligion.includes(religion);
        const matchesCategory = category === "" || boxCategory.includes(category);  // Will match "motorshow"
        const matchesDate = date === "" || boxDate === date; // Ensure event dates are formatted correctly
        const matchesLocation = location === "" || boxLocation.includes(location);
        const matchesCountry = country === "" || boxCountry.includes(country);

        // Show or hide the box based on the filter conditions
        if (matchesReligion && matchesCategory && matchesDate && matchesLocation && matchesCountry) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});
