export function configureServices({
    AuctionsService,
    AuctionBuilder,
    auctionsRepository,
    BetsService,
    BetBuilder,
    betsRepository,
    usersRepository,
}) {
    const auctionsService = new AuctionsService({
        AuctionBuilder,
        auctionsRepository,
    });
    const betsService = new BetsService({
        BetBuilder,
        auctionsRepository,
        betsRepository,
        usersRepository,
    });

    return {
        auctionsService,
        betsService
    };
}
