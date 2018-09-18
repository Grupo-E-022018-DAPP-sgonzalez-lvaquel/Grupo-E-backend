import {UserBuilder} from '../Builders';

describe('AnonymousUser', () => {
    let anonymousUser;

    beforeEach(() => {
        anonymousUser = new UserBuilder().anonymous().build();
    });

    it('can not create an auction', () => {
        expect(anonymousUser.newAuction).toThrow();
    });

    it('can not bet on an auction', () => {
        expect(anonymousUser.bet).toThrow();
    });
});
