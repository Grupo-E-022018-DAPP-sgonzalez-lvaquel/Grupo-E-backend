import {
    BetBuilder
} from '../../Model/Builders';

export class BetsRepository {

    constructor({
        Sequelize,
        betSchema,
        usersRepository,
        auctionsRepository,
    }) {
        this.op = Sequelize.Op;
        this.betSchema = betSchema;
        this.usersRepository = usersRepository;
        this.auctionsRepository = auctionsRepository;
    }

    toModel({
        amount,
        bettorId,
        auctionId
    }) {
        const bettor = this.usersRepository.get(bettorId);
        const auction = this.auctionsRepository.get(auctionId);

        return Promise.all([
            bettor,
            auction,
        ]).then(([bettor, auction]) => new BetBuilder()
            .withAmount(amount)
            .withBettor(bettor)
            .withAuction(auction)
            .build()
        );
    }

    save({
        amount,
        auction,
        bettor,
    }) {
        return this.betSchema.create({
            amount,
            auctionId: auction.id,
            bettorId: bettor.id,
        }).then((savedBet) => this.toModel(savedBet));
    }

    saveAll(bets) {
        return Promise.all(bets.map(bet => this.save(bet)));
    }

    getByAuctionId(auctionId) {
        return this.betSchema.findAll({
            where: {
                auctionId: {
                    [this.op.eq]: auctionId,
                },
            },
        }).then(savedBets => savedBets.map(savedBet => this.toModel(savedBet)));
    }
}
