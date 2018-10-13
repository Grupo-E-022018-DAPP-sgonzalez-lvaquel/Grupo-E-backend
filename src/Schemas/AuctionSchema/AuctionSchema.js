export function AuctionSchema({
    Sequelize,
    sequelize,
}) {
    return sequelize.define('auction', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        owner_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
            },
        }
    }, {
        paranoid: true,
    });
}
