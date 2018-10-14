import {
    AuctionBuilder
} from '../../Model/Builders';
import {
    SequelizeRepository
} from '../SequelizeRepository';

export class AuctionsRepository extends SequelizeRepository {

    constructor(props) {
        super(props);
        this.betsRepository = props.betsRepository;
        this.usersRepository = props.usersRepository;
    }

    toModel({
        id,
        ownerId,
        lastBettorId,
        originalEndDate,
        endDate,
        state,
    }, savedBets) {
        const owner = this.usersRepository.get(ownerId);
        const lastBettor = this.usersRepository.get(lastBettorId);

        return Promise.all([
            owner,
            lastBettor,
        ]).then(([owner, lastBettor]) => new AuctionBuilder()
            .withId(id)
            .withLastBettor(lastBettor)
            .withOriginalEndDate(originalEndDate)
            .withOwner(owner)
            .endsAt(endDate)
            .withBets(savedBets)
            .withState(state)
            .build()
        );
    }

    save(auction) {
        const savedAuction = this.schema.upsert({
            id: auction.id,
            ownerId: auction.owner.id,
            endDate: auction.endDate,
            originalEndDate: auction.originalEndDate,
            state: auction.state.name,
        });
        const savedBets = this.betsRepository.saveAll(auction.bets);

        return Promise.all([
            savedAuction,
            savedBets,
        ]).then((([
            savedAuction,
            savedBets
        ]) => this.toModel(savedAuction, savedBets)));
    }

    getRecent() {
        return this.schema.findAll({
            where: {
                createdAt: {
                    [this.op.gt]: this.yesterday,
                },
            },
        }).then(auctions => auctions.map(auction => this.toModel(auction)));
    }

    get yesterday() {
        return this._yesterday || new Date(Date.now() - (24 * 60 * 60 * 1000));
    }

    set yesterday(date) {
        this._yesterday = date;
    }
}
