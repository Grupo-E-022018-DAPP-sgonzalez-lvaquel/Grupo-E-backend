export class BetsService {

    constructor({
        BetBuilder,
        betsRepository,
    }) {
        this.BetBuilder = BetBuilder;
        this.betsRepository = betsRepository;
    }

    createBet(auctionId, {
        amount,
        bettor,
    }) {
        const bet = new this.BetBuilder()
            .withAuction({
                id: auctionId
            })
            .withAmount(amount)
            .withBettor(bettor)
            .build();
        return this.betsRepository.save(bet);
    }

    getByAuctionId(auctionId) {
        return this.betsRepository.getByAuctionId(auctionId);
    }
}
