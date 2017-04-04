'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('todo', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            content: Sequelize.TEXT,
            created_at: Sequelize.DATE,
            start_time: Sequelize.DATE,
            title: Sequelize.STRING,
            updated_at: Sequelize.DATE
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('todo');
    }
};
