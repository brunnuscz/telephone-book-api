const {Model, DataTypes} = require('sequelize');

class Telephone extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            telephone: DataTypes.INTEGER,
            email: DataTypes.STRING
        },{
            sequelize
        });
    }
}

module.exports = Telephone;