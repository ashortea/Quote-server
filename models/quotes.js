module.exports =(sequelize, Datatypes) => {
    const Quote = sequelize.define('quote', {
        quote:{
            type: Datatypes.STRING,
            allowNull: false
        },
        author:{
            type: Datatypes.STRING,
            allowNull: false
        },
        owner:{
            type: Datatypes.INTEGER,
            allowNull: false
        
    }})

    return Quote;
}