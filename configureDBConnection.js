export function configureDBConnection(Sequelize) {
    return new Sequelize('subastify',
        'root',
        'root', {
            dialect: 'postgres',
        });
}
