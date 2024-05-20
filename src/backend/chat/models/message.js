module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {});
    Message.associate = function(models) {
        // associations can be defined here
    };
    return Message;
};
