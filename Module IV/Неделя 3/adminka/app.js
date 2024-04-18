const express = require('express');
const app = express();
const fs = require('fs').promises;
const path = require('path');
const mainRote = require('./routes/main')
const gameRoute = require('./routes/games')


app.use(express.static(path.join(__dirname, 'public')),
        mainRote, 
        gameRoute);


const PORT = 3005
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});