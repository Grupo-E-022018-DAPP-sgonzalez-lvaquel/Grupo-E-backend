export class BetsService {

    constructor({
        BetBuilder,
        auctionsRepository,
        betsRepository,
        usersRepository,
    }) {
        this.BetBuilder = BetBuilder;
        this.auctionRepository = auctionsRepository;
        this.betsRepository = betsRepository;
        this.usersRepository = usersRepository;
        this.auctionsRepository = auctionsRepository;
    }

    createBet(auctionId, amount, bettorId) {
        const bettor = this.usersRepository.get(bettorId);
        const auction = this.auctionsRepository.get(auctionId);
        const bet = new this.BetBuilder()
            .withAmount(amount)
            .withBettor(bettor)
            .build();
        auction.addBet(bet);
        return this.auctionRepository.save(auction);
    }

    getByAuctionId(auctionId) {
        return this.betsRepository.getByAuctionId(auctionId);
    }
}
