export function BetSchema({
    Sequelize,
    sequelize,
}) {
    return sequelize.define('bet', {
        amount: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        auctionId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'auctions',
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
            },
        },
        bettorId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
            }
        },
    }, {
        paranoid: true,
    });
}
