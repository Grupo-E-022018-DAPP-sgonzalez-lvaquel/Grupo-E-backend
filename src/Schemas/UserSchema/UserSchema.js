export function UserSchema({
    sequelize,
}) {
    return sequelize.define('user', {
    }, {
        paranoid: true,
    });
}
