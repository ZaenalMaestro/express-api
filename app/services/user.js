const { DataTypes } = require("sequelize");
const sequelize = require("../config/Database");
const UserService = require("../models/user")(sequelize, DataTypes);

module.exports = UserService 
