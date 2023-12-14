
const mongoose = require('mongoose');

const databaseConnection = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://rukonjs:tIpDDcpRYm1P6pD7@cluster0.af4at.mongodb.net/RukonPro', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        return connection;
    } catch (error) {
        throw new Error(error);
    }

}
module.exports = databaseConnection;