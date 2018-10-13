export class BetsRepository {

    constructor({
        Sequelize,
        sequelize,
        betSchema,
    }) {
        this.op = Sequelize.Op;
        this.sequelize = sequelize;
        this.betSchema = betSchema;
    }

    save({
        amount,
        auction,
        bettor,
    }) {
        return this.sequelize.sync()
            .then(() =>
                this.betSchema.create({
                    amount,
                    auctionId: auction.id,
                    bettorId: bettor.id,
                })
            );
    }

    getByAuctionId(auctionId) {
        return this.sequelize.sync()
            .then(() =>
                this.betSchema.findAll({
                    where: {
                        auctionId: {
                            [this.op.eq]: auctionId,
                        },
                    },
                })
            );
    }
}
