document.addEventListener("DOMContentLoaded", function () {
    // Example of dynamically updating content using JavaScript
    document.getElementById("name").textContent = "Jane Doe";  // Change name dynamically
    document.getElementById("about").textContent = "A dedicated Full Stack Developer experienced in both front-end and back-end technologies.";  // Update about
});
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
