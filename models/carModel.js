const Sequelize = require("sequelize");
const db = require("../db/database");

const Carro = db.define("garagem", {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    horsepower: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    topSpeed: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    isAvailable: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
        
    
}, {
    tableName: "garagem",
    freezeTableName: true
});

module.exports = Carro;