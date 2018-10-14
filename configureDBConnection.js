import config from './config';

const {
    dbName,
    dbUser,
    dbPassword,
    options,
} = config.sequelize;

export function configureDBConnection(Sequelize) {
    return new Sequelize(dbName, dbUser, dbPassword, options);
}
