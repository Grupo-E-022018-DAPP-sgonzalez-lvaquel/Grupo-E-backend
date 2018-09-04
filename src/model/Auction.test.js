import {
    AuctionBuilder,
    UserBuilder
} from './Builders';


describe('Auction', () => {
    describe('who can bet', () => {
        let anyUser;
        let anyOtherUser;
        let anonymousUser;
      
        beforeEach(() => {
            anyUser = new UserBuilder().build();
            anyOtherUser = new UserBuilder().build();
            anonymousUser = new UserBuilder().anonymous().build();
        });

        describe('in a new auction', () => {
            test('the owner can not bet', () => {
                // Setup
                const auction = new AuctionBuilder().withOwner(anyUser).build();

                // Exercise
                const actual = auction.canUserBet(anyUser);

                // Verify
                expect(actual).toBeFalsy();
            });
            test('registered user can not bet', () => {
                // Setup
                const anyOtherUser = new UserBuilder().build();
                const auction = new AuctionBuilder().withOwner(anyUser).build();

                // Exercise
                const actual = auction.canUserBet(anyOtherUser);

                // Verify
                expect(actual).toBeFalsy();
            });
            test('anonymous user can not bet', () => {
                // Setup
                const auction = new AuctionBuilder().build();

                // Exercise
                const actual = auction.canUserBet(anonymousUser);

                // Verify
                expect(actual).toBeFalsy();
            });
        });
        describe('in an in progress auction', () => {
            test('the owner can not bet', () => {
            // Setup
                const auction = new AuctionBuilder()
                    .inProgress()
                    .withOwner(anyUser)
                    .build();
    
                // Exercise
                const actual = auction.canUserBet(anyUser);
    
                // Verify
                expect(actual).toBeFalsy();
            });
            test('last bettor can not bet', () => {
            // Setup
                const auction = new AuctionBuilder()
                    .inProgress()
                    .withLastBettor(anyUser)
                    .build();
    
                // Exercise
                expect(auction.canUserBet(anyUser)).toBeFalsy();
            });
            test('registered user can bet if he is not the last bettor', () => {
            // Setup
                const auction = new AuctionBuilder()
                    .inProgress()
                    .withLastBettor(anyOtherUser)
                    .build();
    
                // Exercise
                expect(auction.canUserBet(anyUser)).toBeTruthy();
            });
            test('anonymous user can not bet', () => {
            // Setup
                const auction = new AuctionBuilder()
                    .inProgress()
                    .build();
    
                // Exercise
                expect(auction.canUserBet(anonymousUser)).toBeFalsy();
            });
        });
        describe('in a finished auction', () => {
            test('the owner can not bet', () => {
                // Setup
                const auction = new AuctionBuilder()
                    .withOwner(anyUser)
                    .ended()
                    .build();

                // Exercise
                expect(auction.canUserBet(anyUser)).toBeFalsy();
            });
            test('registered users can not bet', () => {
                // Setup
                const auction = new AuctionBuilder()
                    .ended()
                    .build();
              
                // Exercise
                expect(auction.canUserBet(anyUser)).toBeFalsy();
            });
            test('anonymous users can not bet', () => {
                // Setup
                const auction = new AuctionBuilder()
                    .ended()
                    .build();
                
                // Exercise
                expect(auction.canUserBet(anonymousUser)).toBeFalsy();
            });
        });
    });
    describe('when it ends', () => {
        describe('when a user bets before the last 5 minutes', () => {
            test('the time of finalization does not extend', () => {
                expect(true);
            });
        });
        describe('when a user bets in the last 5 minutes before 48hs passed original time of finalization', () => {
            test('the time of finalization extends by 5 minutes', () => {
                expect(true);
            });
        });
        describe('when a user bets in the last 5 minutes before 48hs passed original time of finalization', () => {
            test('the time of finalization does not extend', () => {
                expect(true);
            });
        });
    });
});
