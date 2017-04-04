function TodoModel(sequelize, DataTypes) {
    const Todo = sequelize.define('Todo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [1, 100]
            }
        },
        content: {
            type: DataTypes.TEXT,
            validate: {
                notEmpty: true
            }
        }
    }, {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'todo',
        classMethods: {
            associate: function(models) {
                Article.belongsTo(models.User, {foreignKey: 'user_id'});
            }
        },
        getterMethods: {
            createdAt: function() {
                return this.created_at;
            }
        }
    });
    return Todo;
}

export default TodoModel;
