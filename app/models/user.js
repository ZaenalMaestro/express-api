"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {}

    User.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
            underscored: true,
            sequelize,
        }
    );
    return User;
};

