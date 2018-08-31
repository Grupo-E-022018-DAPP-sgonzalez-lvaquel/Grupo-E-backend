describe('User', () => {
    describe('auction behaviour', () => {
        test('a user can create an auction');

        describe('auction betting', () => {
            test('a user can not bet in his own auction');
            test('a user can not bet in an auction if it is new');
            test('a user can bet in an auction if it is in progress');
            test('a user can not bet in an auction if it is finished');
        });
    });
});