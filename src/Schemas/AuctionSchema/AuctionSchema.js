export function AuctionSchema({
    Sequelize,
    sequelize,
}) {
    return sequelize.define('auction', {
        ownerId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        lastBettorId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        originalEndDate: {
            allowNull: false,
            type: Sequelize.DATE
        },
        endDate: {
            allowNull: false,
            type: Sequelize.DATE
        },
        state: {
            allowNull: false,
            type: Sequelize.STRING,
        }
    }, {
        paranoid: true,
    });
}
