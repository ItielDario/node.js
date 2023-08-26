const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Server running');
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

