describe('Auction', () => {
    describe('who can bet', () => {
        describe('in a new auction', () => {
            let anyUser;
            beforeEach(() => {
                anyUser = new UserBuilder().build();
            });
            test('the owner can not bet', () => {
                // Setup
                const auction = new AuctionBuilder().withOwner(anyUser).build();

                // Exercise
                const actual = auction.canUserBet(user);

                // Verify
                expect(actual).toBeFalsy();
            });
            test('registered user can not bet', () =>{
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
                const anonymousUser = new UserBuilder().anonymous().build();
                const auction = new AuctionBuilder().build();

                // Exercise
                const actual = auction.canUserBet(anonymousUser);

                // Verify
                expect(actual).toBeFalsy();
            });
        });
        describe('in an in progress auction', () => {
            test('the owner can not bet', () => {
              expect(true);
            });
            test('last bettor can not bet', () => {
              expect(true);
            });
            test('registered user can bet if he is not the last bettor', () => {
              expect(true);
            });
            test('anonymous user can not bet', () => {
              expect(true);
            });
        });
        describe('in a finished auction', () => {
            test('the owner can not bet', () => {
              expect(true);
            });
            test('registered users can not bet', () => {
              expect(true);
            });
            test('anonymous users can not bet', () => {
              expect(true);
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
