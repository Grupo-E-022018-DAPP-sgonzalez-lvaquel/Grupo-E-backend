export class UsersAdapter {
    parse() {
        return {
        };
    }

    serialize({id, kid}) {
        return {
            id,
            kid,
        };
    }
}
