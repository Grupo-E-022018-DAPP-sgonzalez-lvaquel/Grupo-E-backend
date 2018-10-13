export function UserSchema({
    Sequelize,
    sequelize,
}) {
    return sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
    }, {
        paranoid: true,
    });
}
