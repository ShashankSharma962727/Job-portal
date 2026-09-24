const app = require('../Server/src/app.js');
const PORT = process.env.PORT || 5000;
const dbConnection = require('./src/config/db.js');

dbConnection();

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});