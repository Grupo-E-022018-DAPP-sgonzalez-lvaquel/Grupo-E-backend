import {
    BetBuilder,
} from '../../Model/Builders';
import {
    BetsRepository
} from './BetsRepository';
import {
    BetSchema
} from '../../Schemas';
import {
    configureDBConnection
} from '../../../configureDBConnection';
import {
    Sequelize
} from 'sequelize';


describe('BetsRepository', () => {

    let auction;
    let bettor;
    let sequelize;
    let schema;
    let betsRepository;
    let usersRepository;
    let auctionsRepository;
    let bet1;
    let bet2;
    let bets;

    beforeAll(() => {

        auction = jest.fn();
        auction.id = 1;

        bettor = jest.fn();
        bettor.id = 1;

        usersRepository = {
            get: jest.fn().mockReturnValue(bettor)
        };

        auctionsRepository = {
            get: jest.fn().mockReturnValue(auction)
        };
    });


    beforeEach(() => {
        sequelize = configureDBConnection(Sequelize);

        schema = BetSchema({
            Sequelize,
            sequelize,
        });

        betsRepository = new BetsRepository({
            Sequelize,
            sequelize,
            schema,
            usersRepository,
            auctionsRepository,
        });

        bet1 = new BetBuilder()
            .withAmount(10)
            .withAuction(auction)
            .withBettor(bettor)
            .build();

        bet2 = new BetBuilder()
            .withAmount(20)
            .withAuction(auction)
            .withBettor(bettor)
            .build();

        bets = [bet1, bet2];
    });

    xit('returns an equal object', () => {
        return sequelize.sync().then(() => {
            betsRepository.save(bet1).then(savedBet => {
                Object.keys(bet1).forEach(key => {
                    expect(savedBet[key]).toEqual(bet1[key]);
                });
            });
        });
    });

    xit('saveAll', () => {
        return betsRepository.saveAll(bets).then((savedBets) =>
            savedBets.forEach((savedBet, index) =>
                Object.keys(bets[index]).forEach(key =>
                    expect(savedBet[key]).toEqual(bets[index][key])
                )
            ));
    });

    describe('getByAuctionId', async () => {

        xit('returns 1 if 1 bet is saved', () => {
            return betsRepository.save(bet1)
                .then(() =>
                    betsRepository.getByAuctionId(bet1.auction.id)
                ).then(betsByAuctionId =>
                    expect(betsByAuctionId).toHaveLength(1)
                );
        });
        xit('returns 2 if 2 bet is saved', () => {
            return betsRepository.saveAll(bets)
                .then(() =>
                    betsRepository.getByAuctionId(bet1.auction.id)
                ).then(betsByAuctionId =>
                    expect(betsByAuctionId).toHaveLength(2)
                );
        });
    });
});
