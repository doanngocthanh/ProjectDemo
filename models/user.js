module.exports = (Sequelize,type)=>{
        return Sequelize.define('Users', {
            id: {
                field: 'USE_ID',
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            account: type.STRING,
            password: type.STRING,
            fullname: type.STRING
        }, { timestamps: false })   
}