
const mongoose = require('mongoose');

const databaseConnection = async () => {
    try {
       return   await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        throw new Error(error);
    }

}
module.exports = databaseConnection;

