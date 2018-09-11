import { UserBuilder } from './Builders';

describe('User', () => {
    describe('auction behaviour', () => {
        let owner;

        beforeEach(() => {
            owner = new UserBuilder().build();
        });

        test('a user can create an auction', () => {
            // Exercise
            expect(owner.newAuction()).toBeTruthy();
        });

        describe('auction betting', () => {
            let auction;
            let anyOtherUser;

            beforeEach(() => {
                auction = owner.newAuction();
                anyOtherUser = new UserBuilder().build();
            });

            test('a user can not bet in his own auction', () => {
                // Exercise
                expect(auction.canUserBet(owner)).toBeFalsy();
            });
            test('a user can not bet in an auction if it is new', () => {
                // Exercise
                expect(auction.canUserBet(anyOtherUser)).toBeFalsy();
            });
            test('a user can bet in an auction if it is in progress', () => {
                // Exercise
                auction.start();

                expect(auction.canUserBet(anyOtherUser)).toBeTruthy();
            });
            test('a user can not bet in an auction if it is finished', () => {
                // Exercise
                auction.end();

                expect(auction.canUserBet(anyOtherUser)).toBeFalsy();
            });
        });
    });
});
