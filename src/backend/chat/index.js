const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./config/config.json').development;

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

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

app.get('/api/messages', async (req, res) => {
    const { contactId } = req.query;
    const messages = await Message.findAll({ where: { contactId } });
    res.json(messages);
});

app.post('/api/messages', async (req, res) => {
    const message = await Message.create(req.body);
    res.json(message);
});

sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
});
