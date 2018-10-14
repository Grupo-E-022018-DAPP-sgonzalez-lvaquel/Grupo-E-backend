import {
    Sequelize
} from 'sequelize';
import {
    AuctionsRepository
} from './AuctionsRepository';
import {
    AuctionSchema
} from '../../Schemas';
import {
    AuctionBuilder
} from '../../Model/Builders';
import {
    configureDBConnection
} from '../../../configureDBConnection';

describe('AuctionsRepository', () => {

    let sequelize;
    let auctionsRepository;
    let auction1;
    let auction2;
    let schema;
    let betsRepository;
    let usersRepository;
    let user1;
    let users;

    beforeEach(() => {
        user1 = jest.fn();
        user1.id = 1;

        users = [
            user1,
        ];

        betsRepository = jest.fn();
        betsRepository.saveAll = jest.fn((a) => a);

        usersRepository = jest.fn();
        usersRepository.get = jest.fn((id) => users.find(user => user.id == id));

        sequelize = configureDBConnection(Sequelize);

        schema = AuctionSchema({
            Sequelize,
            sequelize,
        });

        auction1 = new AuctionBuilder()
            .withOwner(user1)
            .endsAt(new Date('2018-10-01 20:00'))
            .withOriginalEndDate(new Date('2018-10-01 20:00'))
            .build();

        auctionsRepository = new AuctionsRepository({
            Sequelize: {
                Op: {},
            },
            betsRepository,
            usersRepository,
            sequelize,
            schema,
        });
    });

    xit('returns an equal object', () => {
        return auctionsRepository.save(auction1).then(savedAuction => {
            Object.keys(auction1).forEach(key => {
                expect(savedAuction[key]).toEqual(auction1[key]);
            });
        });
    });

    describe('getRecent', () => {
        xit('gets auctions with originalEndDates more recent than yesterday', () => {
            auction1 = new AuctionBuilder().withOwner(user1).withOriginalEndDate(new Date('2018-01-10 20:00')).build();
            auction2 = new AuctionBuilder().withOwner(user1).withOriginalEndDate(new Date('2018-01-11 20:00')).build();
            auctionsRepository.yesterday = new Date('2018-02-10 20:00');

            return Promise.all([
                auctionsRepository.save(auction1),
                auctionsRepository.save(auction2),
            ]).then(() => auctionsRepository.getRecent().then(recentAuctions => {
                expect(recentAuctions).toHaveLength(0);
            }));
        });
    });
});
