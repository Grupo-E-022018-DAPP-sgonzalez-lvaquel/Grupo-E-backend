export class AuctionsRepository {

    constructor({
        Sequelize,
        sequelize,
        auctionSchema,
    }) {
        this.op = Sequelize.Op;
        this.sequelize = sequelize;
        this.auctionSchema = auctionSchema;
    }

    save(auction) {
        return this.sequelize.sync()
            .then(() =>
                this.auctionSchema.create({
                    owner_id: auction.owner.id
                })
            );
    }

    getAll() {
        return this.sequelize.sync()
            .then(() =>
                this.auctionSchema.findAll()
            );
    }

    get(id) {
        return this.sequelize.sync()
            .then(() =>
                this.auctionSchema.findById(id)
            );
    }

    getRecent() {
        return this.sequelize.sync()
            .then(() =>
                this.auctionSchema.findAll({
                    where: {
                        createdAt: {
                            [this.op.gt]: this.yesterday,
                        },
                    },
                })
            );
    }

    get yesterday() {
        return new Date(Date.now() - (24 * 60 * 60 * 1000));
    }

    delete(id) {
        return this.sequelize.sync()
            .then(() =>
                this.auctionSchema.destroy({
                    where: {
                        id: {
                            [this.op.eq]: id
                        }
                    }
                })
            );
    }
}
