import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import {env} from '../../config/config.js';
import dbConf from '../../config/db.js';

const config = dbConf[env];
const basename = path.basename(module.filename);
const models = {};
let sequelize = null;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(file => {
    return (
        file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'
    );
}).forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    models[model.name] = model;
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
