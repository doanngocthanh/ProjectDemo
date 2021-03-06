module.exports = (Sequelize, type) => {
    return Sequelize.define('CustomerTypes', {
        id: {
            field: 'CUT_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        commission: {
            type: type.FLOAT,
            defaultValue: 0.0
        }
    }, { timestamps: false })

}