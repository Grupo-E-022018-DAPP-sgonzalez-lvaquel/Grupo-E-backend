export function UserSchema({
    Sequelize,
    sequelize,
}) {
    return sequelize.define('user', {
        kid: {
            type: Sequelize.STRING,
        }
    }, {
        paranoid: true,
    });
}