function TodoModel(sequelize, DataTypes) {
    return sequelize.define('Todo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            validate: {
                notEmpty: true
            }
        },
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [1, 128]
            }
        },
        startTime: {
            type: DataTypes.DATE,
            field: 'start_time',
            validate: {
                notEmpty: true
            }
        }
    }, {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'todo'
    });
}

export default TodoModel;
