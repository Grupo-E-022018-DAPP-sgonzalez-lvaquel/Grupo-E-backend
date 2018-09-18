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
        const betDTO = {};
        describe('when a user bets before the last 5 minutes', () => {
            test('the time of finalization does not extend', () => {
                // Setup
                const date = Date.parse('Jan 5, 1995 20:00');
                const clockMock = {now: () => Date.parse('Jan 4, 1995 20:00')};
                const auction = new AuctionBuilder().withClock(clockMock).withOriginalEndDate(date).endsAt(date).build();

                // Exercise
                auction.addBet(betDTO);

                // Verify
                expect(auction.endDate).toEqual(date);
            });
        });
        describe('when a user bets in the last 5 minutes before 48hs passed original time of finalization', () => {
            test('the time of finalization extends by 5 minutes', () => {
                // Setup
                const date = Date.parse('Jan 4, 1995 20:00');
                const extendedDate = Date.parse('Jan 4, 1995 20:05');
                const clockMock = {now: () => Date.parse('Jan 4, 1995 19:59')};
                const auction = new AuctionBuilder().withClock(clockMock).withOriginalEndDate(date).endsAt(date).build();

                // Exercise
                auction.addBet(betDTO);

                // Verify
                expect(auction.endDate).toEqual(extendedDate);
            });
        });
        describe('when a user bets in the last 5 minutes before 48hs passed original time of finalization', () => {
            test('the time of finalization does not extend', () => {
                // Setup
                const originalDate = Date.parse('Jan 2, 1995 19:00');
                const date = Date.parse('Jan 4, 1995 20:00');
                const clockMock = {now: () => Date.parse('Jan 4, 1995 19:59')};
                const auction = new AuctionBuilder().withClock(clockMock).withOriginalEndDate(originalDate).endsAt(date).build();

                // Exercise
                auction.addBet(betDTO);

                // Verify
                expect(auction.endDate).toEqual(date);
            });
        });
    });
});
