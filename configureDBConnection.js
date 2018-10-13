export function configureDBConnection(Sequelize) {
    return new Sequelize('subastify',
        'root',
        'root', {
            host: 'db',
            dialect: 'postgres',
        });
}
