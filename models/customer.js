module.exports = (Sequelize, type) => {
    return Sequelize.define('Customers', {
        id: {
            field: 'CUS_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        CUT_ID: {
            type: type.INTEGER,
            allowNull: false
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        phone:type.STRING(50),
        email:type.STRING,
        address:type.STRING,
    }, { timestamps: false })
}