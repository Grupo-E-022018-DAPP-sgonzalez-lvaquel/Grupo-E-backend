export function configureServices({
    AuctionsService,
    AuctionBuilder,
    auctionsRepository,
    BetsService,
    BetBuilder,
    betsRepository,
    usersRepository,
    UserBuilder,
    UsersService,
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

    const usersService = new UsersService({
        UserBuilder,
        usersRepository,
    });

    return {
        auctionsService,
        betsService,
        usersService,
    };
}
