export function configureRepositories({
    AuctionsRepository,
    BetsRepository,
    UsersRepository,
    AuctionSchema,
    BetSchema,
    UserSchema,
    Sequelize,
    sequelize,
}) {
    const usersRepository = new UsersRepository({
        Sequelize,
        sequelize,
        schema: UserSchema({
            Sequelize,
            sequelize,
        }),
    });
    const auctionsRepository = new AuctionsRepository({
        Sequelize,
        sequelize,
        schema: AuctionSchema({
            Sequelize,
            sequelize,
        }),
        usersRepository,
    });
    const betsRepository = new BetsRepository({
        Sequelize,
        sequelize,
        schema: BetSchema({
            Sequelize,
            sequelize,
        }),
        usersRepository,
        auctionsRepository,
    });

    auctionsRepository.betsRepository = betsRepository;    

    sequelize.sync();

    return {
        betsRepository,
        usersRepository,
        auctionsRepository,
    };
}
