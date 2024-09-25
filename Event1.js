function openMap() {
    const location = "123 Event Street, City B"; // Adjust to your actual location
    const googleMapsUrl = `https://www.google.com/maps/dir//B%C3%A5lyveien+50,Spangereid,Norge/@58.044963,7.144244=${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank'); // Open in a new tab
}

