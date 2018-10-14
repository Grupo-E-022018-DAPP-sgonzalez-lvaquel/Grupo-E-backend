import {
    BetBuilder
} from '../../Model/Builders';
import {
    SequelizeRepository
} from '../SequelizeRepository';

export class BetsRepository extends SequelizeRepository {

    constructor(props) {
        super(props);
        this.usersRepository = props.usersRepository;
        this.auctionsRepository = props.auctionsRepository;
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
        return this.schema.create({
            amount,
            auctionId: auction.id,
            bettorId: bettor.id,
        }).then((savedBet) => this.toModel(savedBet));
    }

    getByAuctionId(auctionId) {
        return this.schema.findAll({
            where: {
                auctionId: {
                    [this.op.eq]: auctionId,
                },
            },
        }).then(savedBets => savedBets.map(savedBet => this.toModel(savedBet)));
    }
}
