export function AuctionSchema({
    Sequelize,
    sequelize,
}) {
    return sequelize.define('auction', {
        ownerId: {
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
