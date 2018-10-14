import {
    AuctionBuilder
} from '../../Model/Builders';
import {
    SequelizeRepository
} from '../SequelizeRepository';

export class AuctionsRepository extends SequelizeRepository {

    constructor({
        betsRepository,
        usersRepository,
        ...otherProps
    }) {
        super(otherProps);
        this.betsRepository = betsRepository;
        this.usersRepository = usersRepository;
    }

    toModel({
        id,
        ownerId,
        lastBettorId,
        originalEndDate,
        endDate
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
            .build()
        );
    }

    save(auction) {
        const savedAuction = this.schema.create({
            ownerId: auction.owner.id,
            endDate: auction.endDate,
            originalEndDate: auction.originalEndDate,
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
