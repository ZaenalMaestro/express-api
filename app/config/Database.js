const path = require("path");
const Sequelize = require("sequelize");
require("dotenv").config({ path: path.join(process.cwd(), ".env") });

const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("connected to database...");
    } catch (error) {
        console.log("unable connect to database:", error);
    }
})();

module.exports = sequelize;
