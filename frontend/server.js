const express = require('express');
const path = require('path');
const app = express();
const port = 4200;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Route for serving the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/browser/index.html'));
    // res.sendFile(path.join(__dirname, 'src/index.html'));
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
